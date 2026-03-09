import { Phone, Mail, Facebook, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">Let&apos;s Connect</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto transition-colors duration-500">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a
            href="mailto:siloyjaspherlawrence@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Mail size={20} />
            </div>
            siloyjaspherlawrence@gmail.com
          </a>
          
          <a
            href="tel:09104958419"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Phone size={20} />
            </div>
            09104958419
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <SocialLink href="https://www.facebook.com/jasperlawrence.siloy.9" icon={<Facebook size={24} />} label="Facebook" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="https://github.com" icon={<Github size={24} />} label="GitHub" />
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/50 text-slate-500 dark:text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500">
          <p>© {new Date().getFullYear()} Jaspher Lawrence Siloy. All rights reserved.</p>
          <p>Bachelor of Science in Computer Engineering</p>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-500 hover:-translate-y-1 shadow-sm"
    >
      {icon}
    </a>
  );
}
