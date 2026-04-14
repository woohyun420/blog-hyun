import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ChevronLeft } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto px-4 py-32 text-center text-slate-500 min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-slate-200 mb-4"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The post you are looking for does not exist.</p>
        <button onClick={() => navigate(-1)} className="text-primary font-bold hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/40 p-8 sm:p-12 lg:p-16 border border-slate-100 animate-fade-in-up">
        {/* Top Back Navigation within Card */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-12 font-semibold transition-colors bg-white px-5 py-2.5 rounded-full border border-slate-200 hover:border-primary/40 shadow-sm"
        >
          <ChevronLeft size={18} /> 전체 목록으로 돌아가기
        </button>
        
        <header className="mb-14 pb-10 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase shadow-sm">
              {post.categoryName}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.3] tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md"><Calendar size={18} className="text-primary"/>{post.date}</div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md"><User size={18} className="text-primary"/>{post.author}</div>
          </div>
        </header>

        <div className="prose prose-lg sm:prose-xl prose-slate max-w-none 
                        prose-p:leading-loose prose-p:text-slate-700
                        prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-6 prose-headings:mt-12
                        prose-h1:text-3xl prose-h2:text-2xl
                        prose-a:text-primary hover:prose-a:text-primary-light 
                        prose-img:rounded-3xl prose-img:shadow-xl prose-img:border prose-img:border-slate-100
                        prose-blockquote:border-l-4 prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:my-8
                        prose-li:text-slate-700 prose-li:leading-loose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
