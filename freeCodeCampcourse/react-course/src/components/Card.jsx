import React from 'react';
import WomanImage from '../assets/woman.png';

function Card() {
  return (
    <div className="card-size mt-20 rounded-3xl flex flex-col items-center">
      <img src={WomanImage} alt="hatyn" />
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-white text-2xl">Laura Smith</h1>
        <h1 className="text-yellow-500 text-xs pb-2">Frontend developer</h1>
        <h1 className="text-white" style={{ fontSize: '10px' }}>
          laurasmith.website
        </h1>
      </div>
      <div className="flex flex-row mt-6">
        <button className="bg-white rounded-lg text-black text-sm px-4 py-2 mr-2 w-28 h-9 flex justify-center items-center">
          <svg
            className="mr-2"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z"
              fill="#1E1F26"
            />
            <path
              d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z"
              fill="#1E1F26"
            />
          </svg>
          Email
        </button>
        <button className="bg-blue-500 rounded-lg text-white text-sm px-4 py-2 w-28 h-9 flex justify-center items-center">
          <svg
            className="mr-2"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.7143 0.333344H1.28275C0.758939 0.333344 0.333344 0.764891 0.333344 1.29465V12.7054C0.333344 13.2351 0.758939 13.6667 1.28275 13.6667H12.7143C13.2381 13.6667 13.6667 13.2351 13.6667 12.7054V1.29465C13.6667 0.764891 13.2381 0.333344 12.7143 0.333344ZM4.36311 11.7619H2.38691V5.39882H4.36608V11.7619H4.36311ZM3.37501 4.52977C2.74108 4.52977 2.22918 4.01489 2.22918 3.38394C2.22918 2.75299 2.74108 2.23811 3.37501 2.23811C4.00596 2.23811 4.52084 2.75299 4.52084 3.38394C4.52084 4.01787 4.00894 4.52977 3.37501 4.52977ZM11.7708 11.7619H9.79465V8.66668C9.79465 7.92858 9.77977 6.97918 8.76787 6.97918C7.73811 6.97918 7.58037 7.78275 7.58037 8.61311V11.7619H5.60418V5.39882H7.50001V6.26787H7.5268C7.79168 5.76787 8.43751 5.24108 9.39882 5.24108C11.3988 5.24108 11.7708 6.55953 11.7708 8.27382V11.7619Z"
              fill="white"
            />
          </svg>
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Card;
