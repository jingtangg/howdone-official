import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "費用如何計算？",
      answer: "我們盡力簡化估價流程，簡易價格列表請參考 Instagram。特殊專案視工作量而定，經討論後由團隊提供正式報價。",
    },
    {
      question: "支持哪些合作模式？",
      answer: "大型專案服務時間為 09:00–18:00可提供全職團隊一條龍服務。\n 小型專案服務時間為20:00–23:00可採協槓團隊方式執行。",
    },
    {
      question: "提供哪些技術服務？",
      answer: "支援多種開發技術：Java、.NET、APP、C++、Unity、AI 等。我們持續追求創新，與客戶共同打造更具前瞻性的產品。",
    },
    {
      question: "其他服務與作品？",
      answer: "請參考官方 Instagram，查看更多案例與延伸服務，包含視覺設計、海報製作、文字翻譯及陪同翻譯等周邊服務。",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-display-lg font-bold mb-6">
            常見問題
          </h2>
          <p className="text-xl text-muted-foreground">
            快速了解我們的服務模式與技術能力
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-8 bg-card hover:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-xl font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
