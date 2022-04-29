import React from 'react';
import ProjectCard from '../ProjectCard';
import './ProjectCardList.css';

class ProjectCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      list: [],
    };
  }

  componentDidMount() {
    this.loadRepos('facebook');
  }

  loadRepos = (username) => {
    const calcUser = username || this.state.username;

    fetch(`https://api.github.com/users/${calcUser}/repos`)
      .then((r) => r.json())
      .then((data) =>
        this.setState((state) => ({
          ...state,
          list: data,
        }))
      );
  };

  onChange = (e) => {
    this.setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.loadRepos();
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <form style={{ marginBottom: '20px' }} onSubmit={this.onSubmit}>
          <input type="text" name="username" onChange={this.onChange} onKeyDown={this.onSubmit} />
          <button type="submit">Load</button>
        </form>
        <div className="list">
          {this.state.list.length
            ? this.state.list.map((data) => (
                <ProjectCard key={data.id} data={data} />
              ))
            : 'Empty list'}
        </div>
      </div>
    );
  }
}

export default ProjectCardList;
