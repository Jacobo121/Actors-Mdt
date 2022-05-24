import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerCards from './components/ContainerCards';
import Cards from './components/Cards';
import {movies} from './Info';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ContainerCards >
      {
        movies.map(item => 
        <Cards 
          card_img={item.posterurl}
          title={item.title}
          text={item.storyline}
          genders={item.genres.toString()}
        />)
      }
    </ContainerCards>
  </React.StrictMode>
);


