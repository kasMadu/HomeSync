import React from "react";
import BannerImg1 from "../../assets/banner_img1.jpg";
import BannerImg2 from "../../assets/banner_img2.jpg";
import BannerImg3 from "../../assets/banner_img3.jpg";
import "./Banner.css";
import { ImageSlider } from "./ImageSlider";

const Images = [BannerImg1, BannerImg2, BannerImg3];

const Banner = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ImageSlider imageUrls={Images} />
    </div>
  );
};

export default Banner;
