import devImage from "@/assets/service-dev.jpg";
import securityImage from "@/assets/service-security.jpg";
import aiImage from "@/assets/service-ai.jpg";
import creativeImage from "@/assets/service-creative.jpg";

const Services = () => {
  const services = [
    {
      image: devImage,
      title: "客製化軟體開發",
      description: "根據企業需求量身打造解決方案，提供高度靈活性與擴展性。",
    },
    {
      image: securityImage,
      title: "網路設備與資安",
      description: "先進的網路設備與防護機制，保障企業資料安全。",
    },
    {
      image: aiImage,
      title: "AI 智能科技",
      description: "運用人工智慧與演算法進行智慧化數據分析與自動化決策。",
    },
    {
      image: creativeImage,
      title: "其他相關服務",
      description: "視覺設計、海報製作、文字翻譯及陪同翻譯等周邊服務。",
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#000000] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 180, 41, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240, 180, 41, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4">
          </div>
          <h2 className="text-display-lg font-bold mb-8 text-white">
            服務項目
          </h2>
          <p className="text-xl text-white/70">
            從軟體開發到 AI 創新的全方位技術服務
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(240,180,41,0.3)] transition-all duration-700 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Accent Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
