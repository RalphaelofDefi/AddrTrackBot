
const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/7fa963c1-8091-4b51-96d1-02733ccd2e2f.png" 
                alt="AddrTrack Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-neon">ADDRTRACK</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced cryptocurrency analysis for the modern trader.
            </p>
          </div>
          
          <div>
            <h4 className="text-neon-cyan font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">API</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-neon-purple font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-neon-green font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 AddrTrack. All rights reserved. Built for the future of crypto analysis.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
