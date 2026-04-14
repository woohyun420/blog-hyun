import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
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
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-slate-500">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-slate-200 mb-4"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The post you are looking for does not exist.</p>
        <button onClick={() => navigate(-1)} className="text-primary font-bold">Go Back</button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 animate-fade-in-up">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors">
        <ArrowLeft size={18} /> Back
      </button>
      
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            {post.categoryName}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2"><Calendar size={16} />{post.date}</div>
          <div className="flex items-center gap-2"><User size={16} />{post.author}</div>
          <div className="flex items-center gap-2"><Clock size={16} />5 min read</div>
        </div>
      </header>

      <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary-light prose-img:rounded-3xl prose-img:shadow-xl prose-img:border prose-img:border-slate-100">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogDetail;
