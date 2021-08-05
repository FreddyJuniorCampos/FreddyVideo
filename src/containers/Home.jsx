import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/db';

const Home = () => {
  const data  = useInitialState(API);

  return (
    <>
      <Search />

      {data.initialState?.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {data.initialState.mylist.map(item => 
              <CarouselItem key={item.id} {...item} />
            )} 
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {data.initialState?.trends.map(item => 
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {data.initialState?.originals.map(item => 
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;