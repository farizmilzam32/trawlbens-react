import React from "react";
import { gql, useQuery } from "@apollo/client";
import logoTrawlbens from "./assets/images/logo-TB-panjang-white-1.png";
import logoGooglePlay from "./assets/images/logo-google-play.png";

const Head = (props) => {
  const MyQuery = gql`
    query MyQuery($slug: String!) {
      marketing(where: { url: $slug }) {
        article {
          raw
        }
        tier8
        origin
        destination
        url
      }
    }
  `;

  const { loading, error, data } = useQuery(MyQuery, {
    variables: { slug: props.data },
  });
  if (loading) return "Loading....";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div className="grid grid-row-2 md:grid-cols-2 background-jasa-top">
        <div className="text-center pt-28">
          <h1 className="text-[25px] text-putih">Ekpedisi Cargo</h1>
          <h1 className="text-3xl md:text-[48px] text-putih">
            {data.marketing.origin} - {data.marketing.destination}
          </h1>
          <h1 className="text-[25px] text-putih">
            Spesialis Kirim Barang Diatas 10 kg dan 1 ton
          </h1>
          <button className="m-4 px-4 py-2 text-putih bg-[#253E25] rounded-xl border-solid border-2 text-[20px]">
            Chat Sekarang
          </button>
          <div className="grid grid-rows-2 md:grid-cols-2 m-24">
            <img src={logoTrawlbens} alt="" />
            <img src={logoGooglePlay} alt="" />
          </div>
        </div>
        <div>
          <img
            src="https://media.graphcms.com/joPoIqVPRQZneVqnHKSx"
            alt="banner-1"
            className="w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
