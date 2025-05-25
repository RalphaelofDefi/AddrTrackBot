
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="glass-effect border-0 text-center animate-slide-up">
          <CardContent className="p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon animate-neon-pulse">
              READY TO TRACK?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of crypto analysts using Whale Tracker to make informed trading decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold px-8 py-4 text-lg hover:scale-105 transition-transform glow-border animate-glow"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black px-8 py-4 text-lg transition-all duration-300"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-neon-green mb-2">24/7</div>
                <div className="text-gray-400">Real-time Monitoring</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-neon-cyan mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-neon-purple mb-2">&lt; 1s</div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
