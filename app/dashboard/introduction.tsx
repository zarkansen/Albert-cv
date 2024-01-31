"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const introduction = () => {
  return (
    <section> 
      <div className="grid grid-cols-1 lg:grid-cols-12 px-9 ">
        {/* Image column on the left */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative" >
                <Image
                src="/images/profile.png"
                alt="profile"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={500}
                />
            </div>
        </div>

        {/* Text column on the right */}
        <div className="col-span-7 place-self-center pt-6">
          <span className="text-white font-extrabold mb-4 text-tranparent bg-clip-text text-3xl">
            Hai, I'm {""}
          </span>
          <h1 className="text-white mb-4 text-xl font-extrabold">
            <TypeAnimation
              sequence={[
                'Albert Made Marvell Adnyana',
                1000,
                'Student From SMK TI BALI GLOBAL DENPASAR',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#c2c5c7] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default introduction;