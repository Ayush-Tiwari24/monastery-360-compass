import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  MapPin, 
  Star, 
  Users, 
  Coffee,
  Mountain,
  Utensils,
  Car,
  Phone,
  CheckCircle,
  Heart,
  Camera,
  Clock,
  Wifi,
  Shield
} from "lucide-react";

export const HomestaysGuides = () => {
  const homestays = [
    {
      id: 1,
      name: "Pemba's Traditional Home",
      location: "Near Rumtek Monastery",
      host: "Pemba Sherpa Family",
      rating: 4.9,
      reviews: 127,
      price: "₹1,200",
      amenities: ["Traditional Meals", "Mountain Views", "Cultural Stories", "Wifi Available"],
      description: "Experience authentic Sikkimese hospitality in a traditional stone house with panoramic monastery views.",
      image: "/api/placeholder/300/200",
      verified: true,
      languages: ["English", "Hindi", "Nepali"]
    },
    {
      id: 2,
      name: "Monastery Guest House",
      location: "Pemayangtse Monastery",
      host: "Monastery Community",
      rating: 4.7,
      reviews: 89,
      price: "₹800",
      amenities: ["Prayer Hall Access", "Meditation Sessions", "Simple Meals", "Peaceful Environment"],
      description: "Stay within monastery premises and participate in daily prayers and meditation practices.",
      image: "/api/placeholder/300/200",
      verified: true,
      languages: ["English", "Hindi", "Bhutia"]
    },
    {
      id: 3,
      name: "Himalayan Heritage Home",
      location: "Gangtok Outskirts",
      host: "Tenzin & Dolma",
      rating: 4.8,
      reviews: 156,
      price: "₹1,500",
      amenities: ["Organic Farm", "Cooking Classes", "Local Crafts", "Transport Arranged"],
      description: "Learn traditional crafts and cooking while enjoying organic farm-to-table meals.",
      image: "/api/placeholder/300/200",
      verified: true,
      languages: ["English", "Hindi", "Lepcha", "Nepali"]
    }
  ];

  const localGuides = [
    {
      id: 1,
      name: "Lama Tenzin",
      specialty: "Spiritual Guide & Monastery History",
      experience: "15+ years",
      rating: 5.0,
      reviews: 234,
      languages: ["English", "Hindi", "Tibetan", "Bhutia"],
      certifications: ["Licensed Cultural Guide", "Monastery Authorization"],
      description: "Former monk with deep knowledge of Buddhist rituals, monastery architecture, and spiritual practices.",
      tours: ["Sacred Monastery Tour", "Meditation Retreat", "Festival Guide"],
      price: "₹2,500/day"
    },
    {
      id: 2,
      name: "Karma Bhutia",
      specialty: "Adventure & Cultural Tours",
      experience: "12+ years",
      rating: 4.9,
      reviews: 189,
      languages: ["English", "Hindi", "Nepali", "Bhutia"],
      certifications: ["Mountain Guide License", "First Aid Certified"],
      description: "Expert in combining monastery visits with trekking adventures and local cultural immersion.",
      tours: ["Monastery Trek", "Cultural Heritage Walk", "Photography Tour"],
      price: "₹3,000/day"
    },
    {
      id: 3,
      name: "Yangchen Dolma",
      specialty: "Women's Cultural Tours",
      experience: "8+ years",
      rating: 4.8,
      reviews: 145,
      languages: ["English", "Hindi", "Lepcha", "Nepali"],
      certifications: ["Women's Safety Certified", "Cultural Sensitivity Trained"],
      description: "Specializes in women-only groups and family tours with focus on local traditions and crafts.",
      tours: ["Women's Monastery Tour", "Family Cultural Experience", "Craft Workshop Tours"],
      price: "₹2,200/day"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Authentic Cultural Immersion",
      description: "Live with local families and experience daily monastery life firsthand"
    },
    {
      icon: Utensils,
      title: "Traditional Cuisine",
      description: "Enjoy home-cooked meals with organic ingredients and traditional recipes"
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Build lasting relationships with monks, families, and local artisans"
    },
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All homestays and guides are verified for safety and cultural authenticity"
    }
  ];

  return (
    <section className="py-20 bg-gradient-mountain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Homestays & Local Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect deeply with monastery culture through authentic homestays and expert local guides 
            who share their heritage with genuine warmth and wisdom.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Homestays Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Featured Monastery Homestays
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homestays.map((homestay) => (
              <Card key={homestay.id} className="group hover:shadow-elevation transition-all duration-500 overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gradient-card flex items-center justify-center text-muted-foreground">
                    <Home className="h-12 w-12" />
                  </div>
                  {homestay.verified && (
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{homestay.rating}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {homestay.name}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {homestay.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-monastery-red">{homestay.price}</div>
                      <div className="text-sm text-muted-foreground">per night</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {homestay.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-monastery-gold" />
                      <span>Host: {homestay.host}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 text-yellow-400" />
                      <span>{homestay.rating} ({homestay.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {homestay.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {homestay.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{homestay.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 bg-gradient-hero">
                      Book Stay
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Guides Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Expert Local Guides
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {localGuides.map((guide) => (
              <Card key={guide.id} className="group hover:shadow-elevation transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xl font-bold">
                        {guide.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {guide.name}
                      </CardTitle>
                      <p className="text-sm text-monastery-saffron font-semibold">
                        {guide.specialty}
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold">{guide.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({guide.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-monastery-red" />
                      <span>Experience: {guide.experience}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-monastery-gold" />
                      <span>Price: {guide.price}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2">Languages:</h5>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2">Popular Tours:</h5>
                    <div className="space-y-1">
                      {guide.tours.slice(0, 2).map((tour, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {tour}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button className="w-full bg-gradient-hero">
                      Book Guide
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-card border-monastery-gold/20 max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready for an Authentic Experience?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of travelers who've discovered the true spirit of Sikkim 
                through our carefully vetted homestays and expert local guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero">
                  Explore All Homestays
                </Button>
                <Button size="lg" variant="outline">
                  Find Your Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};