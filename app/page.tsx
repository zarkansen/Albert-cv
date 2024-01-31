 "use client";

import { TypeAnimation } from 'react-type-animation';
import styles from '@/app/ui/home.module.css';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import  Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react';
import IonIcon from '@reacticons/ionicons';


export default function Page() {
  return (
    //nav
    <main className="flex min-h-screen flex-col ">
     <div className="flex w-full sticky top-0 bg-black  h-[120px] z-50 justify-between"> 
      
          <div className='flex gap-[10px] justify-center items-center'>
            <div className='pb-[29px]'>
            <AcmeLogo/>
            </div>
            <div className=" font-bold text-white flex pt-[25px]">
             <strong className="animate-pulse"style={{fontFamily: 'Akira Expanded, sans-serif'}}>KARIR . cv </strong>
            </div>
           
          </div>
          
         <div className='flex justify-center items-center mr-[45px] pt-[25px]'>
       <a href='https://drive.google.com/uc?export=download&id=1Gy1Ob-wK21XKbBOiPH9pAcDg0tQj8JBN' className="  

         h-7
         
       bg-black
         border-solid
         border-2
       text-white
       border-black 
         transition-colors 
       hover:bg-white
       hover:text-black
         hover:animate-ping
         rounded 
         "style={{fontFamily: 'Poppins'}}  >
        Download PDF
      </a>
      </div>
  </div>  
      <div className="mt-10 flex grow flex-col gap-5 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg--50 px-6 py-10 md:w-2/5 md:px-15 bg-white">
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>

          {/* INTRODUCTION */}
      <p
      className={`${lusitana.className} text-xl text-black-800 md:text-2xl md:leading-normal`}>
            <strong>Hola  ^^</strong><br /> This represents  <br /> {' '}
            <a href="#" className="text-black active:text-black " style={{fontFamily: 'Akira Expanded, sans-serif'}}>
             My Digital space<ArrowRightIcon className="w-5 md:w-6" />
            </a>
          </p>
          <h1 className="text-gray-500 flex items-center opacity-60">   Welcome to the corner of the internet! I am Albert, A passionate Software Engineer Apprentice based in Indonesia. Here is a glimpse into who I am and what drives me</h1> 
          {/* page about */}
          <Link
            href="#tentang"
            className=" about flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black md:text-base"
          >
            <span> More about Me?</span> <ArrowRightIcon className="w-5 md:w-6 shadow-md" />
          </Link>
        </div>


     
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Hero Images Here */}
          <Image
        src="/saya.jpeg"
        width={300}
        height={760}
        className="hidden md:block rounded-full"
        alt="Screenshots of the dashboard project showing desktop version"
      /> 
       <Image
        src="/saya.jpeg"
        width={560}
        height={620}
        className="block md:hidden rounded-full"
        alt="Screenshot of the dashboard project showing mobile version"
      /> 
        </div>
      </div> <div className="waver layer1"></div>
      <div id="tentang" className="bg-black"><br /><br /><br /></div>
    
      <section className="section1 bg-black" id="tentang">
        <div className="grid grid-cols-1 lg:grid-cols-12 px-9 bg-black">
        {/* PROFILE */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative" >
                <Image
                src="/saya2.jpeg"
                alt="profile"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={500}
                height={500}
                />
               
            </div> 
        </div>
        </div>  
    <br />
    <div>
    
      <div className="bg-black">
      {/*TYPING ANIMATION */}
      <div className="col-span-7 place-self-center pt-6 space-x-2 bg-black">
          <span className="text-white font-extrabold mb-5 text-tranparent bg-clip-text text-3x">
            Heyho!, I am {""}
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
          {/* DESCRIPTION */}
          <p className="text-[#c2c5c7] text-lg  lg:text-m pb-[20px] text-left">
          I am Albert, and this is my digital space where I share my professional journey. As a Software Engineer Apprentice, I had the chance to work on exciting projects and develop valuable programming skills.
          </p> 
          </div><p className='text-white font-bold ml-[1rem]'>Such as: HTML, CSS, Tailwind CSS, PHP, React, C++ </p>
          <div>
           
            
          </div><br />
      </div>  <h1 className='text-white font-bold ml-[1rem]'>Previous Work :</h1>
    </div>
    {/* PROJECTS */}

    {/* card 1 */}
              
            <div className="card bg-black z-60">
                <div className="circle">
                  <img src="/gudang-removebg-preview.png" className="logoproject"/>
                </div>
                <div className="content text-black p-[10px]" >
                  <h2 className="text-black">C.R.U.D</h2>
                  <p className="text-black">Sebuah aplikasi web yang memungkinkan pengguna untuk melakukan manajemen inventaris ruangan secara efisien.</p>
                    <br />
                    <Link href="https://drive.google.com/drive/folders/1EVw7Oxtwa5ddKcHrVdh_3sx-W1Lac05T">Explore</Link>
                  </div> 
                    <img src="/Inventaris Ruangan.png" className="product" />
            </div> 
            {/* card 2 */}
            <div className="card bg-black z-60">
            
                <div className="circle">
                  <img src="/logosi.png" className="logoproject"/>
                </div>
                <div className="content text-black" >
                  <h2 className="text-black">C++ Project</h2>
                  <p className="text-black max-w-2xl">Toko Online yang terbuat dari bahasa pemrograman C++, Memudahkan pekerjaan sehari-hari</p>
                  <br />
                    <Link href="#">Explore</Link>
                  </div> 
                    <img src="/NUGGET.jpeg" className="product" />
            </div> 
              </section>
        {/* FOOTER */}
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
          <div className="wave" id="wave5"></div>
        </div><br /><br /><br /><br /> <br /><br /><br /><br />
              <ul className="social-icon">          
          <li><Link href="https://www.instagram.com/zarkansen?igsh=MXJqbTYxa2RjbzE1Mg=="><IonIcon name="logo-instagram"/></Link></li>
          <li><Link href="mailto:writeforaby@gmail.com?subject=Hello&body=I%20hope%20you%20are%20doing%20well."><IonIcon name="mail-outline"/></Link></li>
          <li><Link href="https://github.com/zarkansen"><IonIcon name="logo-github"/></Link></li>
              </ul>
              <ul className="menu">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#tentang">About</Link></li>
              <li><Link href="#">Projects</Link></li>
              </ul><p>©2024 Albert Marvell | All Rights Reserved</p>
      </footer>
    </main>
  );
}

