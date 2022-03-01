import React, { Component } from "react";
import Slider from "react-slick";

export default class MyCarousel extends Component {
  render() {
    var setting = {
      dots: true,
      infinite: false,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div className="md:hidden">
        <h1 className="text-center text-3xl my-4">Blog TrawlBens</h1>
        <Slider {...setting}>
          <div className="wrapper">
            <a href="https://blog.trawlbens.id/kepuasan-pelanggan/">
              <img
                src="https://media.graphcms.com/j2bi2lEpRue33THsPW1Y"
                alt=""
                className="w-9/12 rounded-[10px]"
              />
              <h3 className="font-bold text-xs">
                Kepuasan Pelanggan Menggunakan TrawlBens
              </h3>
              <p className="text-xs">21 Sept 2021</p>
            </a>
          </div>
          <div className="wrapper">
            <a href="https://blog.trawlbens.id/peluang-usaha/">
              <img
                src="https://media.graphcms.com/J76fUqhbSSg6NVDsyOzQ"
                alt=""
                className="w-9/12 rounded-[10px]"
              />
            </a>
            <h1 className="font-bold text-xs">
              Peluang Usaha Jasa Pengiriman Bersama TrawlBens
            </h1>
            <p className="text-xs">21 Sept 2021</p>
          </div>
          <div className="wrapper">
            <a href="https://blog.trawlbens.id/keuntungan-jasa-pengiriman/">
              <img
                src="https://media.graphcms.com/0rQBiSDRpWUZNrpLCQbC"
                alt=""
                className="w-9/12 rounded-[10px]"
              />
            </a>
            <h1 className="font-bold text-xs">
              13 Keuntungan Jasa Pengiriman Trawlbens
            </h1>
            <p className="text-xs">21 Sept 2021</p>
          </div>
        </Slider>
      </div>
    );
  }
}
