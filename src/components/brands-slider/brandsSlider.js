import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Alb from "../../asset/img/AlB.png";
import Snb from "../../asset/img/snb.png";
import Rb from "../../asset/img/rb.png";
import Loo from "../../asset/img/loo.png";
import Bab from "../../asset/img/bab.png";
import Ab from "../../asset/img/ab.png";
import tamm from "../../asset/img/tamm.png";
import all from "../../asset/img/all.png";
import nbd from "../../asset/img/nbd.png";
import Emk from "../../asset/img/emk.png";

const data = [
  {
    id: 1,

    title: "Al Rajhi Bank",
    Image: Alb,
  },
  {
    id: 2,
    title: "Saudi National Bank",
    Image: Snb,
  },

  {
    id: 3,

    title: "Riyad Bank",
    Image: Rb,
  },

  {
    id: 4,

    title: "Al Jazira Bank",
    Image: Loo,
  },
  {
    id: 5,

    title: "Al Bilad Bank",
    Image: Bab,
  },
  {
    id: 6,

    title: "Arab National Bank",
    Image: Ab,
  },
  {
    id: 7,

    title: "Emkan",
    Image: Emk,
  },
  {
    id: 8,

    title: "Tamam",
    Image: tamm,
  },
  {
    id: 9,

    title: "Abdul Latif Jameel",
    Image: all,
  },
  {
    id: 10,

    title: "Emirates NBD",
    Image: nbd,
  },
];

const BrandsSlider = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 6, // Set the number of columns you want to display at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ p: "10px" }}>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} style={{ marginRight: "20px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                gap: "15px",
                marginRight: "20px",
              }}
            >
              <img src={item.Image} alt={item.title} />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default BrandsSlider;
