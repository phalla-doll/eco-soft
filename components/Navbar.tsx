import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 border-b border-black/10">
      <div className="flex items-center gap-3">
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45" />
        </div>
        <span className="font-clash font-semibold text-2xl tracking-tight">EcoSoft</span>
      </div>

      <div className="hidden md:flex items-center gap-10 font-satoshi font-medium text-[15px]">
        <a href="#" className="hover:opacity-70 transition-opacity">Solutions</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Testimonials</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Contacts</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-[15px] font-medium cursor-pointer hover:opacity-70 transition-opacity">
          <span>Eng</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <button className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-orange-600 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
