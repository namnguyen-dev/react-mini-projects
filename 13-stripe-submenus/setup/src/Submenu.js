import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  const [columns, setColumns]=useState('col-2')

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(links.length ===3){
      setColumns('col-3')
    }
    if(links.length >3){
      setColumns('col-4')
    }
  }, [location, links]);
  
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <div className="">
        <article>
          <h1>{page}</h1>
          <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
              const { url, icon, label } = link;
              return (
                <a href={url} key={index}>
                  {icon}
                  {label}
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Submenu;
