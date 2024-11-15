import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialWidget({rtl}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: rtl,
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

  return (
    <div className="relative isolate bg-white overflow-hidden text-black">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4 ">
            <div className='overflow-hidden rounded-2xl bg-gray-100 shadow-lg p-20 border-b-black'>
              <h3 className="text-lg font-bold">{item}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialWidget;
