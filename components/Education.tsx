import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-500">
            My academic background and qualifications.
          </p>
        </div>

        <div className="space-y-8">
          {/* College */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-colors duration-500 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-bl-full transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display transition-colors duration-500">
                    Cebu Institute of Technology University
                  </h3>
                  <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                    Bachelor of Science in Computer Engineering
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium shrink-0 md:text-right">
                <div className="flex items-center md:justify-end gap-2">
                  <Calendar size={16} />
                  <span>2022 - 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-colors duration-500 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-bl-full transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-100 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display transition-colors duration-500">
                    Madrid National High School
                  </h3>
                  <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                    STEM
                  </p>
                  <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-bold rounded-full">
                    with honors
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium shrink-0 md:text-right">
                <div className="flex items-center md:justify-end gap-2">
                  <Calendar size={16} />
                  <span>2016 - 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
