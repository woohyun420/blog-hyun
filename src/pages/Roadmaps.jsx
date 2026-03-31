import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Code, BarChart, PenTool, Layout as LayoutIcon, ChevronRight } from 'lucide-react';
import roadmapsData from '../data/roadmaps.json';

const JOBS = [
  { id: 'frontend', title: 'Frontend Developer', icon: LayoutIcon, color: 'bg-secondary' },
  { id: 'data', title: 'Data Analyst', icon: BarChart, color: 'bg-primary' },
  { id: 'uxui', title: 'UX/UI Designer', icon: PenTool, color: 'bg-secondary/70' },
  { id: 'marketing', title: 'Digital Marketer', icon: Compass, color: 'bg-primary/80' },
];

const Roadmaps = () => {
  const [activeJob, setActiveJob] = useState('frontend');
  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {
    // Load roadmap data based on active job
    const data = roadmapsData[activeJob];
    if (data) {
      setRoadmap(data.steps);
    }
  }, [activeJob]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Tech Skill Roadmaps</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Select a role to view a structured learning path. Click on any skill to read our expert guides.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Job Selector Sidebar */}
        <div className="lg:w-1/4 flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 px-2">Select Career Path</h3>
          {JOBS.map((job) => {
            const Icon = job.icon;
            const isActive = activeJob === job.id;
            return (
              <button
                key={job.id}
                onClick={() => setActiveJob(job.id)}
                className={`flex items-center text-left gap-4 p-4 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-white shadow-xl shadow-slate-200/50 border border-slate-200 translate-x-2' 
                    : 'bg-transparent hover:bg-white/60 border border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm ${job.color} ${!isActive && 'opacity-70 grayscale'}`}>
                  <Icon size={20} />
                </div>
                <span className={`font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{job.title}</span>
              </button>
            );
          })}
        </div>

        {/* Roadmap Timeline Display */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[600px]">
             <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                {JOBS.find(j => j.id === activeJob)?.title} Roadmap
             </h2>
             
             <div className="relative border-l-2 border-slate-100 ml-5 space-y-12 pb-8">
               {roadmap.map((step, idx) => (
                 <div key={idx} className="relative pl-10 group">
                   {/* Node */}
                   <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                      <Code size={14} />
                   </div>
                   
                   {/* Content */}
                   <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                       <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500">
                         Step {idx + 1}
                       </span>
                     </div>
                     <p className="text-slate-600 mb-4">{step.description}</p>
                     
                     {/* Related Links */}
                     {step.links && step.links.length > 0 && (
                       <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3">
                         {step.links.map((link, lidx) => (
                           <Link 
                             key={lidx} 
                             to={link.url}
                             className="inline-flex items-center gap-1 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors"
                           >
                             <BookOpen size={14} />
                             {link.label}
                             <ChevronRight size={14} />
                           </Link>
                         ))}
                       </div>
                     )}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Also we need BookOpen import, wait, let's fix the missing import.
import { BookOpen } from 'lucide-react';

export default Roadmaps;
