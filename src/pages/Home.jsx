import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Map, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 space-y-16 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold mb-4 text-sm">
          <Sparkles size={16} />
          <span>Your AI Career Navigator</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Find Your Perfect <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            AI-Driven Career Path
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Take our AI-powered diagnosis to discover the optimal tech career for you, and follow expert-curated skill roadmaps to achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            to="/diagnosis"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
          >
            Start Career Diagnosis
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/roadmaps"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-lg border-2 border-slate-200 transition-all flex items-center justify-center gap-2"
          >
            Explore Roadmaps
          </Link>
        </div>
      </section>

      {/* Features/CTA Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform group">
          <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            <Sparkles size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-800">Smart Diagnosis</h3>
          <p className="text-slate-600 mb-6 line-clamp-3">Submit your major, interests, and current skill level to receive a personalized tech career recommendation powered by AI mapping.</p>
          <Link to="/diagnosis" className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Try Now <ArrowRight size={18} />
          </Link>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform group">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            <Map size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-800">Skill Roadmaps</h3>
          <p className="text-slate-600 mb-6 line-clamp-3">Visual, step-by-step learning paths for Frontend, Data Analytics, UX/UI, and more. Know exactly what to learn next.</p>
          <Link to="/roadmaps" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View Roadmaps <ArrowRight size={18} />
          </Link>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform group">
          <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            <BookOpen size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-800">Expert Articles</h3>
          <p className="text-slate-600 mb-6 line-clamp-3">Deep dive into specific skills with our detailed blog posts. Linked directly from your roadmap stages for seamless learning.</p>
          <Link to="/blog/welcome" className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Read Blog <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Recent Posts Preview */}
      <section className="w-full max-w-6xl mt-12 bg-slate-900 rounded-3xl p-10 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-48 w-64 h-64 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-slate-400">Expand your knowledge with our newest posts</p>
          </div>
          <Link to="/blog/welcome" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1">
            All Posts <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
           {/* Hardcoded preview cards for now */}
           <Link to="/blog/react-basics" className="block p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="text-xs font-semibold text-secondary mb-2 block">Frontend</span>
              <h3 className="text-xl font-bold mb-2">Getting Started with React in 2026</h3>
              <p className="text-slate-400 text-sm">A comprehensive guide to modern React development including hooks, context, and server components.</p>
           </Link>
           <Link to="/blog/data-analysis-intro" className="block p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="text-xs font-semibold text-primary mb-2 block">Data Analysis</span>
              <h3 className="text-xl font-bold mb-2">Introduction to Python for Data Science</h3>
              <p className="text-slate-400 text-sm">Learn the fundamentals of Pandas and NumPy to start your journey in data analytics.</p>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
