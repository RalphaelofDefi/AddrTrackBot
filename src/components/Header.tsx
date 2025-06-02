
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/7fa963c1-8091-4b51-96d1-02733ccd2e2f.png" 
              alt="AddrTrack Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-neon">ADDRTRACK</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-neon-cyan transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-neon-cyan transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-300 hover:text-neon-cyan transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-neon-cyan transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold hover:scale-105 transition-transform"
              onClick={() => window.open('https://t.me/AddrTrackBot', '_blank')}
            >
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-gray-800 pt-4">
            <a href="#features" className="block text-gray-300 hover:text-neon-cyan transition-colors">Features</a>
            <a href="#demo" className="block text-gray-300 hover:text-neon-cyan transition-colors">Demo</a>
            <a href="#pricing" className="block text-gray-300 hover:text-neon-cyan transition-colors">Pricing</a>
            <a href="#contact" className="block text-gray-300 hover:text-neon-cyan transition-colors">Contact</a>
            <div className="pt-4">
              <Button 
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold w-full"
                onClick={() => window.open('https://t.me/AddrTrackBot', '_blank')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
