import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [origin, setOrigin] = useState([""]);
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
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
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
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
    setInputDestination(text);
    console.log(text);
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
  const onFetchIdDestination = (id) => {
    setId(id);
  };
  const [inputOrigin, setInputOrigin] = useState([]);
  const handleClickOrigin = (e) => {
    const value = e.target.value;
    setInputOrigin(value);
    console.log(value);
  };
  useEffect(() => {
    const loadPrice = async () => {
      const response = await axios.get(
        `https://www.trawlbens.com/api/pricing/tarif?origin_id=${inputOrigin}&destination_id=${inputDestination}&service_code=tps`
      );
      setPrice(response.data.data);
      console.log(response.data.data.tier_1);
    };
    loadPrice();
  }, [inputOrigin, inputDestination]);
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
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="kotaAsal" className="font-bold">
                  Kota Asal Pengiriman
                </label>
                <select
                  className="w-11/12 border-style"
                  id="kotaAsal"
                  type="text"
                  placeholder="Masukkan kota asal"
                  onChange={handleClickOrigin}
                >
                  {origin.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </select>
                <p></p>
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
                          // suggestions.regency + " ",
                          // suggestions.district + " ",
                          // suggestions.sub_district,
                          suggestions.id,
                        ]),
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
              <p className="font-bold">Tarif</p>
              <p className="">Rp. 4500/kg</p>
              <p className="text-sm">
                estimasi barang sampai dalam 2-3 hari sejak truk berangkat
              </p>
              <p className="text-sm">
                * Tidak termasuk packing, asuransi, dan PPN.
              </p>
            </div>
          </FormControl>
        )}
        {activeButton === "Lacak Barang" && (
          <form>
            <div className="grid grid-rows-1">
              <label className="font-bold">Resi</label>
              <div className="flex">
                <input
                  className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                  id="resi"
                  type="text"
                  placeholder="Masukkan Resi"
                />
                <button className="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckPrice;
