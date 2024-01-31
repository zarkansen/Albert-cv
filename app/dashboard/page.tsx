"use client";
import AcmeLogo from '@/app/ui/acme-logo';
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import introduction from './introduction';
import '@/app/ui/global.css';
export default function Page() {
    return (

<section>
<div className="grid grid-cols-1 lg:grid-cols-12 px-9 ">
        {/* profile */}
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
        </div>  
    <div>


      <div>
        <TypeAnimation sequence={[]}/>
      {/* animasi typing */}
      <div className="col-span-7 place-self-center pt-6 space-x-2 ">
          <span className="text-black font-extrabold mb-4 text-tranparent bg-clip-text text-3xl ">
            Heyho!, I'm {""}
          </span>
          <h1 className="text-orange-500 mb-4 text-xl" style={{fontFamily: 'Akira Expanded, sans-serif'}}>
            <TypeAnimation
              sequence={[
                'Albert Made Marvell Adnyana',
                1500,
                'A Student From SMK TI BALI GLOBAL DENPASAR',
                1000
              ]}
              wrapper="span"
              speed={40}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          {/* desc */}
          <p className="text-[#c2c5c7] text-lg mb-6 lg:text-xl">
           
          </p>
          </div>
      </div>
    </div>
    




              </section>

    )
    
  }

