import React from 'react';
import ProjectCard from '../ProjectCard';
import './ProjectCardList.css';

class ProjectCardList extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/facebook/repos')
      .then(r => r.json())
      .then((data) => 
        this.setState(state => ({
          ...state,
          list: data,
        }))
      );
  }

  render() {

    return <div className="list">
      {
        this.state.list.length === 0
        ? 'Empty list'
        : this.state.list.map(data => <ProjectCard key={data.id} data={data} />)
      }
    </div>;
  }
}

export default ProjectCardList;
