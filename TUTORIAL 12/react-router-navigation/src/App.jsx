import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('./components/Navigation'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Search = lazy(() => import('./pages/Search'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Admin = lazy(() => import('./pages/Admin'));
const Overview = lazy(() => import('./pages/Overview')); 
const Settings = lazy(() => import('./pages/Settings')); 

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-profile/:id" element={<UserProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;