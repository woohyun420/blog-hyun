import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogDetail = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamic import of markdown files
    const loadPost = async () => {
      try {
        setLoading(true);
        // We use raw-loader or fetch it depending on Vite setup
        // For Vite, dynamic imports with ?raw append can be used, but since we have dynamic id,
        // we might need to fetch instead or use import.meta.glob.
        // For this demo, we'll try to fetch it from public/posts directory or use import.meta.glob
        
        // Simulating import via Vite's glob since fetching local fs in browser is tricky
        const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
        const filePath = `../posts/${postId}.md`;
        
        if (modules[filePath]) {
          const rawContent = await modules[filePath]();
          // Extract frontmatter
          const { data, content: markdownBody } = matter(rawContent);
          setMeta(data);
          setContent(markdownBody);
        } else {
          setContent('# Post Not Found\nSorry, the requested post does not exist.');
        }
      } catch (err) {
        console.error(err);
        setContent('# Error Loading Post\nSomething went wrong.');
      } finally {
        setLoading(false);
      }
    };

    if (postId) loadPost();
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

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/roadmaps" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors">
        <ArrowLeft size={18} /> Back to Roadmaps
      </Link>
      
      {meta.title && (
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 mb-4">
            {meta.category && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {meta.category}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
            {meta.date && (
              <div className="flex items-center gap-2"><Calendar size={16} />{meta.date}</div>
            )}
            {meta.author && (
              <div className="flex items-center gap-2"><User size={16} />{meta.author}</div>
            )}
            <div className="flex items-center gap-2"><Clock size={16} />5 min read</div>
          </div>
        </header>
      )}

      <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-secondary hover:prose-a:text-primary prose-img:rounded-2xl prose-img:shadow-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogDetail;
