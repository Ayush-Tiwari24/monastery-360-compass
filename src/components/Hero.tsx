import { Button } from "@/components/ui/button";
import { Play, Globe, MapPin } from "lucide-react";
import heroImage from "@/assets/monastery-hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sikkim Monastery Panoramic View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Experience Monasteries
            <span className="block text-transparent bg-gradient-to-r from-monastery-gold to-monastery-saffron bg-clip-text">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the sacred world of Sikkim's monasteries through cutting-edge 360° virtual tours, 
            cultural insights, and authentic community experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-monastery transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Start 360° Tour
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
            >
              <Globe className="mr-2 h-5 w-5" />
              Explore Map
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">15+ Sacred Sites</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">Virtual Reality Ready</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Play className="h-4 w-4 mr-2" />
              <span className="text-sm">Offline Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};