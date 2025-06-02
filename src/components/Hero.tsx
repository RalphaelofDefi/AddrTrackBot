
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'ADDRTRACK';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neon animate-neon-pulse">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Advanced Crypto Analysis Bot
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Track whale movements, analyze token holders, and detect smart contracts 
            with military-grade precision. Your gateway to cryptocurrency intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold px-8 py-4 text-lg hover:scale-105 transition-transform glow-border animate-glow"
              onClick={() => window.open('https://t.me/AddrTrackBot', '_blank')}
            >
              Start Analysis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black px-8 py-4 text-lg transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating crypto symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-20 animate-float">₿</div>
        <div className="absolute top-3/4 right-1/4 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>Ξ</div>
        <div className="absolute bottom-1/4 left-1/3 text-2xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>◊</div>
      </div>
    </section>
  );
};

export default Hero;
