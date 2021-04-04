import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const {isLoading, hits} = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return <section className="stories">
    {hits.map((story) => {
      const {points, story_title, objectID,author, num_comments } = story
      return <article className='story'>
        <h1>{story_title}</h1>
        <p>{points} points by {author} | {num_comments || null}comments</p>
      </article>
    })}
  </section>
};

export default Stories;
