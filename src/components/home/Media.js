import React from "react";
import { ReactComponent as Media1 } from "./assets/media/indonesia-inside.svg";
import { ReactComponent as Media2 } from "./assets/media/jpnn.svg";
import { ReactComponent as Media3 } from "./assets/media/republika.svg";
import { ReactComponent as Media4 } from "./assets/media/rmcoid.svg";
import { ReactComponent as Media5 } from "./assets/media/sindo-news.svg";
import { ReactComponent as Media6 } from "./assets/media/tribun-news.svg";

const Media = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10 md:mt-0">
        Telah diliput oleh
      </h1>
      <div className="grid grid-cols-2 gap-4 wrapper md:grid-cols-3">
        <Media1 className="w-11/12" />
        <Media2 className="w-11/12" />
        <Media3 className="w-11/12" />
        <Media4 className="w-11/12" />
        <Media5 className="w-11/12" />
        <Media6 className="w-11/12" />
      </div>
    </div>
  );
};

export default Media;
