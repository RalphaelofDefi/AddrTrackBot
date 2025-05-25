
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Demo = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  
  const mockData = [
    {
      rank: 1,
      address: "0x1234...5678",
      fullAddress: "0x1234567890abcdef1234567890abcdef12345678",
      balance: "1,250,000",
      percentage: "12.5%",
      usdValue: "$2,450,000",
      type: "whale",
      isContract: false
    },
    {
      rank: 2,
      address: "0xabcd...efgh",
      fullAddress: "0xabcdefghijklmnopqrstuvwxyz1234567890abcdef",
      balance: "850,000",
      percentage: "8.5%",
      usdValue: "$1,670,000",
      type: "whale",
      isContract: true
    },
    {
      rank: 3,
      address: "0x9876...5432",
      fullAddress: "0x9876543210fedcba9876543210fedcba98765432",
      balance: "75,000",
      percentage: "0.75%",
      usdValue: "$147,500",
      type: "dolphin",
      isContract: false
    }
  ];

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setSelectedAddress(address);
    setTimeout(() => setSelectedAddress(null), 2000);
  };

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-neon animate-neon-pulse">
            LIVE DEMO
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time whale tracking and holder analysis in action
          </p>
        </div>
        
        <Card className="glass-effect border-0 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-cyan flex items-center gap-3">
              🔍 Token Analysis Results
              <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                LIVE
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 text-neon-purple">Rank</th>
                    <th className="text-left py-4 text-neon-purple">Address</th>
                    <th className="text-left py-4 text-neon-purple">Balance</th>
                    <th className="text-left py-4 text-neon-purple">% Supply</th>
                    <th className="text-left py-4 text-neon-purple">USD Value</th>
                    <th className="text-left py-4 text-neon-purple">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((holder, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-800 hover:bg-white/5 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <td className="py-4 font-bold text-neon-cyan">#{holder.rank}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(holder.fullAddress)}
                            className={`font-mono text-sm transition-all ${
                              selectedAddress === holder.fullAddress 
                                ? 'text-green-400 bg-green-400/10' 
                                : 'text-gray-300 hover:text-neon-cyan'
                            }`}
                          >
                            {holder.address}
                            {selectedAddress === holder.fullAddress && (
                              <span className="ml-2">✓ Copied!</span>
                            )}
                          </Button>
                          {holder.isContract && (
                            <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">
                              CONTRACT
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 font-bold">{holder.balance}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-neon-cyan to-neon-purple h-full rounded-full"
                              style={{ width: holder.percentage }}
                            ></div>
                          </div>
                          <span className="text-neon-green">{holder.percentage}</span>
                        </div>
                      </td>
                      <td className="py-4 font-bold text-neon-green">{holder.usdValue}</td>
                      <td className="py-4">
                        <span className="text-2xl">
                          {holder.type === 'whale' ? '🐋' : '🐬'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-4 glass-effect rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-neon-cyan mb-2">Analysis Summary</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Total Whales (>1%):</span>
                  <span className="text-neon-green ml-2 font-bold">2</span>
                </div>
                <div>
                  <span className="text-gray-400">Contract Addresses:</span>
                  <span className="text-red-400 ml-2 font-bold">1</span>
                </div>
                <div>
                  <span className="text-gray-400">Total Value Tracked:</span>
                  <span className="text-neon-purple ml-2 font-bold">$4.27M</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Demo;
