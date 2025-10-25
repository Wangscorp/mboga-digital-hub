import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const markets = [
  {
    name: "Soko la Gikomba",
    location: "Nairobi",
    time: "5:00 AM - 10:00 AM",
    crowd: "Msongamano",
    status: "Wazi Sasa"
  },
  {
    name: "Soko la Wakulima",
    location: "Kiambu",
    time: "6:00 AM - 2:00 PM",
    crowd: "Wastani",
    status: "Wazi Sasa"
  },
  {
    name: "Marikiti Market",
    location: "Nairobi CBD",
    time: "4:00 AM - 12:00 PM",
    crowd: "Msongamano Sana",
    status: "Wazi Sasa"
  }
];

export const MarketFinder = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soko Iko Wapi Leo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pata soko karibu na wewe. Taarifa za wakati halisi kuhusu bei na msongamano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {markets.map((market, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{market.name}</span>
                  <span className="text-sm font-normal bg-trust text-trust-foreground px-3 py-1 rounded-full">
                    {market.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{market.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>{market.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-accent" />
                  <span>{market.crowd}</span>
                </div>

                <Button className="w-full mt-4">
                  Angalia Bei Leo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
