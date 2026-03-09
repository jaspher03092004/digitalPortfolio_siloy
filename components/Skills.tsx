import { Code2, PenTool, Wrench, GraduationCap, Award, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative transition-colors duration-500 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Skills & Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
            A comprehensive overview of my technical proficiencies, soft skills, and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative overflow-hidden transition-colors duration-500 lg:col-span-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors duration-500">
                <Code2 className="text-cyan-500 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Programming Languages</h4>
                <ul className="space-y-3">
                  <SkillItem text="C / C++ / C#" />
                  <SkillItem text="JavaScript" />
                  <SkillItem text="HTML / CSS" />
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Software Development</h4>
                <ul className="space-y-3">
                  <SkillItem text="Web Development (React, Vite-React, Node.js)" />
                  <SkillItem text="Desktop App Development (C#, .NET)" />
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Tools & Technologies</h4>
                <ul className="space-y-3">
                  <SkillItem text="Arduino IDE" />
                  <SkillItem text="Git / GitHub Desktop" />
                  <SkillItem text="Visual Studio / VS Code" />
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Others</h4>
                <ul className="space-y-3">
                  <SkillItem text="UI/UX Design (Figma, Adobe XD)" />
                  <SkillItem text="Basic Network Configuration (Cisco Packet Tracer)" />
                  <SkillItem text="Troubleshooting hardware/software" />
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Soft Skills */}
            <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative overflow-hidden transition-colors duration-500 flex-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors duration-500">
                  <Users className="text-emerald-500 dark:text-emerald-400" size={20} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500">Soft Skills</h3>
              </div>
              
              <ul className="space-y-3 relative z-10">
                <SkillItem text="Teamwork" icon={<Users size={16} className="text-emerald-500" />} />
                <SkillItem text="Willingness to Learn" icon={<GraduationCap size={16} className="text-emerald-500" />} />
                <SkillItem text="Attention to Detail" icon={<CheckCircle2 size={16} className="text-emerald-500" />} />
                <SkillItem text="Problem-Solving" icon={<Lightbulb size={16} className="text-emerald-500" />} />
                <SkillItem text="Communication Skills" icon={<Users size={16} className="text-emerald-500" />} />
              </ul>
            </div>

            {/* Certificates */}
            <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative overflow-hidden transition-colors duration-500 flex-1">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors duration-500">
                  <Award className="text-amber-500 dark:text-amber-400" size={20} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500">Certificates & Courses</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                <CertItem text="Fundamentals of UI/UX design" />
                <CertItem text="Introduction to CISCO packet tracing" />
                <CertItem text="Alliance Jumpstart Program" />
                <CertItem text="CoreDev Solutions Inc. (Internship)" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ text, icon }: { text: string, icon?: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors duration-500">
      {icon || <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />}
      <span className="text-sm font-medium">{text}</span>
    </li>
  );
}

function CertItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300 transition-colors duration-500">
      <Award size={18} className="text-amber-500 shrink-0 mt-0.5" />
      <span className="text-sm font-medium leading-snug">{text}</span>
    </li>
  );
}
