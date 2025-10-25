import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-market.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Mboga Safi Kutoka Shamba
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Unganisha wakulima na wanunuzi moja kwa moja. Soko iko wapi leo? Tunakuonesha!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Anza Sasa - Ni Bure
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
              Soko Iko Wapi Leo?
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border-2 border-primary">
              <Smartphone className="w-10 h-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-card-foreground mb-2">Simu Yoyote</h3>
              <p className="text-sm text-muted-foreground">Inafanya kazi hata na simu za bei nafuu</p>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border-2 border-accent">
              <Wifi className="w-10 h-10 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold text-card-foreground mb-2">Bila Internet</h3>
              <p className="text-sm text-muted-foreground">Fanya biashara hata bila mtandao</p>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border-2 border-secondary">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold text-card-foreground mb-2">M-Pesa</h3>
              <p className="text-sm text-muted-foreground">Malipo rahisi na salama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
