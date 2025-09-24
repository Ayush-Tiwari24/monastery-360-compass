import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Languages, 
  Map, 
  Headphones, 
  Archive, 
  Calendar,
  Users,
  Wifi,
  WifiOff,
  Search,
  Navigation,
  Volume2,
  FileText,
  Heart,
  MapPin
} from "lucide-react";

export const TechnologyFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "360° Virtual Tours",
      description: "Experience lifelike monastery interiors, peaceful courtyards, and breathtaking Himalayan landscapes in ultra-high resolution.",
      highlights: ["8K Resolution Tours", "Interior & Exterior Views", "Immersive Soundscapes", "VR Compatible"],
      category: "Virtual Reality",
      color: "monastery-red"
    },
    {
      icon: Languages,
      title: "Multi-Language Narration",
      description: "Deep cultural insights explained in local languages (Nepali, Bhutia, Lepcha) and global languages (English, Hindi, Chinese).",
      highlights: ["5+ Languages", "Native Speaker Guides", "Cultural Context", "Ritual Explanations"],
      category: "Audio Experience", 
      color: "monastery-gold"
    },
    {
      icon: Map,
      title: "Interactive Map & Planner",
      description: "Geo-tagged monasteries with intelligent route planning, nearby attractions, and transportation options.",
      highlights: ["GPS Integration", "Route Optimization", "Transport Info", "Attraction Mapping"],
      category: "Navigation",
      color: "monastery-saffron"
    },
    {
      icon: Headphones,
      title: "Smart Audio Guide",
      description: "GPS-triggered content with Bluetooth beacon support, fully functional offline in remote mountain areas.",
      highlights: ["GPS Auto-Play", "Bluetooth Beacons", "Offline Capable", "Location Aware"],
      category: "Smart Technology",
      color: "monastery-stone"
    },
    {
      icon: Archive,
      title: "Digital Archives",
      description: "Ancient manuscripts, sacred murals, and historical documents with AI-powered search and translation capabilities.",
      highlights: ["AI Search Engine", "Document Translation", "High-Res Scanning", "Historical Context"],
      category: "Digital Heritage",
      color: "monastery-earth"
    },
    {
      icon: Calendar,
      title: "Cultural Calendar",
      description: "Festival and event scheduling with advance booking, crowd management, and real-time updates.",
      highlights: ["Event Booking", "Crowd Analytics", "Live Updates", "Capacity Management"],
      category: "Event Planning",
      color: "monastery-red"
    }
  ];

  const technologyStats = [
    { label: "Virtual Tours", value: "15+", icon: Globe },
    { label: "Languages Supported", value: "8", icon: Languages },
    { label: "Offline Locations", value: "25+", icon: WifiOff },
    { label: "Digital Manuscripts", value: "500+", icon: FileText }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced Technology Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cutting-edge digital solutions that preserve and share monastery heritage 
            while respecting cultural sensitivity and community involvement.
          </p>

          {/* Technology Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {technologyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elevation transition-all duration-500 border-l-4 border-l-transparent hover:border-l-primary"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
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

        {/* Community Archiving Highlight */}
        <Card className="bg-gradient-card border-monastery-gold/20 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-monastery-red mr-3" />
                  <h3 className="text-3xl font-bold text-foreground">Community Archiving</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our digitization process is community-driven, with monks and local elders 
                  determining what should be preserved and shared. We ensure cultural sensitivity 
                  and respect for sacred traditions in every digital archive.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-monastery-gold mr-3" />
                    <span className="text-foreground">Monk-approved digitization scope</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-monastery-red mr-3" />
                    <span className="text-foreground">Cultural sensitivity protocols</span>
                  </div>
                  <div className="flex items-center">
                    <Archive className="h-5 w-5 text-monastery-saffron mr-3" />
                    <span className="text-foreground">Local ownership of digital heritage</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Archive className="h-10 w-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Respectful Preservation</h4>
                <p className="text-muted-foreground mb-4">
                  Working hand-in-hand with monastery communities to preserve their heritage digitally.
                </p>
                <Button className="bg-gradient-hero">
                  View Archive Guidelines
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};