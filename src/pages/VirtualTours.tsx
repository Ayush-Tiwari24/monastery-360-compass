import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, VolumeX, Volume2, Maximize, Download, ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const VirtualTours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [audioEnabled, setAudioEnabled] = useState(true);

  const tourCategories = ["all", "interior", "exterior", "festivals", "meditation"];

  const virtualTours = [
    {
      id: 1,
      title: "Rumtek Monastery - Main Prayer Hall",
      category: "interior",
      duration: "12 min",
      views: "15.2K",
      description: "Experience the golden interior of Sikkim's largest monastery with intricate murals and giant Buddha statue.",
      thumbnail: "/api/placeholder/600/400",
      languages: ["English", "Hindi", "Tibetan"],
      features: ["8K Resolution", "Spatial Audio", "Meditation Mode"],
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Pemayangtse Monastery - Mountain Courtyard",
      category: "exterior", 
      duration: "8 min",
      views: "12.8K",
      description: "Walk through ancient courtyards with breathtaking Himalayan views and traditional architecture.",
      thumbnail: "/api/placeholder/600/400",
      languages: ["English", "Hindi", "Nepali"],
      features: ["360° Panorama", "Weather Sounds", "Historical Timeline"],
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Enchey Monastery - Cham Dance Festival",
      category: "festivals",
      duration: "25 min", 
      views: "28.5K",
      description: "Join the colorful Cham dance ceremony with masked monks performing ancient sacred dances.",
      thumbnail: "/api/placeholder/600/400",
      languages: ["English", "Hindi", "Bhutia"],
      features: ["Live Recording", "Cultural Commentary", "Multi-Angle Views"],
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Tashiding Monastery - Sacred Meditation Cave",
      category: "meditation",
      duration: "30 min",
      views: "9.3K", 
      description: "Enter the sacred cave where great masters meditated, with guided meditation sessions.",
      thumbnail: "/api/placeholder/600/400",
      languages: ["English", "Tibetan"],
      features: ["Guided Meditation", "Binaural Audio", "Breathing Guide"],
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Dubdi Monastery - Ancient Ruins",
      category: "exterior",
      duration: "15 min",
      views: "7.1K",
      description: "Explore Sikkim's oldest monastery ruins with archaeological insights and restoration stories.",
      thumbnail: "/api/placeholder/600/400", 
      languages: ["English", "Hindi"],
      features: ["Archaeological Mode", "Time Reconstruction", "Historical Audio"],
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "Ralang Monastery - Morning Prayers",
      category: "interior",
      duration: "18 min",
      views: "11.7K",
      description: "Join monks during their morning prayer rituals with authentic chanting and ceremonies.",
      thumbnail: "/api/placeholder/600/400",
      languages: ["English", "Hindi", "Tibetan"],
      features: ["Live Audio", "Prayer Translation", "Ritual Guide"],
      difficulty: "Beginner"
    }
  ];

  const filteredTours = selectedCategory === "all" 
    ? virtualTours 
    : virtualTours.filter(tour => tour.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800"; 
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">360° Virtual Tours</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Immerse yourself in the sacred world of Sikkim's monasteries through our ultra-high resolution 
            360° virtual experiences. From ancient prayer halls to festival celebrations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {tourCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Tours" : category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="flex items-center"
            >
              {audioEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
              {audioEnabled ? "Audio On" : "Audio Off"}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="group hover:shadow-elevation transition-all duration-500 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-card flex items-center justify-center text-muted-foreground relative">
                  <Play className="h-16 w-16 opacity-70" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="absolute top-3 left-3">
                  <Badge className={getDifficultyColor(tour.difficulty)}>
                    {tour.difficulty}
                  </Badge>
                </div>
                
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {tour.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/90 text-foreground hover:bg-white">
                    <Play className="h-5 w-5 mr-2" />
                    Start Tour
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {tour.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground ml-2">
                    <Eye className="h-4 w-4 mr-1" />
                    {tour.views}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tour.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-1">Features:</h5>
                    <div className="flex flex-wrap gap-1">
                      {tour.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-1">Languages:</h5>
                    <div className="flex flex-wrap gap-1">
                      {tour.languages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-hero">
                    <Play className="h-4 w-4 mr-2" />
                    Start Tour
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tours found for the selected category.</p>
          </div>
        )}

        {/* Equipment Requirements */}
        <Card className="mt-16 bg-gradient-card border-monastery-gold/20">
          <CardHeader>
            <CardTitle className="text-2xl">System Requirements & Tips</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Recommended Setup:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• VR Headset (Optional): Oculus, HTC Vive, or mobile VR</li>
                <li>• High-speed internet: 25+ Mbps for 8K content</li>
                <li>• Modern browser: Chrome, Firefox, Safari</li>
                <li>• Headphones: For spatial audio experience</li>
                <li>• Quiet environment: For meditation tours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Pro Tips:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Download tours for offline viewing in remote areas</li>
                <li>• Use meditation tours for daily mindfulness practice</li>
                <li>• Festival tours are best experienced with surround sound</li>
                <li>• Interior tours work great on mobile devices</li>
                <li>• Join live tours during actual monastery events</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VirtualTours;