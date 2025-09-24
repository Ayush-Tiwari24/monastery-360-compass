import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MapPin, Clock, Users } from "lucide-react";

export const MonasteryShowcase = () => {
  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, seat of the Karmapa and center of the Karma Kagyu lineage.",
      location: "Gangtok",
      established: "1966",
      monks: "300+",
      image: "/api/placeholder/400/300",
      featured: true
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      description: "One of the oldest and most important monasteries, meaning 'Perfect Sublime Lotus'.",
      location: "Pelling",
      established: "1705",
      monks: "108",
      image: "/api/placeholder/400/300",
      featured: false
    },
    {
      id: 3,
      name: "Enchey Monastery",
      description: "Famous for its Cham dance performances during the annual festival.",
      location: "Gangtok",
      established: "1909",
      monks: "90",
      image: "/api/placeholder/400/300",
      featured: false
    },
    {
      id: 4,
      name: "Tashiding Monastery",
      description: "Sacred site where a single visit is believed to cleanse sins.",
      location: "Tashiding",
      established: "1717",
      monks: "50",
      image: "/api/placeholder/400/300",
      featured: false
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-mountain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sacred Monasteries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the spiritual heritage of Sikkim through our curated collection of monasteries, 
            each offering unique insights into Buddhist culture and tradition.
          </p>
        </div>

        {/* Monastery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {monasteries.map((monastery, index) => (
            <Card 
              key={monastery.id} 
              className={`group hover:shadow-elevation transition-all duration-500 overflow-hidden ${
                monastery.featured ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-card flex items-center justify-center text-muted-foreground">
                  <Eye className="h-12 w-12" />
                  <span className="ml-2 text-lg">360° View Available</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  variant="secondary" 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Explore in 360°
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {monastery.name}
                  </h3>
                  {monastery.featured && (
                    <span className="bg-gradient-hero text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {monastery.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-monastery-red" />
                    {monastery.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-monastery-gold" />
                    Est. {monastery.established}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-monastery-saffron" />
                    {monastery.monks} Monks
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Monasteries
          </Button>
        </div>
      </div>
    </section>
  );
};