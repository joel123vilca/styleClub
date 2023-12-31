import React from "react";
import Welcome from "../assets/images/welcome.jpg";
import Slider2 from "../assets/images/slide-2.png";
import Slider from "../assets/images/slider.jpg";

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <div className="bg-black w-full h-[400px] flex">
        <img src={Welcome} alt="welcome" className="w-full object-contain" />
      </div>
      <img
        src={Slider2}
        alt="slider-2"
        className="w-full object-contain h-full"
      />
      <div className="bg-gray-200 w-full h-[200px] grid grid-cols-2 p-8">
        <div className="text-5xl font-medium flex items-end justify-center ">
          VOUCHERS
        </div>
        <div className="w-[300px] text-xl text-left">
          Porque es un espacio creado para obsequiarle a nuestra comunidad,
          importantes descuentos, beneficios y experiencias exclusivas de
          nuestras marcas.
        </div>
      </div>
      <img src={Slider} alt="slider" className="w-full object-contain h-full" />
    </div>
  );
};

export default Home;
