import React from 'react';
import langColors from '../colors.json';

/* 
  const totalCount = Object.values(languages).reduce((acc, v) => acc + v);
  const langElems = Object.entries(languages).map(entry => {
    const [key, value] = entry;
    const percentage = (value / totalCount) * 100;

    const langElem = document.createElement('span');
    langElem.style.width = percentage + '%';
    langElem.style.height = '100%';
    langElem.style.background = langColors[key].color;
    langElem.style.display = 'inline-block';
    
    return langElem;
  });
*/

class FooterStrips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: [],
      total: 0,
    };
  }

  componentDidMount() {
    fetch(this.props.data.languages_url)
      .then((r) => r.json())
      .then((languages) => {
        this.setState((state) => ({
          ...state,
          langs: Object.entries(languages),
          total: Object.values(languages).reduce((acc, v) => acc + v, 0),
        }));
      });
  }

  render() {
    return (
      <div style={{ height: '10px', position: 'absolute', bottom: '5px', left: 0, right: 0 }}>
        {this.state.langs.map(([key, value]) => {
          const percentage = (value / this.state.total) * 100;

          return (
            <span
              title={key}
              style={{
                display: 'inline-block',
                height: '100%',
                width: percentage + '%',
                background: langColors[key]?.color,
              }}
            ></span>
          );
        })}
      </div>
    );
  }
}

export default FooterStrips;
