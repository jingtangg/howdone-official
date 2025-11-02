import { Shield, Sparkles, Network, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "精準穩定",
      description: "系統能動只是起點，難得的是在多變的環境裡依然運作順暢、反應精準。",
    },
    {
      icon: Network,
      title: "資安防護",
      description: "整合硬體、網路與雲端資源，確保資料傳輸的安全與系統運行的可靠。",
    },
    {
      icon: Sparkles,
      title: "AI 創新",
      description: "AI 技術推動您的創新發展，數據不僅被蒐集更被理解與轉化為決策力。",
    },
    {
      icon: Zap,
      title: "靈活服務",
      description: "針對不同需求提供客製化解決方案，協助您實現商務的高效與持續成長。",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-display-lg font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            關於好動
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            我們專注於系統整合與專案開發，深信真正的價值不在於 Done，而在於 Well Done。<br/>
            因為能完成是一種能力，而能完成得精準、美好且持續發揮價值，才是一種專業。<br/>
            <br/>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(240,180,41,0.15)] hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container with Premium Styling */}
                  <div className="relative mb-6">
                    {/* Glow Effect Background */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Icon Box */}
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/40 transition-all duration-500 backdrop-blur-sm">
                      {/* Inner Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon className="w-9 h-9 text-primary relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(240,180,41,0.6)] transition-all duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
