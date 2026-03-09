import { ArrowRight, Terminal } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8 transition-colors duration-500">
              <span className="font-mono font-bold">{`>_`}</span>
              <span>Bachelor of Science in Computer Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-500">
              Jaspher Lawrence <br />
              <span className="inline-block bg-cyan-400 text-slate-950 px-4 py-2 mt-2 mb-2">Siloy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed transition-colors duration-500">
              Detail-oriented Computer Engineering student specializing in Frontend Development and UI/UX Design. Expert in building responsive, high-performance web applications using React and Vite, with a secondary proficiency in Backend integration (Firebase/Node.js). Unique ability to bridge the gap between physical hardware and digital interfaces, ensuring seamless IoT and software synergy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white dark:text-slate-950 font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 duration-500"
              >
                View Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl rotate-6 scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-3xl -rotate-3 scale-105 transition-transform duration-500" />
              
              {/* Image container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
                <Image
                  src="https://picsum.photos/seed/jaspher/800/800"
                  alt="Jaspher Placeholder"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
