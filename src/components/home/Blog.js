import React from "react";

const Blog = () => {
  return (
    <div className="wrapper md:block hidden">
      <h1 className="text-center text-3xl my-4">Blog TrawlBens</h1>
      <div className="grid grid-cols-2 ">
        <div>
          <a href="https://blog.trawlbens.id/kepuasan-pelanggan/">
            <img
              src="https://media.graphcms.com/j2bi2lEpRue33THsPW1Y"
              alt=""
              className="w-11/12 rounded-[10px]"
            />
          </a>
          <div>
            <h3 className="font-bold text-xl">
              Kepuasan Pelanggan Menggunakan TrawlBens
            </h3>
            <p className="text-xs">21 Sept 2021</p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-2">
            <a href="https://blog.trawlbens.id/peluang-usaha/">
              <img
                src="https://media.graphcms.com/J76fUqhbSSg6NVDsyOzQ"
                alt=""
                className="w-11/12 rounded-[10px]"
              />
            </a>
            <div>
              <h1 className="font-bold text-xl">
                Peluang Usaha Jasa Pengiriman Bersama TrawlBens
              </h1>
              <p className="text-xs">21 Sept 2021</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <a href="https://blog.trawlbens.id/keuntungan-jasa-pengiriman/">
              <img
                src="https://media.graphcms.com/0rQBiSDRpWUZNrpLCQbC"
                alt=""
                className="w-11/12 rounded-[10px]"
              />
            </a>
            <div>
              <h1 className="font-bold text-xl">
                13 Keuntungan Jasa Pengiriman Trawlbens
              </h1>
              <p className="text-xs">21 Sept 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
