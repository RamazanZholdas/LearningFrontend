import React from 'react';

export default function Main() {
  return (
    <div className='px-2 flex max-w-screen-lg mx-auto py-5 justify-center items-center'>
      <section className="px-2 flex">
            <a href="#" className="block mb-5 mr-10 w-1/2">
              <div className="flex">
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mt-3 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus.
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                    voluptatibus doloremque quasi enim non ducimus natus, est harum accusamus? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Rem commodi deleniti rerum,
                    odit sint illo labore laudantium quasi cupiditate quidem.
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="block mb-5 w-1/2">
              <div className="flex">
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mt-3 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus.
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                    voluptatibus doloremque quasi enim non ducimus natus, est harum accusamus?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, non harum!
                    Recusandae voluptatem error minima doloribus. Optio quam quasi voluptatum!
                  </p>
                </div>
              </div>
            </a>
          </section>
    </div>
  );
}

/*
      <p className='text-4xl text-green-400 font-bold'>
        <Typed strings={['Rainbow Six Siege', 'Try Now!!!']} typeSpeed={70} backSpeed={80} loop/>
      </p>

*/