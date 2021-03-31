import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import { getByTitle } from '@testing-library/dom';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktails matched your criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item)=> {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  );
};

export default CocktailList;
