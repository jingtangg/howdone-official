const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-3xl font-bold">HOWDONE</div>
            <div className="text-xl font-semibold opacity-90">
              HOW DONE, WELL DONE
            </div>
            <div className="text-sm opacity-70 pt-8 border-t border-background/20">
              <p>版權所有 © 2025 好動科技有限公司</p>
              <p className="mt-2">統一編號：96658849</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
