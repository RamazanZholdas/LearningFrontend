import React from 'react';
import videoBg from '../assets/r6edit.mp4';

export const VideoEdit = () => {
  return (
    <section className="px-2 flex space-x-2 max-w-screen-lg mx-auto py-2 items-center justify-center">
      <video src={videoBg} autoPlay loop muted className='video'/>
      <a
        href="#"
        className="w-1/3 bg-gradient-to-tr from-orange-500 to-gray-500 h-80 relative rounded inline-block overflow-hidden">
        <img className='absolute left-0 top-0 w-full h-full z-20 object-cover' src='https://w0.peakpx.com/wallpaper/676/109/HD-wallpaper-tom-clancys-rainbow-six-siege-poster-promotional-materials-online-game-rainbow-six-siege.jpg' alt='r6poster'/>
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 class="text-4xl font-semibold text-gray-100 leading-right">
            Rainbow Six Siege
          </h2>
        </div>
      </a>
    </section>
  );
};

//<video src={videoBg} autoPlay loop muted className='video'/>

export default VideoEdit;
