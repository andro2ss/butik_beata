import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "./GallerySection.scss";

export function GallerySection() {
  return (
    <div className="page__container" id="galeria">
      <h2>Galeria</h2>
      <CCarousel
        controls
        transition="crossfade"
        indicators
        className="gallery__item"
      >
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/budynek.jpg")}
            alt="Centrum Handlowe"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/witryna.jpg")}
            alt="Witryna sklepu"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/torbaSzal.jpg")}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/spodnie.jpg")}
            alt="Spodnie"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/regalCiuchy.jpg")}
            alt="Regal z ciuchami"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/czapki.jpg")}
            alt="Czapki"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../../../images/bluzki.jpg")}
            alt="bluzki"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
