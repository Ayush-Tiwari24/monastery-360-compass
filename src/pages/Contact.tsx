import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  HelpCircle,
  Calendar,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      details: "info@monastery360.com",
      description: "Get detailed responses within 24 hours",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91 3592 123 456",
      description: "Speak with our cultural experts",
      available: "9 AM - 6 PM IST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available on website",
      description: "Instant help from our support team",
      available: "10 AM - 8 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Gangtok, Sikkim, India",
      description: "Meet our team at our cultural center",
      available: "Mon-Sat, 10 AM - 5 PM"
    }
  ];

  const officeLocations = [
    {
      name: "Main Office - Gangtok",
      address: "Near Rumtek Monastery Road, Gangtok, Sikkim 737135",
      phone: "+91 3592 123 456",
      email: "gangtok@monastery360.com",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
    },
    {
      name: "Regional Office - Pelling",
      address: "Upper Pelling, Near Pemayangtse Monastery, West Sikkim 737113",
      phone: "+91 3595 987 654",
      email: "pelling@monastery360.com", 
      hours: "Tuesday - Sunday: 10:00 AM - 5:00 PM"
    }
  ];

  const faqCategories = [
    {
      icon: Calendar,
      title: "Booking & Reservations",
      description: "Questions about homestays, guides, and tour bookings",
      email: "bookings@monastery360.com"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Help with community features and member connections",
      email: "community@monastery360.com"
    },
    {
      icon: HelpCircle,
      title: "Technical Issues",
      description: "Problems with virtual tours or app functionality",
      email: "tech@monastery360.com"
    }
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            We're here to help you explore monastery culture and connect with our community. 
            Reach out with questions, suggestions, or to share your experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-elevation transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-monastery-red mb-2">{method.details}</div>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {method.available}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="hover:shadow-elevation transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Email *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">Inquiry Type</label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-border rounded-md px-3 py-2"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking & Reservations</option>
                    <option value="technical">Technical Support</option>
                    <option value="community">Community & Guides</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">Subject *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-hero">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Locations & FAQ Categories */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="border-l-4 border-l-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">{office.name}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Need Quick Help?</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Contact our specialized teams directly for faster assistance.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqCategories.map((category, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                      <a 
                        href={`mailto:${category.email}`}
                        className="text-xs text-monastery-red hover:text-monastery-red/80 flex items-center"
                      >
                        {category.email}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-card border-monastery-red/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Emergency or Urgent Assistance
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're currently traveling and need immediate help with monastery visits, 
              accommodation, or cultural guidance, contact our 24/7 emergency support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-monastery-red font-semibold">
                <Phone className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div className="flex items-center space-x-2 text-monastery-red font-semibold">
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Available</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;