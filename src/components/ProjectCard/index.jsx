import React from 'react';
import FooterStrips from './FooterStrips';
import './ProjectCard.css';
import colors from './colors.json';

function ProjectCard(props) {
  const { data } = props;

  return (
    <article className="card">
      <img className="proj-img" src={data.owner.avatar_url} alt="owner avatar" />

      <div className="flex ai-center card-header">
        <img src="/imgs/book.svg" alt="repo svg" />
        <div> <a className="titleLink" href={data.html_url}> {data.full_name} </a> </div>
      </div>

      <div className="card-descr">
        {data.description}
      </div>

      <div className="flex card-footer">
        <div className="flex ai-center">
          <div style={{ backgroundColor: colors[data.language] !== undefined ? colors[data.language].color : '' }} className="lang-circle"></div>
          <div>{data.language ? data.language : 'None'}</div>
        </div>

        <div className="flex">
          <img src="/imgs/star.svg" alt="star" />
          {data.stargazers_count}
        </div>

        <div className="flex">
          <img src="/imgs/branch.svg" alt="branch" />
          {data.forks_count}
        </div>
      </div>
      <FooterStrips data={data} />
    </article>
  )
}

export default ProjectCard;
