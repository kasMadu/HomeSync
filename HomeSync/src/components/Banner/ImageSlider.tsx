import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot } from "lucide-react";
import "./Banner.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const TextsOnTheImage = ["Find The House Of Your Dream Using Our Platform", ""];
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="bannerImg">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <div className="textOnTheImg">
          Find The House Of Your Dream Using Our Platform
        </div>
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <svg style={{ scale: "1.2" }}>
                <circle cx="50%" cy="50%" r="5" fill="black" />
              </svg>
            ) : (
              <svg>
                <circle cx="50%" cy="50%" r="5" fill="black" />
              </svg>
            )}{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
