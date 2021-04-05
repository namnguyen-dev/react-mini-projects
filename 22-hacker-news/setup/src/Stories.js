import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map(story => {
        const { points, story_title:title, objectID, author, num_comments,story_url:url } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} |</span> {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link" target='_blank' rel='noopener noreferrer'>
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
