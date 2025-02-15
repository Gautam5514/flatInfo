import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";

const Residencies = () => {
  const data = [
    {
      id: 1,
      image: "https://source.unsplash.com/300x200/?house,modern",
      title: "Modern House",
      description: "A beautiful modern house with a spacious living room.",
      price: 250000,
    },
    {
      id: 2,
      image: "https://source.unsplash.com/300x200/?apartment,urban",
      title: "Urban Apartment",
      description: "A cozy apartment in the heart of the city.",
      price: 150000,
    },
    {
      id: 3,
      image: "https://source.unsplash.com/300x200/?villa,luxury",
      title: "Luxury Villa",
      description: "A luxurious villa with a private pool and garden.",
      price: 500000,
    },
    {
      id: 4,
      image: "https://source.unsplash.com/300x200/?cottage,rustic",
      title: "Rustic Cottage",
      description: "A charming cottage surrounded by nature.",
      price: 120000,
    },
    {
      id: 5,
      image: "https://source.unsplash.com/300x200/?penthouse,view",
      title: "Penthouse with View",
      description: "A stunning penthouse with a panoramic city view.",
      price: 350000,
    },
    {
      id: 6,
      image: "https://source.unsplash.com/300x200/?townhouse,suburban",
      title: "Suburban Townhouse",
      description: "A family-friendly townhouse in a quiet neighborhood.",
      price: 200000,
    },
    {
      id: 7,
      image: "https://source.unsplash.com/300x200/?mansion,estate",
      title: "Grand Mansion",
      description: "A grand mansion with elegant architecture.",
      price: 750000,
    },
    {
      id: 8,
      image: "https://source.unsplash.com/300x200/?condo,modern",
      title: "Modern Condo",
      description: "A sleek and modern condo with all amenities.",
      price: 180000,
    },
  ];

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};