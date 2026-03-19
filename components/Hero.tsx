'use client';

import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';
import Image from 'next/image';

const Keycap3D = dynamic(() => import('./Keycap3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 flex flex-col items-center w-full min-h-[600px]">
      {/* Massive Headline */}
      <div className="w-full text-center relative z-10 pointer-events-none">
        <h1 className="font-clash font-semibold text-[16vw] leading-[0.8] tracking-tighter uppercase text-[#111] whitespace-nowrap">
          FIND YOUR WAY
        </h1>
      </div>

      {/* 3D Keycap Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] md:h-[600px] z-20 pointer-events-auto">
        <Keycap3D />
      </div>

      {/* Side Elements */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-0 mt-48 md:mt-32 relative z-10">
        {/* Left Text */}
        <div className="max-w-xs flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-[15px] font-medium text-black/60">About</span>
          </div>
          <p className="text-[20px] md:text-[22px] font-medium leading-tight tracking-tight">
            We build and optimize digital experiences for growth.
          </p>
        </div>

        {/* Right Video Thumbnail */}
        <div className="relative group cursor-pointer mt-8 md:mt-0">
          <div className="w-64 md:w-72 h-20 md:h-24 rounded-full overflow-hidden relative">
            <Image 
              src="https://picsum.photos/seed/woman/400/200" 
              alt="Video thumbnail" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 md:w-6 md:h-6 fill-current ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
