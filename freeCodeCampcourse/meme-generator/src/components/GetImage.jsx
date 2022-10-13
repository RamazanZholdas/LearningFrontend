import React from 'react';

function GetImage() {
  return (
    <div>
      <section className="mx-36 mt-10">
        <div className="relative">
          <img src={'./images/meme.png'} alt="meme" className="bg-auto inline-block" />
          <div className='absolute top-0 z-20 w-full text-center'>
            <p className="text-white text-4xl font-extrabold">Shut up</p>
          </div>
          <div className='absolute bottom-0 z-20 w-full my-4 text-center'>
            <p className="text-white text-4xl font-extrabold">And take my money</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetImage;
