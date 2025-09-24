import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Music, Users } from "lucide-react";

export const FestivalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");

  const festivals = [
    {
      id: 1,
      name: "Losar (Tibetan New Year)",
      date: "February 2024",
      monastery: "All Monasteries",
      description: "The most important Buddhist festival celebrating the Tibetan New Year with prayers, dances, and ceremonies.",
      type: "Religious",
      featured: true
    },
    {
      id: 2,
      name: "Saga Dawa",
      date: "May 2024",
      monastery: "Rumtek Monastery",
      description: "Commemorates Buddha's birth, enlightenment, and parinirvana with special prayers and meditation.",
      type: "Religious",
      featured: false
    },
    {
      id: 3,
      name: "Hemis Festival",
      date: "June 2024",
      monastery: "Pemayangtse Monastery",
      description: "Famous for its colorful Cham dances performed by monks wearing elaborate masks and costumes.",
      type: "Cultural",
      featured: true
    },
    {
      id: 4,
      name: "Drukpa Kunley",
      date: "September 2024",
      monastery: "Enchey Monastery",
      description: "Celebrates the divine madman saint with traditional music, dances, and spiritual teachings.",
      type: "Cultural",
      featured: false
    },
    {
      id: 5,
      name: "Diwali in Monasteries",
      date: "October 2024",
      monastery: "Multiple Monasteries",
      description: "Buddhist adaptation of the festival of lights with butter lamp offerings and prayers.",
      type: "Religious",
      featured: false
    },
    {
      id: 6,
      name: "Lhabab Duchen",
      date: "November 2024",
      monastery: "Tashiding Monastery",
      description: "Celebrates Buddha's descent from heaven with special merit-making activities.",
      type: "Religious",
      featured: false
    }
  ];

  const months = ["all", "February", "May", "June", "September", "October", "November"];

  const filteredFestivals = selectedMonth === "all" 
    ? festivals 
    : festivals.filter(festival => festival.date.includes(selectedMonth));

  return (
    <section id="festivals" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Festival Calendar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Immerse yourself in the vibrant spiritual celebrations that bring monastery communities together 
            throughout the year.
          </p>

          {/* Month Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {months.map((month) => (
              <Button
                key={month}
                variant={selectedMonth === month ? "default" : "outline"}
                onClick={() => setSelectedMonth(month)}
                className="capitalize"
              >
                {month === "all" ? "All Festivals" : month}
              </Button>
            ))}
          </div>
        </div>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival) => (
            <Card 
              key={festival.id} 
              className={`group hover:shadow-elevation transition-all duration-500 cursor-pointer ${
                festival.featured ? 'ring-2 ring-monastery-gold' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-monastery-red" />
                    <span className="text-sm font-semibold text-monastery-red">
                      {festival.date}
                    </span>
                  </div>
                  <Badge 
                    variant={festival.type === "Religious" ? "default" : "secondary"}
                    className={festival.type === "Religious" ? "bg-monastery-red" : "bg-monastery-saffron text-monastery-earth"}
                  >
                    {festival.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {festival.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {festival.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2 text-monastery-gold" />
                  {festival.monastery}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Music className="h-4 w-4 mr-1" />
                      <span>Live Performances</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Community</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No festivals found for the selected month.</p>
          </div>
        )}
      </div>
    </section>
  );
};