import React from "react";


const Forecaste = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className=" mt-10 ">
        <p>3 Hours Wheather ForeCaste</p>
        <hr className="my-1" />
        <div className=" flex justify-between mt-5">
          {data.map((data, index) => (
            <div key={index} className="flex flex-col">
              <p className="flex justify-center">Wed</p>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                className=" items-center w-12 my-1"
              />
              <p className=" flex justify-center">34°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecaste;
