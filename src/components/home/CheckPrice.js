import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";

const checks = [
  {
    name: "Cek Tarif",
    value: "cektarif",
  },
  {
    name: "Lacak Barang",
    value: "lacakbarang",
  },
];
const CheckPrice = () => {
  const [activeButton, setActiveButton] = useState(checks[0].name);
  const handleClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };
  const [origin, setOrigin] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.trawlbens.com/api/geo/list?type=regency&origin=1&per_page=-1"
      )
      .then((response) => {
        const transformedOrigin = response.data.data.map((originData) => {
          return {
            id: originData.id,
            name: originData.name,
          };
        });
        setOrigin(transformedOrigin);
      });
  }, []);
  const [regency, setRegency] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadRegency = async () => {
      const response = await axios.get(
        `https://www.trawlbens.com/api/geo/list?type=sub_district&search=${text}&per_page=100`
      );
      const transformedRegency = response.data.data.map((regencyData) => {
        return {
          id: regencyData.regency_id,
          regency: regencyData.regency,
          district: regencyData.district,
          sub_district: regencyData.sub_district,
        };
      });
      setRegency(transformedRegency);
    };
    loadRegency();
  }, [text]);
  const [inputDestination, setInputDestination] = useState([]);
  const getDestination = (value) => {
    setInputDestination(value);
  };
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
    setInputDestination(text);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = regency.filter((rgcy) => {
        const regex = new RegExp(`${text}`, "gi");
        return rgcy.regency.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  const [inputOrigin, setInputOrigin] = useState([]);
  const handleClickOrigin = (e) => {
    const value = e.target.value;
    setInputOrigin(value);
  };

  const [price, setPrice] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.trawlbens.com/api/pricing/tarif?origin_id=${inputOrigin}&destination_id=${inputDestination}&service_code=tps`
      )
      .then((response) => {
        const price = response.data.data.tier_1;
        const notes = response.data.data.notes;
        setPrice({ price, notes });
      });
  }, [inputOrigin, inputDestination]);

  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`"Form sumbitted", ${data}`);
  };
  const [packages, setPackage] = useState([]);
  useEffect(() => {
    const loadPackages = async () => {
      await axios
        .get(
          `https://www.trawlbens.com/api/order/find?per_page=-1&code=${data}`
        )
        .then((response) => {
          const senderName = response.data.data.package.sender_name;
          const receiverName = response.data.data.package.receiver_name;
          setPackage({ senderName, receiverName });
        });
    };
    loadPackages();
  }, [data]);
  const [track, setTrack] = useState([]);
  useEffect(() => {
    const loadTrack = async () => {
      await axios
        .get(
          `https://www.trawlbens.com/api/order/find?per_page=-1&code=${data}`
        )
        .then((response) => {
          const transformedTrack = response.data.data.track.map((trackData) => {
            return {
              date: trackData.created_at,
              description: trackData.description,
            };
          });
          setTrack(transformedTrack);
        });
    };
    loadTrack();
  }, [data]);
  return (
    <div className="md:wrapper mx-8 my-4">
      <div className="card p-8">
        <div className="flex">
          {checks.map((item) => {
            const className =
              activeButton === item.name
                ? "bg-hijau text-putih py-2 px-4 rounded-full mb-4 mr-2 text-lg font-bold text-[15px] md:text-sm"
                : "bg-putih text-black py-2 px-4 rounded-full mb-4 mr-2 text-lg font-bold text-[15px] md:text-sm";
            return (
              <div key={item.value}>
                <button
                  className={`${className}`}
                  name={item.name}
                  value={item.value}
                  onClick={handleClick}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
        {activeButton === "Cek Tarif" && (
          <FormControl fullwidth>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="kotaAsal" className="font-bold">
                  Kota Asal Pengiriman
                </label>
                <select
                  className="w-12/12 border-style"
                  id="kotaAsal"
                  type="text"
                  placeholder="Masukkan kota asal"
                  onChange={handleClickOrigin}
                >
                  <option>Masukkan Kota Asal</option>
                  {origin.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="kotaTujuan" className="font-bold">
                  Kota Tujuan Pengiriman
                </label>
                <input
                  className="w-11/12 border-style"
                  id="kotaTujuan"
                  type="text"
                  placeholder="Masukkan kota tujuan"
                  onChange={(e) => [onChangeHandler(e.target.value)]}
                  value={text}
                />
                {suggestions &&
                  suggestions.map((suggestions) => (
                    <div
                      value={suggestions.id}
                      className=""
                      onClick={() => [
                        onSuggestHandler([
                          suggestions.regency + " ",
                          suggestions.district + " ",
                          suggestions.sub_district,
                        ]),
                        getDestination(suggestions.id),
                      ]}
                    >
                      {suggestions.regency} | {suggestions.district} |
                      {suggestions.sub_district}
                    </div>
                  ))}
              </div>
            </div>
            <div className="pb-6">
              <input id="berat" type="checkbox" className="mr-1"></input>
              <label htmlFor="berat" className="mr-2">
                Weigth
              </label>
              <input id="berat" type="checkbox" className="mr-1"></input>
              <label htmlFor="berat">Volume</label>
            </div>
            <div>
              {price.price ? (
                <div>
                  <h1 className="font-bold mb-10">Tarif</h1>
                  <h1>Rp. {price.price}</h1>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              {price.notes ? (
                <div>
                  <h1 className="mb-10">{price.notes}</h1>
                  <p className="font-extralight text-sm">
                    * Tidak termasuk packing, asuransi, dan PPN
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </FormControl>
        )}
        {activeButton === "Lacak Barang" && (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-rows-1">
              <label className="font-bold">Resi</label>
              <div className="flex">
                <input
                  className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                  id="resi"
                  type="text"
                  placeholder="Masukkan Resi"
                  onChange={(e) => setData(e.target.value)}
                  value={data}
                />
                <button
                  type="submit"
                  className="px-4 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
                >
                  Submit
                </button>
              </div>
              <div className="grid grid-rows-1 gap-4 md:grid-cols-2">
                <div className="grid grid-rows-2">
                  <h1>
                    {packages.senderName ? (
                      <div>
                        <h1>Pengirim</h1>
                        <h1>{packages.senderName}</h1>
                      </div>
                    ) : (
                      ""
                    )}
                  </h1>
                  <h1>
                    {packages.receiverName ? (
                      <div>
                        <h1>Penerima</h1>
                        <h1>{packages.receiverName}</h1>
                      </div>
                    ) : (
                      ""
                    )}
                  </h1>
                </div>
                <div className="grid grid-rows-6">
                  {track.map((track) => {
                    return (
                      <div>
                        <h1>{track.date}</h1>
                        <h1>{track.description}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckPrice;
