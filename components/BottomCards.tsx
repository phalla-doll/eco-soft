import { Filter } from 'lucide-react';
import Image from 'next/image';

export default function BottomCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-8 pb-12">
      {/* Left Orange Card */}
      <div className="bg-brand-orange rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden min-h-[400px] text-white">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-8 relative z-10">
          <Filter className="w-6 h-6" />
        </div>
        
        <div className="relative z-10 mt-auto">
          <h3 className="font-clash text-[40px] font-medium leading-[1.1] mb-10 tracking-tight">
            Have<br />a question?
          </h3>
          <a href="#" className="inline-flex items-center gap-2 text-[15px] font-medium border-b border-white/40 pb-1.5 hover:border-white transition-colors">
            Get In Touch
          </a>
        </div>

        {/* 3D Person Image Placeholder */}
        <div className="absolute -bottom-16 -right-16 w-[350px] h-[350px] opacity-90 mix-blend-luminosity">
          <Image 
            src="https://picsum.photos/seed/3dperson/500/500" 
            alt="Person" 
            fill 
            className="object-cover rounded-full blur-sm"
          />
        </div>
        {/* Gradient overlay to blend the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/80 via-transparent to-transparent z-0" />
      </div>

      {/* Right Insights Card */}
      <div className="bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col justify-between relative min-h-[400px] border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-start">
          <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2.5 text-[15px] font-medium shadow-sm">
            <div className="flex gap-[3px] items-end h-[18px]">
              <div className="w-[3px] h-2 bg-black rounded-sm" />
              <div className="w-[3px] h-3.5 bg-black rounded-sm" />
              <div className="w-[3px] h-5 bg-black rounded-sm" />
            </div>
            Insights
          </div>
          
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image src="https://picsum.photos/seed/avatar2/100/100" alt="Avatar" width={56} height={56} className="object-cover" />
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto relative z-10">
          <div>
            <h3 className="font-clash text-[32px] font-medium leading-tight text-black/60 tracking-tight">
              Performance:<br />
              <span className="text-black">Conversion Rate</span>
            </h3>
          </div>

          <div className="max-w-[220px] text-right flex flex-col items-start">
            <p className="text-[15px] font-medium leading-relaxed mb-8 text-left text-black/80">
              We optimize campaigns based on performance, not assumptions.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[15px] font-medium border-b border-black/30 pb-1.5 hover:border-black transition-colors">
              Request Audit
            </a>
          </div>
        </div>

        {/* Circular Dial */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none">
           <ConversionDial percentage={72} />
        </div>
      </div>
    </div>
  );
}

function ConversionDial({ percentage }: { percentage: number }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow/Shadow */}
      <div className="absolute inset-4 bg-black rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)]" />
      
      <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 200 200">
        {/* Background Track with ticks */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#333"
          strokeWidth="14"
          strokeDasharray="2 6"
        />
        {/* Progress Track with ticks */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#FF5A1F"
          strokeWidth="14"
          strokeDasharray="2 6"
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
        <span className="font-clash text-[44px] font-medium leading-none">{percentage}%</span>
        <span className="text-[11px] uppercase tracking-widest text-white/60 mt-2 text-center leading-tight font-medium">
          Conversion<br/>Rate
        </span>
      </div>
    </div>
  );
}
