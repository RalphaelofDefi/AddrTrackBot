
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: "Top 50 Token Holders",
      description: "Comprehensive analysis of the largest token holders by USD value and token balance",
      icon: "📊",
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Whale Identification",
      description: "Automatically tag wallets: 🐋 for >1% supply holders, 🐬 for <1% holders",
      icon: "🐋",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      title: "Contract Detection",
      description: "Smart contract address identification and flagging for enhanced security",
      icon: "🔍",
      gradient: "from-neon-green to-neon-cyan"
    },
    {
      title: "Supply Percentage",
      description: "Visual representation of each holder's percentage of total token supply",
      icon: "📈",
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      title: "Copyable Addresses",
      description: "User-friendly wallet address formats with one-click copy functionality",
      icon: "📋",
      gradient: "from-neon-blue to-neon-green"
    },
    {
      title: "Error Handling",
      description: "Graceful notifications when data is unavailable or analysis fails",
      icon: "⚡",
      gradient: "from-neon-cyan to-neon-purple"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-neon animate-neon-pulse">
            CORE FEATURES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by advanced algorithms and real-time blockchain data analysis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:scale-105 transition-all duration-300 group border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className={`text-xl bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
