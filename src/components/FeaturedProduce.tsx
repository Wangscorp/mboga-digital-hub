import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";
import vegetablesImage from "@/assets/vegetables-fresh.jpg";

const produce = [
  {
    name: "Sukuma Wiki",
    price: "KSh 20/bunch",
    location: "Kiambu",
    fresh: true
  },
  {
    name: "Nyanya (Tomato)",
    price: "KSh 80/kg",
    location: "Nairobi",
    fresh: true
  },
  {
    name: "Kabichi (Cabbage)",
    price: "KSh 50/piece",
    location: "Limuru",
    fresh: true
  },
  {
    name: "Karoti (Carrots)",
    price: "KSh 60/kg",
    location: "Nyandarua",
    fresh: true
  }
];

export const FeaturedProduce = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mboga Safi za Leo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mboga fresh kutoka kwa wakulima wetu. Bei poa, ubora wa juu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {produce.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${vegetablesImage})` }}
              >
                {item.fresh && (
                  <Badge className="absolute top-3 right-3 bg-trust">
                    <Leaf className="w-3 h-3 mr-1" />
                    Fresh
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground">Kutoka {item.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
