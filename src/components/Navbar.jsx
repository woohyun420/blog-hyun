import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-secondary shadow-md shadow-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/logo.png" alt="CareerNavi Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors">Home</Link>
            <Link to="/diagnosis" className="text-white/80 hover:text-white font-medium transition-colors">Career Diagnosis</Link>
            <Link to="/roadmaps" className="text-white/80 hover:text-white font-medium transition-colors">Skill Roadmap</Link>
            <Link to="/blog/welcome" className="text-white/80 hover:text-white font-medium transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
