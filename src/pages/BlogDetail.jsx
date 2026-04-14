import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ChevronLeft, Layout, Share2, Bookmark } from 'lucide-react';
import { mockPosts } from '../data/mockPosts';

const BlogDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Find post in our mock data
    const foundPost = mockPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      setPost(null);
    }
    setLoading(false);
  }, [postId]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center text-primary min-h-screen flex flex-col justify-center items-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
        <div className="text-xl font-bold tracking-widest animate-pulse">LOADING CONTENT...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center min-h-screen flex flex-col justify-center items-center">
        <Layout size={64} className="text-slate-300 mb-6" />
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Post Not Found</h1>
        <p className="text-lg text-slate-500 mb-10 max-w-md">The requested career insight has been moved or doesn't exist.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:-translate-y-1 hover:bg-primary-light transition-all"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-primary/20">
      <article className="max-w-4xl mx-auto relative group">
        
        {/* Background glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-light/10 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/50 animate-fade-in-up">
          
          {/* Top Control Bar */}
          <div className="flex justify-between items-center mb-12">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-all px-5 py-2.5 rounded-full bg-slate-100 hover:bg-primary/10 shadow-sm hover:shadow-md border border-slate-200/50 hover:border-primary/20"
            >
              <ChevronLeft size={20} className="stroke-[3]" /> <span className="tracking-wide">목록으로</span>
            </button>
            <div className="flex gap-3">
              <button className="p-3 rounded-full text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"><Bookmark size={20} /></button>
              <button className="p-3 rounded-full text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"><Share2 size={20} /></button>
            </div>
          </div>
          
          {/* Header Section */}
          <header className="mb-16 relative">
            <div className="absolute top-0 right-0 py-2 px-4 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-100 text-center shadow-sm hidden sm:block">
              <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">ID</div>
              <div className="text-sm font-mono font-bold text-primary">{post.id.split('-')[1].padStart(3, '0')}</div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-bold tracking-widest shadow-sm border border-primary/10 relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
                {post.categoryName}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.2] tracking-tight text-balance">
              {post.title}
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium py-6 border-y border-slate-100 bg-slate-50/50 rounded-2xl px-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100"><Calendar size={18} className="text-primary"/></div>
                <span className="tracking-wide">{post.date}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100"><User size={18} className="text-primary"/></div>
                <span className="tracking-wide">{post.author}</span>
              </div>
            </div>
          </header>

          {/* Markdown Content Section */}
          <div className="prose prose-lg sm:prose-xl prose-slate max-w-none 
                          prose-p:leading-loose prose-p:text-slate-600 prose-p:font-medium
                          prose-headings:font-extrabold prose-headings:text-slate-800 prose-headings:tracking-tight prose-headings:mb-6 prose-headings:mt-12
                          prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                          prose-a:text-primary hover:prose-a:text-primary-light prose-a:font-semibold prose-a:underline-offset-4
                          prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-100
                          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent prose-blockquote:py-5 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:my-10 prose-blockquote:text-slate-700 prose-blockquote:font-semibold
                          prose-li:text-slate-600 prose-li:leading-loose prose-li:marker:text-primary/70
                          prose-strong:text-slate-800 prose-strong:font-bold prose-strong:bg-primary/5 prose-strong:px-1 prose-strong:rounded
                          prose-code:text-primary prose-code:bg-primary/5 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:hidden prose-code:after:hidden">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
