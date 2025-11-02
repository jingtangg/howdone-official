import { Button } from "@/components/ui/button";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const handleContactClick = () => {
    const email = "howdone.irina@gmail.com";
    const subject = encodeURIComponent("專案諮詢");
    const body = encodeURIComponent("您好，我想諮詢關於專案開發的相關資訊。\n\n姓名：\nEmail：\n訊息：\n");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "howdone.irina@gmail.com",
      link: "mailto:howdone.irina@gmail.com",
    },
    {
      icon: MapPin,
      label: "地址",
      value: "新北市中和區中正路716號10樓之1",
      link: "https://maps.google.com/?q=新北市中和區中正路716號10樓之1",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@howdone_tech",
      link: "https://www.instagram.com/howdone_tech",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-display-lg font-bold mb-6">
            聯絡我們
          </h2>
          <p className="text-xl text-muted-foreground">
            讓我們開始討論您的下一個專案
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-12 shadow-xl border border-border">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group"
                  >
                    <Icon className="w-6 h-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="space-y-6 pt-8 border-t border-border text-center">
              <Button
                onClick={handleContactClick}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                size="lg"
              >
                發送 Email 給我們
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
