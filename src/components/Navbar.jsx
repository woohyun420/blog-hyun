import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="font-bold text-2xl text-primary tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white text-sm">CN</div>
                CareerNavi
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/category/ai-intro" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">AI 진로 소개</Link>
            <Link to="/category/recommended-jobs" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">추천 직무</Link>
            <Link to="/category/roadmaps" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">학습 로드맵</Link>
            <Link to="/category/projects" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">프로젝트 제작기</Link>
            <Link to="/category/future-trends" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">미래 직업 트렌드</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
