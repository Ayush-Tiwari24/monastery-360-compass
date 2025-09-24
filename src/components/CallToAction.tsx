import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Download, Bell, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about new monasteries, festivals, and tours.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Start Your Virtual Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover the spiritual essence of Sikkim's monasteries from anywhere in the world. 
            Begin your immersive cultural adventure today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-monastery-red hover:bg-white/90 text-lg px-8 py-4 shadow-elevation group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Begin 360° Experience
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-primary-foreground hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Offline Tours
            </Button>
          </div>
        </div>

        {/* Subscription Section */}
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-elevation">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <Bell className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6">
              Get updates on new monasteries, upcoming festivals, and exclusive virtual tours. 
              Join our community of cultural explorers.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-gradient-hero hover:shadow-monastery transition-all duration-300">
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              * We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-2">Immersive 360° Tours</h4>
            <p className="text-primary-foreground/80 text-sm">
              Experience monasteries as if you're walking through them
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-2">Offline Access</h4>
            <p className="text-primary-foreground/80 text-sm">
              Download tours for remote locations without internet
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-2">Cultural Updates</h4>
            <p className="text-primary-foreground/80 text-sm">
              Stay informed about festivals and community events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};