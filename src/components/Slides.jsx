import React from "react";
import { Carousel } from "react-bootstrap";
import '../style/SlidesStyle.css';

const Slides = () => {
  return (
    <div id="container_carousel">
      <Carousel>
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src="http://img.aullidos.com/imagenes/varios/mortal-kombat-banner-new.jfif"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/2517.jpg"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src="https://etb.com/play/Imagenes/principales/banner3.jpg"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
