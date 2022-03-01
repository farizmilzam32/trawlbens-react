import React from "react";

const HowTo = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-rows-1 md:grid-cols-3">
        <div>
          <h1 className="text-center text-3xl text-merah">Promo</h1>
          <img
            src="https://media.graphcms.com/9qdPMqWxTd27Su4y0Irz"
            alt="promo"
            className="rounded-[15px]"
          ></img>
        </div>
        <div>
          <h1 className="text-center text-3xl text-merah">Cara Order</h1>
          <img
            src="https://media.graphcms.com/Q7re0uR5TqG3AoGGIjMy"
            alt="promo"
            className="rounded-[15px]"
          ></img>
        </div>
        <div>
          <h1 className="text-center text-3xl text-merah">Cara Bayar</h1>
          <img
            src="https://media.graphcms.com/2GYRLuTSQuBD3qfYRltQ"
            alt="promo"
            className="rounded-[15px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
