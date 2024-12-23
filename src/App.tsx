import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  const renderContent = () => {
    if (path === '/about') return <About />;
    if (path === '/blog') return <Blog />;
    
    // Default home page content
    return (
      <>
        <Hero />
        <Services />
        <CaseStudies />
        <Contact />
      </>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          {renderContent()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;