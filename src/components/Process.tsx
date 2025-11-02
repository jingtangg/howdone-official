import { Lightbulb, Hammer, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "策略 Strategy",
      description: "依據您的需求與預算規劃最適方案，讓每個專案都能精準落地，創造可持續的商業價值。",
    },
    {
      icon: Hammer,
      title: "構建 Build",
      description: "將抽象的需求轉化為具體成果，在穩健與效率之間取得平衡，確保經得起實際運作的考驗。",
    },
    {
      icon: Sparkles,
      title: "美學 Aesthetic",
      description: "不僅關乎視覺，更展現對細節的敏感。在每個專案中我們追求技術與美學的平衡，讓功能與形式共同成就價值。",
    },
  ];

  return (
    <section id="process" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-display-lg font-bold mb-6">
            專案流程
          </h2>
          <p className="text-xl text-muted-foreground">
            將您的想法以合乎預算的方式完美呈現
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
