import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Home, Palette, Headphones, Heart, Star } from "lucide-react";

export const CommunitySection = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Local Guides",
      description: "Connect with knowledgeable monastery guides who share authentic stories and cultural insights from their lived experiences.",
      stats: "50+ Certified Guides"
    },
    {
      icon: Palette,
      title: "Traditional Handicrafts",
      description: "Support local artisans by purchasing authentic monastery crafts, prayer wheels, and traditional Buddhist art pieces.",
      stats: "100+ Authentic Items"
    },
    {
      icon: Home,
      title: "Monastery Homestays",
      description: "Experience monastic life firsthand with overnight stays in monastery guest houses and nearby traditional homes.",
      stats: "15+ Partner Locations"
    },
    {
      icon: Headphones,
      title: "Audio Guides",
      description: "Listen to guided tours narrated by senior monks and cultural experts in multiple languages including English, Hindi, and Nepali.",
      stats: "Voice in 5 Languages"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Cultural Researcher",
      content: "Monastery360 opened my eyes to the depth of Buddhist culture in Sikkim. The local guides made all the difference.",
      rating: 5
    },
    {
      name: "Rajesh Tamang",
      role: "Local Guide",
      content: "Being part of this platform allows me to share my heritage with visitors from around the world. It's deeply fulfilling.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community-Driven Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform thrives on authentic connections between visitors and local communities, 
            ensuring sustainable tourism that benefits everyone.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elevation transition-all duration-500 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center bg-monastery-stone/50 rounded-full px-3 py-1">
                  <Heart className="h-4 w-4 mr-1 text-monastery-red" />
                  <span className="text-sm font-semibold text-monastery-earth">{feature.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Community Says
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-custom transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-monastery-gold text-monastery-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-card border-monastery-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Whether you're a local guide, artisan, or cultural enthusiast, 
                become part of preserving and sharing Sikkim's monastery heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="bg-gradient-hero">
                  Become a Guide
                </Button>
                <Button variant="outline">
                  List Your Homestay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};