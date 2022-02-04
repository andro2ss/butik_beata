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
            src={require("../images/img1.jpg")}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../images/img2.jpg")}
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../images/img3.jpg")}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={require("../images/img4.jpg")}
            alt="slide 4"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
