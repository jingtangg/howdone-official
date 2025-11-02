import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#000000]"
    >
      {/* Animated Grid Background with Perspective */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 180, 41, 0.15) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(240, 180, 41, 0.15) 1.5px, transparent 1.5px),
              linear-gradient(rgba(0, 122, 204, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 122, 204, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px, 120px 120px, 30px 30px, 30px 30px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
          }}
        ></div>
      </div>

      {/* Enhanced Glowing Orbs with Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/25 rounded-full blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Particles with Varied Sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'bg-primary/50' : i % 3 === 1 ? 'bg-secondary/40' : 'bg-primary/30'
            }`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-white/90">系統整合與專案開發專家</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-display-xl sm:text-display-2xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-white/95 drop-shadow-[0_2px_40px_rgba(240,180,41,0.4)] mb-3">
                HOW DONE,
              </span>
              <span className="block bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent drop-shadow-[0_4px_60px_rgba(240,180,41,0.6)]">
                WELL DONE
              </span>
            </h1>

            <div className="flex justify-center">
              <div className="h-1.5 w-40 bg-primary/60 rounded-full"></div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            專注系統整合與專案開發
            <br />
            <span className="font-medium text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text">打造高效穩健的商業價值</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="group relative bg-gradient-to-r from-[#F0B429] to-[#F0B429] hover:from-[#F0B429] hover:to-[#D9A323] text-black font-semibold text-lg h-16 px-12 shadow-[0_0_40px_rgba(240,180,41,0.5)] hover:shadow-[0_0_50px_rgba(240,180,41,0.7)] transition-all duration-300 rounded-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                了解更多
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-lg h-16 px-12 border-2 border-white/30 text-foreground bg-white hover:bg-white/90 hover:border-white/50 backdrop-blur-sm transition-all duration-300 rounded-xl hover:scale-105"
            >
              即刻開始
            </Button>
          </div>

          {/* Enhanced Stats with Cards */}
          <div className="pt-24 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "專案經驗", delay: "0s" },
              { value: "100%", label: "客戶滿意", delay: "0.1s" },
              { value: "24/7", label: "技術支援", delay: "0.2s" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:bg-white/[0.08]"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce-slow">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            transform: translateY(-100vh) translateX(80px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(0);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;
