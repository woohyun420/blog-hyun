import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Roadmaps from './pages/Roadmaps';
import BlogDetail from './pages/BlogDetail';
import CategoryList from './pages/CategoryList';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="diagnosis" element={<Diagnosis />} />
            <Route path="roadmaps" element={<Roadmaps />} />
            <Route path="category/:categoryId" element={<CategoryList />} />
            <Route path="post/:postId" element={<BlogDetail />} />
            {/* Fallback for the old link if it remains anywhere */}
            <Route path="blog/:postId" element={<BlogDetail />} /> 
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
