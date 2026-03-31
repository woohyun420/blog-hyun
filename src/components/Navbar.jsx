import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b-2 border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/src/assets/logo.png" alt="CareerNavi Logo" className="h-[46px] w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-secondary font-bold transition-colors">Home</Link>
            <Link to="/diagnosis" className="text-slate-700 hover:text-secondary font-bold transition-colors">Career Diagnosis</Link>
            <Link to="/roadmaps" className="text-slate-700 hover:text-secondary font-bold transition-colors">Skill Roadmap</Link>
            <Link to="/blog/welcome" className="text-slate-700 hover:text-secondary font-bold transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
