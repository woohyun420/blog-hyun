import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const Diagnosis = () => {
  const navigate = useNavigate();
  const { setDiagnosisResult, diagnosisResult } = useAppContext();
  
  const [formData, setFormData] = useState({
    major: '',
    interest: 'frontend',
    level: 'beginner'
  });
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSynthesizing(true);
    
    // Simulate AI API call
    setTimeout(() => {
      let recommendedJob = '';
      let priority = '';
      
      if (formData.interest === 'frontend') {
        recommendedJob = 'Frontend Design Engineer';
        priority = 'Master React and Tailwind CSS foundations';
      } else if (formData.interest === 'data') {
        recommendedJob = 'Data Analyst / Scientist';
        priority = 'Learn Pandas, SQL, and Basic Statistics';
      } else if (formData.interest === 'uxui') {
        recommendedJob = 'UX/UI Product Designer';
        priority = 'Figma mastery and User Research basics';
      } else {
        recommendedJob = 'Growth Hacker / Digital Marketer';
        priority = 'Data-driven marketing and SEO optimization';
      }

      setDiagnosisResult({
        ...formData,
        recommendedJob,
        priority,
        timestamp: new Date().toLocaleDateString()
      });
      setIsSynthesizing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">AI Career Diagnosis</h1>
        <p className="text-lg text-slate-600">Tell us a bit about yourself, and our AI will map out the ideal tech stack for your future.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">What is your major or background?</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="e.g. Computer Science, English, Self-taught"
                value={formData.major}
                onChange={(e) => setFormData({...formData, major: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Which field interests you most?</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option value="frontend">Frontend Development</option>
                <option value="data">Data Analysis</option>
                <option value="uxui">UX/UI Design</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current Skill Level</label>
              <div className="grid grid-cols-3 gap-3">
                {['beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({...formData, level})}
                    className={`py-2 rounded-xl border font-medium text-sm transition-all capitalize
                      ${formData.level === level 
                        ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSynthesizing}
              className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/30 flex justify-center items-center gap-2 transition-all disabled:opacity-70"
            >
              {isSynthesizing ? (
                <><Loader2 className="animate-spin" size={20} /> Analyzing...</>
              ) : (
                <><CheckCircle2 size={20} /> Run AI Diagnosis</>
              )}
            </button>
          </form>
        </div>

        {/* Result Area */}
        <div className="relative">
          {!diagnosisResult ? (
            <div className="h-full bg-slate-100/50 rounded-3xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-4 text-slate-400">
                 <Loader2 size={32} />
              </div>
              <p>Fill out the form to see your AI-generated career path.</p>
            </div>
          ) : (
            <div className="h-full bg-gradient-to-br from-secondary to-primary/80 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  AI Recommendation
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {diagnosisResult.recommendedJob}
                </h3>
                <p className="text-white/90 mb-8 border-b border-white/20 pb-8">
                  Based on your background in {diagnosisResult.major} and {diagnosisResult.level} skill set, we recommend pursuing this role.
                </p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">Priority Focus</h4>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <p className="font-medium">{diagnosisResult.priority}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/roadmaps')}
                className="mt-8 w-full py-3 rounded-xl bg-white text-secondary font-bold hover:bg-background transition-colors flex items-center justify-center gap-2 relative z-10"
              >
                View Skill Roadmap <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
