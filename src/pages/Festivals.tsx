import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Music, Camera, ArrowLeft, Filter, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Festivals = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const months = ["all", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const festivalTypes = ["all", "religious", "cultural", "seasonal"];

  const festivals = [
    {
      id: 1,
      name: "Losar (Tibetan New Year)",
      date: "February 10-12, 2024",
      month: "February",
      monastery: "All Monasteries",
      type: "religious",
      status: "upcoming",
      description: "The most significant Buddhist festival celebrating the Tibetan New Year with three days of prayers, dances, and ceremonies.",
      highlights: ["Traditional Cham Dances", "Butter Lamp Offerings", "Community Feasts", "Prayer Flag Ceremonies"],
      duration: "3 days",
      crowd: "high",
      bookingRequired: true,
      ticketPrice: "Free",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Saga Dawa Festival",
      date: "May 15, 2024",
      month: "May",
      monastery: "Rumtek Monastery",
      type: "religious",
      status: "upcoming",
      description: "Commemorates Buddha's birth, enlightenment, and parinirvana with special merit-making activities.",
      highlights: ["Special Prayers", "Merit Making", "Meditation Sessions", "Teaching Sessions"],
      duration: "1 day",
      crowd: "medium",
      bookingRequired: false,
      ticketPrice: "Free",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Hemis Festival",
      date: "June 20-21, 2024", 
      month: "June",
      monastery: "Pemayangtse Monastery",
      type: "cultural",
      status: "upcoming",
      description: "Famous for spectacular Cham dances performed by monks in colorful masks and traditional costumes.",
      highlights: ["Masked Cham Dances", "Traditional Music", "Cultural Displays", "Local Handicrafts"],
      duration: "2 days",
      crowd: "high",
      bookingRequired: true,
      ticketPrice: "₹200",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Drukpa Kunley Festival", 
      date: "September 8, 2024",
      month: "September",
      monastery: "Enchey Monastery",
      type: "cultural",
      status: "upcoming", 
      description: "Celebrates the divine madman saint with joyful festivities and unconventional teachings.",
      highlights: ["Folk Performances", "Comedy Acts", "Traditional Games", "Storytelling Sessions"],
      duration: "1 day",
      crowd: "medium",
      bookingRequired: false,
      ticketPrice: "Free",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      name: "Diwali Buddhist Style",
      date: "October 31, 2024",
      month: "October", 
      monastery: "Multiple Monasteries",
      type: "seasonal",
      status: "upcoming",
      description: "Buddhist adaptation of Diwali with thousands of butter lamps creating a magical atmosphere.",
      highlights: ["Butter Lamp Festival", "Light Ceremonies", "Community Prayers", "Night Celebrations"],
      duration: "1 day",
      crowd: "high",
      bookingRequired: true,
      ticketPrice: "₹100",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      name: "Lhabab Duchen",
      date: "November 18, 2024",
      month: "November",
      monastery: "Tashiding Monastery", 
      type: "religious",
      status: "upcoming",
      description: "Celebrates Buddha's descent from heaven with special merit-making activities and prayers.",
      highlights: ["Sacred Prayers", "Merit Accumulation", "Teaching Sessions", "Community Gathering"],
      duration: "1 day", 
      crowd: "low",
      bookingRequired: false,
      ticketPrice: "Free",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredFestivals = festivals.filter(festival => {
    const monthMatch = selectedMonth === "all" || festival.month === selectedMonth;
    const typeMatch = selectedType === "all" || festival.type === selectedType;
    return monthMatch && typeMatch;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCrowdColor = (crowd: string) => {
    switch(crowd) {
      case "low": return "text-green-600";
      case "medium": return "text-yellow-600"; 
      case "high": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="secondary" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Festival Calendar</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Join the vibrant spiritual celebrations that bring monastery communities together throughout the year. 
            Book your spot for authentic cultural experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border border-border rounded-md px-3 py-2 text-sm"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month === "all" ? "All Months" : month}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-border rounded-md px-3 py-2 text-sm"
              >
                {festivalTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Download Calendar
          </Button>
        </div>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival) => (
            <Card key={festival.id} className="group hover:shadow-elevation transition-all duration-500 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-card flex items-center justify-center text-muted-foreground">
                  <Music className="h-12 w-12" />
                </div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={getStatusColor(festival.status)}>
                    {festival.status}
                  </Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {festival.type}
                  </Badge>
                </div>
                
                {festival.bookingRequired && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-monastery-red text-white">
                      Booking Required
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {festival.name}
                  </CardTitle>
                  <div className="text-right text-sm">
                    <div className="font-bold text-monastery-red">{festival.ticketPrice}</div>
                    <div className="text-muted-foreground">{festival.duration}</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-monastery-gold" />
                    {festival.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-monastery-saffron" />
                    {festival.monastery}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span className={getCrowdColor(festival.crowd)}>
                      {festival.crowd.charAt(0).toUpperCase() + festival.crowd.slice(1)} Crowd Expected
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {festival.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-foreground mb-2">Highlights:</h5>
                  <div className="grid grid-cols-2 gap-1">
                    {festival.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {festival.bookingRequired ? (
                    <Button className="flex-1 bg-gradient-hero">
                      <Ticket className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  ) : (
                    <Button className="flex-1 bg-gradient-hero">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  )}
                  <Button variant="outline">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No festivals found for the selected criteria.</p>
          </div>
        )}

        {/* Festival Guidelines */}
        <Card className="mt-16 bg-gradient-card border-monastery-gold/20">
          <CardHeader>
            <CardTitle className="text-2xl">Festival Guidelines & Tips</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">What to Expect:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Traditional masked dances (Cham) during major festivals</li>
                <li>• Community prayers and meditation sessions</li>
                <li>• Local food stalls and traditional handicrafts</li>
                <li>• Photography opportunities with cultural performances</li>
                <li>• Interactions with monks and local community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Important Notes:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dress modestly and remove shoes in prayer halls</li>
                <li>• Maintain silence during meditation and prayer times</li>
                <li>• Photography may be restricted in certain areas</li>
                <li>• Arrive early for popular festivals to secure good spots</li>
                <li>• Respect local customs and follow guidance from hosts</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Festivals;