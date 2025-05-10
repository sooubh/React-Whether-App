import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { BsThermometerHalf } from "react-icons/bs";

const TempAndDetail = () => {
  const VerticalDetails = [
    { id: 1, Icon: FaThermometerEmpty, title: "Real Feel", value: "22°" },
    { id: 2, Icon: BiSolidDropletHalf, title: "Humidity", value: "346%" },
    { id: 3, Icon: FiWind, title: "wind", value: "11 km/h" },
  ];
  const HorizontalDetails = [
    { id: 1, Icon: GiSunrise, title: "Sunrise", value: "05:33 AM" },
    { id: 2, Icon: GiSunset, title: "Sunset", value: "08:33 AM" },
    { id: 3, Icon: MdKeyboardArrowUp, title: "High", value: "37°" },
    { id: 4, Icon: MdKeyboardArrowDown, title: "Low", value: "7°" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-gray-200 font-light">
        <p>Rain</p>
      </div>
      <div className="flex flex-row justify-between py-6 text-xl">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Whether Icon"
          className=" w-20"
        />
        <p className="flex text-5xl items-center">34°</p>

        <div className="flex flex-col space-y-4 items-start">
          {VerticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex flex-row text-sm items-center justify-center font-light"
            >
              <Icon size={20} />
              <p className=" text-l ml-1">
                {`${title}:`} <span>{value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-15">
        {HorizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center ml-1 font-light">
            <Icon size={30} />

            {`${title}:`}
            <span className="ml-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetail;
