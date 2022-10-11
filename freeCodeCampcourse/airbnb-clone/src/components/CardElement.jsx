import React from 'react';
import Athlete from '../assets/spartsmen.png';

//0:img src 1:status 2:rate 3:Country 4:Name 5:price
function CardElement({status, rate, country, name, price}) {
  return (
    <div className="ml-20 mt-10">
      <div className="flex flex-col">
        <a href="#" className="relative">
          <img
            src={Athlete}
            alt="Kafee HiuPoimi"
            className="w-44 h-60 relative rounded-md inline-block"
          />
          <div className="absolute top-0 left-0 z-20 w-16 h-5 flex justify-center items-center overflow-hidden bg-white mt-3 ml-3">
            <p className="text-black text-xs">{status}</p>
          </div>
        </a>
        <div className="flex justify-center mt-2 flex-col">
          <svg
            className="mr-1"
            width="14"
            height="14"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
              fill="#FE395C"
            />
          </svg>
          <div className="flex">
            <p>{rate}</p>
            <p className="flex ml-1 text-gray-600">{country}</p>
          </div>
          <p className='text-sm font-light'>{name}</p>
          <div className='flex'>
            <p className='mr-1 font-bold'>From {price} </p>
            <p>/ person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardElement;
