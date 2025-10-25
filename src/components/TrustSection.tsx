import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mama Wanjiku",
    role: "Mkulima, Kiambu",
    quote: "Sasa ninaweza kuuza mboga zangu moja kwa moja kwa wanunuzi. Bei ni nzuri zaidi!"
  },
  {
    name: "Bwana Ochieng",
    role: "Agrovet Owner, Nakuru",
    quote: "Wakulima wangu wanapata taarifa za bei za soko kila siku. Biashara imeongezeka sana."
  },
  {
    name: "Jane Muthoni",
    role: "Market Broker, Nairobi",
    quote: "Kufanya biashara imekuwa rahisi. Naweza kuona bei za soko wote kwa simu yangu."
  }
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wakulima Wanasema Nini?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sikiliza kutoka kwa wakulima na wauzaji wenzetu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
