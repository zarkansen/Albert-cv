'use client';
import { TypeAnimation } from 'react-type-animation';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [error, setError] = useState(null);
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/heroes")
      .then(({ data }) => setHero(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      {hero.map(({ id, attributes }) => (
        <>
          <div className="flex w-full sticky top-0 bg-black h-[120px] z-50 justify-between">
            <div className='flex gap-[10px] justify-center items-center'>
              <div className='pb-[29px]'>
                <AcmeLogo/>
              </div>
              <div className="font-bold text-white flex pt-[25px]">
                <strong className="animate-pulse" style={{ fontFamily: 'Akira Expanded, sans-serif' }}>KARIR . cv </strong>
              </div>
            </div>
            <div className='flex justify-center items-center mr-[45px] pt-[25px]'>
              <a href='https://drive.google.com/uc?export=download&id=1Gy1Ob-wK21XKbBOiPH9pAcDg0tQj8JBN' className="h-7 bg-black border-solid border-2 text-white border-black transition-colors hover:bg-white hover:text-black hover:animate-ping rounded" style={{ fontFamily: 'Poppins' }}>
                Download PDF
              </a>
            </div>
          </div>
          <div className="mt-10 flex grow flex-col gap-5 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg--50 px-6 py-10 md:w-2/5 md:px-15 bg-white">
              <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
              <p className={`${lusitana.className} text-xl text-black-800 md:text-2xl md:leading-normal`}>
                <strong>{attributes.hero_text_1}</strong><br /> {attributes.hero_text_2}  <br /> {' '}
                <a href="#" className="text-black active:text-black " style={{ fontFamily: 'Akira Expanded, sans-serif' }}>
                {attributes.hero_text_3}<ArrowRightIcon className="w-5 md:w-6" />
                </a>
              </p>
              <h1 className="text-gray-500 flex items-center opacity-60">   {attributes.hero_desc}</h1>
              <Link href="#tentang" className="about flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black md:text-base">
                <span> More about Me?</span> <ArrowRightIcon className="w-5 md:w-6 shadow-md" />
              </Link>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
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
          </div>
          <div className="waver layer1"></div>
          <div id="tentang" className="bg-black"><br /><br /><br /></div>
          <section className="section1 bg-black" id="tentang">
            <div className="grid grid-cols-1 lg:grid-cols-12 px-9 bg-black">
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
            <div className="bg-black">
              <div className="col-span-7 place-self-center pt-6 space-x-2 bg-black">
                <span className="text-white font-extrabold mb-5 text-transparent bg-clip-text text-3x">
                {attributes.aboutText_1}
                </span>
                <h1 className="text-orange-500 mb-4 text-xl" style={{ fontFamily: 'Akira Expanded, sans-serif' }}>
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
                <p className="text-[#c2c5c7] text-lg lg:text-m pb-[20px] text-left">
                {attributes.about_desc}
                </p>
              </div>
              <p className='text-white font-bold ml-[1rem]'>{attributes.about_skill}</p>
            </div>
            <h1 className='text-white font-bold ml-[1rem]'>{attributes.about_work}</h1>
          </section>
          <div className="card bg-black z-60">
            <div className="circle">
              <img src="/gudang-removebg-preview.png" className="logoproject"/>
            </div>
            <div className="content text-black p-[10px]" >
              <h2 className="text-black">{attributes.project1_text_1}</h2>
              <p className="text-black">{attributes.project1_text_2}</p>
              <br />
              <Link href="https://drive.google.com/drive/folders/1o9d4P7xqAmHn1092EYmlJfp4oxVSPvRM?usp=sharing">Explore</Link>
            </div>
            <img src="/Inventaris Ruangan.png" className="product" />
          </div>
          <div className="card bg-black z-60">
            <div className="circle">
              <img src="/logosi.png" className="logoproject"/>
            </div>
            <div className="content text-black" >
              <h2 className="text-black">{attributes.project2_text_1}</h2>
              <p className="text-black max-w-2xl">{attributes.project2_text_2}</p>
              <br />
              <Link href="#">Explore</Link>
            </div>
            <img src="/NUGGET.jpeg" className="product" />
          </div>
          </>
      ))}
      <footer >
        <ul className="social-icon">          
          <li><Link href="https://www.instagram.com/zarkansen?igsh=MXJqbTYxa2RjbzE1Mg=="><IonIcon name="logo-instagram"/></Link></li>
          <li><Link href="mailto:writeforaby@gmail.com?subject=Hello&body=I%20hope%20you%20are%20doing%20well."><IonIcon name="mail-outline"/></Link></li>
          <li><Link href="https://github.com/zarkansen"><IonIcon name="logo-github"/></Link></li>
        </ul>
        <ul className="menu">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#tentang">About</Link></li>
          <li><Link href="#">Projects</Link></li>
        </ul>
        <p>©2024 Albert Marvell | All Rights Reserved</p>
        <div className="waves ">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </footer>
    </main>
  );
};

export default App;
