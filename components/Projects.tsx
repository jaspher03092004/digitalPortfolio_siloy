import { ExternalLink, Activity, Database, Cpu, Droplets, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'KneuraSense: AI-Powered IoT Knee Wearable',
    date: '2026',
    description: 'Developed a smart knee sleeve to monitor joint stress and prevent pain flare-ups for individuals with Osteoarthritis.',
    techStack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Firebase'],
    features: [
      { label: 'Frontend & UX', desc: 'Built a high-performance Web Dashboard (PWA) using Next.js and Tailwind CSS for real-time patient data visualization.' },
      { label: 'Backend & Data', desc: 'Implemented a robust data pipeline using PostgreSQL (Prisma) and Firebase for cloud management and historical trend analysis.' }
    ],
    impact: 'Provides real-time patient data visualization and historical trend analysis to prevent pain flare-ups.',
    icon: <Activity className="text-emerald-500 dark:text-emerald-400" size={24} />,
  },
  {
    title: 'Lost-and-Found System',
    date: '2024 - 2025',
    description: 'A database-driven system for managing lost and found items in an institution.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Vite-React', 'Firebase', 'Figma'],
    role: 'UI/UX Designer, Web Developer, Frontend Developer',
    features: [
      { label: 'Key Features', desc: 'Item tracking, status updates (Unclaimed, Approved, Denied), admin verification.' }
    ],
    impact: 'Improved efficiency in returning lost items by providing a structured and searchable database.',
    icon: <Database className="text-cyan-500 dark:text-cyan-400" size={24} />,
  },
  {
    title: 'Automatic Irrigation System Using Sun-Tracking Solar Panel',
    date: '2023 - 2024',
    description: 'A smart irrigation system that optimizes water usage based on real-time conditions and solar tracking.',
    techStack: ['Arduino', 'C++', 'Sensors', 'Solar Panels'],
    role: 'System Designer (UI/UX for monitoring system), Full Stack Developer',
    features: [
      { label: 'Key Features', desc: 'Automated irrigation, sun-tracking solar panel for energy efficiency.' }
    ],
    impact: 'Reduced water waste and energy consumption, making irrigation more sustainable.',
    icon: <Droplets className="text-amber-500 dark:text-amber-400" size={24} />,
  },
  {
    title: 'TrackWise: Master Your Finances',
    date: '2023 - 2024',
    description: 'A financial management application for tracking expenses, managing budgets, and setting savings goals.',
    techStack: ['React', 'Vite', 'JavaScript', 'Firebase', 'Figma'],
    role: 'UI/UX Designer, Full Stack Developer',
    features: [
      { label: 'Key Features', desc: 'Expense tracking, budget management, income monitoring, financial analytics.' }
    ],
    impact: 'Helps users gain financial control by visualizing their spending and savings progress.',
    icon: <Cpu className="text-indigo-500 dark:text-indigo-400" size={24} />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg transition-colors duration-500">
            A showcase of my technical expertise in frontend development, UI/UX design, and IoT integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:border-emerald-500/30 transition-colors duration-500">
                  {project.icon}
                </div>
                <span className="text-sm font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {project.date}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display transition-colors duration-500 pr-8">
                {project.title}
              </h3>
              
              {project.role && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                  Role: {project.role}
                </p>
              )}
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-500">
                {project.description}
              </p>
              
              <div className="mb-6 space-y-3 flex-grow">
                {project.features.map((feature, i) => (
                  <div key={i} className="text-sm text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">{feature.label}:</strong> {feature.desc}
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors duration-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-500 bg-emerald-50/50 dark:bg-emerald-900/10 -mx-8 -mb-8 p-8 rounded-b-2xl">
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="text-emerald-500 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1 transition-colors duration-500">Impact</h4>
                    <p className="text-base font-medium text-emerald-700 dark:text-emerald-300 leading-relaxed transition-colors duration-500">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
