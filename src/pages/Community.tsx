import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  ArrowLeft, 
  Heart, 
  Star, 
  MessageSquare, 
  Camera,
  MapPin,
  Calendar,
  Award,
  Plus,
  Share2,
  BookOpen,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "2,847", icon: Users },
    { label: "Cultural Guides", value: "156", icon: Award },
    { label: "Shared Stories", value: "1,234", icon: BookOpen },
    { label: "Photo Contributions", value: "5,678", icon: Camera }
  ];

  const featuredMembers = [
    {
      id: 1,
      name: "Lama Tenzin Norbu",
      role: "Senior Monk & Cultural Guide",
      monastery: "Rumtek Monastery",
      contributions: 45,
      rating: 4.9,
      specialties: ["Buddhist Philosophy", "Meditation Teaching", "Monastery History"],
      bio: "35 years of monastic life dedicated to preserving and sharing Tibetan Buddhist culture.",
      joinedDate: "2020"
    },
    {
      id: 2,
      name: "Maya Sherpa",
      role: "Homestay Host & Cultural Ambassador",
      location: "Pelling, Sikkim",
      contributions: 28,
      rating: 4.8,
      specialties: ["Traditional Cooking", "Local Crafts", "Family Hospitality"],
      bio: "Third-generation homestay host passionate about sharing authentic Sikkimese culture.",
      joinedDate: "2021"
    },
    {
      id: 3,
      name: "Dr. Karma Bhutia",
      role: "Cultural Researcher & Archive Volunteer",
      location: "Gangtok, Sikkim",
      contributions: 67,
      rating: 5.0,
      specialties: ["Digital Archives", "Manuscript Translation", "Historical Research"],
      bio: "PhD in Tibetan Studies, helping digitize precious monastery manuscripts.",
      joinedDate: "2019"
    }
  ];

  const recentStories = [
    {
      id: 1,
      title: "My First Meditation Retreat at Enchey Monastery",
      author: "Sarah Chen",
      date: "2 days ago",
      likes: 24,
      comments: 8,
      preview: "The morning mist was just lifting as I walked through the monastery gates for my first silent retreat...",
      tags: ["Meditation", "Personal Journey", "Enchey Monastery"]
    },
    {
      id: 2,
      title: "Traditional Losar Celebrations: A Family Tradition",
      author: "Pemba Sherpa",
      date: "1 week ago", 
      likes: 56,
      comments: 15,
      preview: "For three generations, our family has maintained the same Losar traditions. This year, my daughter...",
      tags: ["Losar", "Family Traditions", "Cultural Heritage"]
    },
    {
      id: 3,
      title: "Preserving Ancient Manuscripts: A Digital Journey",
      author: "Dr. Karma Bhutia",
      date: "2 weeks ago",
      likes: 89,
      comments: 23,
      preview: "Each manuscript tells a story not just of ancient wisdom, but of the hands that preserved it...",
      tags: ["Digital Archives", "Manuscripts", "Preservation"]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Photography Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Rumtek Monastery",
      attendees: 23,
      maxAttendees: 30,
      description: "Learn monastery photography techniques and cultural sensitivity guidelines."
    },
    {
      id: 2,
      title: "Storytelling Evening: Monastery Legends",
      date: "March 22, 2024",
      time: "7:00 PM - 9:00 PM", 
      location: "Online Event",
      attendees: 67,
      maxAttendees: 100,
      description: "Elder monks share ancient legends and stories passed down through generations."
    },
    {
      id: 3,
      title: "Traditional Craft Making Session",
      date: "March 29, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Pemayangtse Monastery",
      attendees: 15,
      maxAttendees: 20,
      description: "Hands-on workshop creating prayer flags and traditional crafts with local artisans."
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Join our vibrant community of monks, guides, travelers, and culture enthusiasts 
            working together to preserve and share Sikkim's monastery heritage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-elevation transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="members" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="members">Featured Members</TabsTrigger>
            <TabsTrigger value="stories">Community Stories</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="contribute">Contribute</TabsTrigger>
          </TabsList>

          {/* Featured Members Tab */}
          <TabsContent value="members" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Community Members</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate individuals who make our community vibrant and authentic.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-elevation transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xl font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </CardTitle>
                        <p className="text-sm text-monastery-saffron font-semibold">{member.role}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold">{member.rating}</span>
                          <span className="text-xs text-muted-foreground ml-2">
                            {member.contributions} contributions
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {member.monastery || member.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        Member since {member.joinedDate}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-hero">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Community Stories Tab */}
          <TabsContent value="stories" className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Community Stories</h2>
                <p className="text-muted-foreground">
                  Real experiences and insights shared by our community members.
                </p>
              </div>
              <Button className="bg-gradient-hero">
                <Plus className="h-4 w-4 mr-2" />
                Share Your Story
              </Button>
            </div>

            <div className="space-y-6">
              {recentStories.map((story) => (
                <Card key={story.id} className="group hover:shadow-elevation transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                          {story.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>By {story.author}</span>
                          <span className="mx-2">•</span>
                          <span>{story.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {story.preview}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {story.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {story.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {story.comments}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Community Events</h2>
                <p className="text-muted-foreground">
                  Join us for workshops, cultural sessions, and community gatherings.
                </p>
              </div>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-elevation transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">{event.attendees}</span>
                        <span className="text-muted-foreground">/{event.maxAttendees} attending</span>
                      </div>
                      <Badge variant={event.attendees < event.maxAttendees ? "default" : "secondary"}>
                        {event.attendees < event.maxAttendees ? "Available" : "Full"}
                      </Badge>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-hero"
                      disabled={event.attendees >= event.maxAttendees}
                    >
                      {event.attendees < event.maxAttendees ? "Join Event" : "Waitlist"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contribute Tab */}
          <TabsContent value="contribute" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contribute to Our Community</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Help us grow and preserve monastery culture by sharing your knowledge, 
                experiences, and cultural insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contribution Options */}
              <Card className="hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <CardTitle>Ways to Contribute</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Camera className="h-5 w-5 text-monastery-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Share Photos & Videos</h4>
                      <p className="text-sm text-muted-foreground">
                        Contribute respectful photography from your monastery visits.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-monastery-red mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Write Stories & Reviews</h4>
                      <p className="text-sm text-muted-foreground">
                        Share your experiences and cultural insights with the community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-monastery-saffron mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Become a Guide</h4>
                      <p className="text-sm text-muted-foreground">
                        Join our network of cultural guides and share your expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-monastery-stone mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cultural Preservation</h4>
                      <p className="text-sm text-muted-foreground">
                        Help digitize manuscripts and preserve cultural artifacts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contribution Form */}
              <Card className="hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <CardTitle>Quick Contribution</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Share something with our community right now.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Contribution Type</label>
                    <select className="w-full mt-1 border border-border rounded-md px-3 py-2">
                      <option>Photo/Video</option>
                      <option>Story/Experience</option>
                      <option>Cultural Insight</option>
                      <option>Translation Help</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground">Title</label>
                    <Input placeholder="Give your contribution a title..." className="mt-1" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground">Description</label>
                    <Textarea 
                      placeholder="Describe your contribution and its cultural significance..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Submit Contribution
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;