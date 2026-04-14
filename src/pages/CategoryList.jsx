import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mockPosts } from '../data/mockPosts';

const CategoryList = () => {
  const { categoryId } = useParams();
  
  const posts = mockPosts.filter(str => str.categoryId === categoryId);
  const categoryName = posts.length > 0 ? posts[0].categoryName : 'Category';

  if (posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">No Posts Found</h1>
        <p className="text-slate-600 mb-8">This category currently has no posts.</p>
        <Link to="/" className="text-primary font-bold">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in-up">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
          <span className="font-bold text-sm tracking-widest uppercase">{categoryId.replace('-', ' ')}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{categoryName}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">CareerNavi와 함께 {categoryName} 분야의 핵심 전략을 알아보세요.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/post/${post.id}`}
            className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary-light/30 relative">
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                 {post.date}
               </div>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/20 backdrop-blur-sm">
                  <span className="bg-white text-primary font-bold px-4 py-2 rounded-full flex items-center gap-2">
                    포스트 읽기 <ArrowRight size={16} />
                  </span>
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                {post.summary}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs">
                  CN
                </div>
                <span className="text-sm font-medium text-slate-600">{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
