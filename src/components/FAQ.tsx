import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, MapPin, Wifi, Calendar, Camera, Users } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      id: "permits",
      icon: MapPin,
      question: "Do I need special permits to visit monasteries in Sikkim?",
      answer: "For virtual tours, no permits are required! For physical visits, Indian citizens don't need permits for most monasteries. Foreign nationals need an Inner Line Permit (ILP) which can be obtained online or at entry points. Some remote monasteries may require additional permits."
    },
    {
      id: "accessibility",
      icon: Users,
      question: "Are the monastery tours accessible for people with disabilities?",
      answer: "Our virtual 360° tours are fully accessible and can be experienced with screen readers and other assistive technologies. Physical monastery visits vary in accessibility - we provide detailed accessibility information for each location, including wheelchair access and mobility assistance options."
    },
    {
      id: "festivals",
      icon: Calendar,
      question: "When are the best times to experience monastery festivals?",
      answer: "Major festivals like Losar (February), Saga Dawa (May), and various Cham dance festivals occur throughout the year. Our interactive calendar shows exact dates, as they're based on the Tibetan lunar calendar. Virtual festival experiences are available year-round with recorded ceremonies and live streams during events."
    },
    {
      id: "internet",
      icon: Wifi,
      question: "Can I access tours without internet connection?",
      answer: "Yes! Our offline mode allows you to download complete 360° tours, audio guides, and cultural content before your trip. Each download package includes high-resolution imagery, multilingual audio, and detailed monastery information that works without internet connectivity."
    },
    {
      id: "photography",
      icon: Camera,
      question: "Are photography and recordings allowed inside monasteries?",
      answer: "Photography rules vary by monastery. Most allow exterior photography, but interior photography may be restricted, especially in prayer halls with sacred artifacts. Our virtual tours capture these restricted areas legally, letting you experience spaces that may not be photographable during visits."
    },
    {
      id: "cultural-etiquette",
      icon: HelpCircle,
      question: "What cultural etiquette should I follow during monastery visits?",
      answer: "Remove shoes before entering prayer halls, dress modestly covering shoulders and legs, maintain silence in meditation areas, don't point feet toward Buddha statues, and follow clockwise movement around stupas. Our cultural guide section provides detailed etiquette information for respectful visits."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about exploring Sikkim's monasteries, 
            whether virtually or in person.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <HelpCircle className="mr-3 h-6 w-6 text-monastery-red" />
              Common Tourist Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-border">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 py-6">
                    <div className="flex items-center">
                      <faq.icon className="mr-3 h-5 w-5 text-monastery-gold flex-shrink-0" />
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-card border-monastery-stone">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our cultural experts are here to help you plan the perfect monastery experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-hero text-primary-foreground rounded-md hover:shadow-monastery transition-all duration-300 font-semibold"
                >
                  Contact Support
                </a>
                <a 
                  href="#community" 
                  className="inline-flex items-center justify-center px-6 py-2 border border-border text-foreground rounded-md hover:bg-muted transition-all duration-300"
                >
                  Join Community
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};