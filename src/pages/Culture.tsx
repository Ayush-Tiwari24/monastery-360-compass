import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, 
  ArrowLeft, 
  Palette, 
  Music, 
  Crown, 
  Scroll, 
  Search,
  Download,
  Eye,
  Calendar,
  Users,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Culture = () => {
  const culturalAspects = [
    {
      id: "architecture",
      title: "Monastery Architecture",
      description: "Explore the unique architectural elements that make Sikkimese monasteries distinctive.",
      items: [
        {
          name: "Traditional Tibetan Style",
          description: "Multi-story structures with distinctive red walls and golden roofs",
          significance: "Represents the marriage of earth and heaven in Buddhist cosmology",
          examples: ["Rumtek Monastery", "Pemayangtse Monastery"]
        },
        {
          name: "Prayer Wheels",
          description: "Cylindrical wheels inscribed with mantras that devotees spin",
          significance: "Each rotation is believed to accumulate merit and spread blessings",
          examples: ["Large wheels at Enchey", "Wall-mounted wheels at Tashiding"]
        },
        {
          name: "Stupas & Chortens",
          description: "Sacred dome-shaped structures containing relics or ashes",
          significance: "Represent Buddha's enlightened mind and serve as focal points for meditation",
          examples: ["Dodul Chorten", "Memorial Stupas"]
        }
      ]
    },
    {
      id: "rituals",
      title: "Sacred Rituals & Practices",
      description: "Understand the spiritual practices that form the heart of monastery life.",
      items: [
        {
          name: "Daily Prayer Sessions",
          description: "Morning and evening prayers with chanting and meditation",
          significance: "Maintain spiritual discipline and community connection",
          examples: ["4 AM morning prayers", "Evening lamp lighting ceremonies"]
        },
        {
          name: "Cham Dance Rituals",
          description: "Sacred masked dances performed during festivals",
          significance: "Transform negative energies and bring blessings to the community",
          examples: ["Hemis Festival dances", "Losar celebrations"]
        },
        {
          name: "Butter Lamp Offerings",
          description: "Lighting hundreds of yak butter lamps as offerings",
          significance: "Symbolize wisdom dispelling ignorance and generate merit",
          examples: ["Diwali celebrations", "Daily temple offerings"]
        }
      ]
    },
    {
      id: "arts",
      title: "Traditional Arts & Crafts",
      description: "Discover the artistic heritage preserved within monastery walls.",
      items: [
        {
          name: "Thangka Paintings",
          description: "Sacred scroll paintings depicting deities and mandalas",
          significance: "Teaching tools and meditation aids for spiritual practice",
          examples: ["Ancient collections", "Modern monastery commissions"]
        },
        {
          name: "Wood Carving",
          description: "Intricate carved doorways, pillars, and decorative elements",
          significance: "Transform ordinary spaces into sacred environments",
          examples: ["Rumtek's carved pillars", "Traditional window frames"]
        },
        {
          name: "Metalwork",
          description: "Bronze and copper statues, ritual implements, and decorations",
          significance: "Create focal points for worship and meditation",
          examples: ["Buddha statues", "Ritual bells and vajras"]
        }
      ]
    }
  ];

  const manuscripts = [
    {
      id: 1,
      title: "Kangyur Collection",
      period: "15th-17th Century",
      language: "Classical Tibetan",
      description: "Complete collection of Buddha's teachings translated into Tibetan",
      pages: 1200,
      monastery: "Rumtek Monastery",
      digitized: true,
      rarity: "Extremely Rare"
    },
    {
      id: 2,
      title: "Pemayangtse Chronicles",
      period: "18th Century", 
      language: "Tibetan & Lepcha",
      description: "Historical records of monastery founding and early Buddhist establishment",
      pages: 400,
      monastery: "Pemayangtse Monastery", 
      digitized: true,
      rarity: "Rare"
    },
    {
      id: 3,
      title: "Medical Tantras",
      period: "16th Century",
      language: "Classical Tibetan",
      description: "Traditional Tibetan medicine texts with herbal remedies and diagnosis methods",
      pages: 800,
      monastery: "Tashiding Monastery",
      digitized: false,
      rarity: "Unique"
    }
  ];

  const traditions = [
    {
      title: "Losar New Year Customs",
      description: "Three days of elaborate celebrations marking the Tibetan New Year",
      practices: ["House cleaning rituals", "Traditional food preparation", "Family reunions", "Monastery visits"],
      significance: "Renewal of spiritual commitment and community bonds"
    },
    {
      title: "Meditation Practices",
      description: "Various forms of Buddhist meditation taught and practiced in monasteries",
      practices: ["Shamatha (calm abiding)", "Vipassana (insight)", "Walking meditation", "Group sessions"],
      significance: "Development of wisdom, compassion, and inner peace"
    },
    {
      title: "Community Service",
      description: "Monks and laypeople working together for community welfare",
      practices: ["Healthcare services", "Education programs", "Environmental conservation", "Disaster relief"],
      significance: "Embodiment of Buddhist compassion in daily life"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cultural Heritage</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Dive deep into the rich cultural tapestry of Sikkim's monasteries. Explore ancient traditions, 
            sacred arts, and timeless wisdom preserved through generations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="heritage" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="heritage">Cultural Heritage</TabsTrigger>
            <TabsTrigger value="archives">Digital Archives</TabsTrigger>
            <TabsTrigger value="traditions">Living Traditions</TabsTrigger>
            <TabsTrigger value="learning">Learning Center</TabsTrigger>
          </TabsList>

          {/* Cultural Heritage Tab */}
          <TabsContent value="heritage" className="space-y-12">
            {culturalAspects.map((aspect) => (
              <Card key={aspect.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    {aspect.id === "architecture" && <Crown className="mr-3 h-6 w-6 text-monastery-gold" />}
                    {aspect.id === "rituals" && <Heart className="mr-3 h-6 w-6 text-monastery-red" />}
                    {aspect.id === "arts" && <Palette className="mr-3 h-6 w-6 text-monastery-saffron" />}
                    {aspect.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aspect.items.map((item, index) => (
                      <Card key={index} className="border-l-4 border-l-primary">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                          <div className="mb-3">
                            <h5 className="text-sm font-semibold text-foreground mb-1">Significance:</h5>
                            <p className="text-sm text-muted-foreground">{item.significance}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-foreground mb-1">Examples:</h5>
                            <div className="flex flex-wrap gap-1">
                              {item.examples.map((example, exIndex) => (
                                <Badge key={exIndex} variant="secondary" className="text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Digital Archives Tab */}
          <TabsContent value="archives" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sacred Manuscript Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our digitized collection of ancient manuscripts, preserved through cutting-edge 
                technology and community collaboration.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search manuscripts, topics, or monasteries..."
                  className="border border-border rounded-md px-4 py-2 w-80"
                />
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Catalog
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {manuscripts.map((manuscript) => (
                <Card key={manuscript.id} className="group hover:shadow-elevation transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {manuscript.title}
                      </CardTitle>
                      <Badge 
                        variant={manuscript.digitized ? "default" : "secondary"}
                        className={manuscript.digitized ? "bg-green-500" : "bg-yellow-500"}
                      >
                        {manuscript.digitized ? "Digitized" : "Pending"}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Period: {manuscript.period}</div>
                      <div>Language: {manuscript.language}</div>
                      <div>Location: {manuscript.monastery}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{manuscript.description}</p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground">Pages: {manuscript.pages}</span>
                      <Badge variant="outline" className="text-xs">
                        {manuscript.rarity}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {manuscript.digitized ? (
                        <Button className="flex-1 bg-gradient-hero">
                          <Eye className="h-4 w-4 mr-2" />
                          View Digital Copy
                        </Button>
                      ) : (
                        <Button className="flex-1" variant="outline" disabled>
                          <Scroll className="h-4 w-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Living Traditions Tab */}
          <TabsContent value="traditions" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Living Traditions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the continuing traditions that keep monastery culture alive and vibrant in modern times.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {traditions.map((tradition, index) => (
                <Card key={index} className="group hover:shadow-elevation transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {tradition.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tradition.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Key Practices:</h5>
                      <div className="space-y-1">
                        {tradition.practices.map((practice, pIndex) => (
                          <div key={pIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {practice}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-gradient-card rounded-lg">
                      <h5 className="text-sm font-semibold text-foreground mb-1">Cultural Significance:</h5>
                      <p className="text-sm text-muted-foreground">{tradition.significance}</p>
                    </div>

                    <Button className="w-full mt-4 bg-gradient-hero">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learning Center Tab */}
          <TabsContent value="learning" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cultural Learning Center</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Educational resources, courses, and interactive experiences to deepen your understanding 
                of monastery culture and Buddhist traditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course Cards */}
              <Card className="hover:shadow-elevation transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="mr-3 h-6 w-6 text-monastery-gold" />
                    Buddhist Philosophy 101
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Introduction to core Buddhist concepts and their application in monastery life.</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span>Duration: 4 weeks</span>
                    <Badge>Beginner</Badge>
                  </div>
                  <Button className="w-full bg-gradient-hero">Start Course</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elevation transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="mr-3 h-6 w-6 text-monastery-red" />
                    Monastery Music & Chanting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Learn traditional chanting techniques and understand the spiritual power of sound.</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span>Duration: 6 weeks</span>
                    <Badge>Intermediate</Badge>
                  </div>
                  <Button className="w-full bg-gradient-hero">Start Course</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elevation transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-3 h-6 w-6 text-monastery-saffron" />
                    Sacred Art Workshop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Hands-on experience creating traditional Thangka paintings and mandala art.</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span>Duration: 8 weeks</span>
                    <Badge>Advanced</Badge>
                  </div>
                  <Button className="w-full bg-gradient-hero">Start Course</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Culture;