
import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  const detailedEvents = [
    {
      title: 'SENTRONIZED: General Assembly',
      date: 'July 21, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'DOST Region III Auditorium',
      description: 'Annual general assembly for all DOST scholars. This event will cover scholarship updates, networking opportunities, and recognition ceremonies.',
      attendees: 250,
      status: 'upcoming',
      type: 'Assembly',
      highlights: ['Scholarship Updates', 'Award Ceremony', 'Networking Session', 'Guest Speakers']
    },
    {
      title: 'Research Symposium 2025',
      date: 'January 25, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'University of the Philippines Los Baños',
      description: 'Showcase of outstanding research projects by DOST scholars. Oral and poster presentations will be featured.',
      attendees: 180,
      status: 'upcoming',
      type: 'Academic',
      highlights: ['Research Presentations', 'Poster Sessions', 'Panel Discussions', 'Awards Night']
    },
    {
      title: 'Grade Submission Deadline',
      date: 'January 31, 2025',
      time: '11:59 PM',
      location: 'Online Portal',
      description: 'Final deadline for submitting semester grades and requirements. No extensions will be granted.',
      attendees: 0,
      status: 'deadline',
      type: 'Administrative',
      highlights: ['Final Submission', 'No Extensions', 'Portal Closure']
    },
    {
      title: 'STEM Career Fair',
      date: 'February 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'World Trade Center Manila',
      description: 'Career opportunities for graduating scholars and alumni. Meet with top companies in science and technology.',
      attendees: 300,
      status: 'upcoming',
      type: 'Career',
      highlights: ['Job Interviews', 'Company Booths', 'Career Counseling', 'Resume Reviews']
    },
    {
      title: 'Science Innovation Workshop',
      date: 'March 8, 2025',
      time: '1:00 PM - 5:00 PM',
      location: 'DOST-SEI Building, Taguig',
      description: 'Hands-on workshop on emerging technologies and innovation in science. Open to all current scholars.',
      attendees: 120,
      status: 'upcoming',
      type: 'Workshop',
      highlights: ['Emerging Tech', 'Hands-on Activities', 'Innovation Labs', 'Expert Mentors']
    },
    {
      title: 'Community Outreach Program',
      date: 'March 22, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'Various Barangays in Region III',
      description: 'Science education and awareness program for local communities. Scholars will conduct science demonstrations.',
      attendees: 85,
      status: 'upcoming',
      type: 'Outreach',
      highlights: ['Science Demos', 'Community Education', 'Student Volunteers', 'Educational Materials']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'deadline':
        return 'bg-red-500/20 text-red-400 border-red-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Assembly':
        return 'bg-purple-500/20 text-purple-400 border-purple-500';
      case 'Academic':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'Administrative':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'Career':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500';
      case 'Workshop':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'Outreach':
        return 'bg-pink-500/20 text-pink-400 border-pink-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')`
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-slate-700"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold text-white">Upcoming Events</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {detailedEvents.map((event, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-2 text-red-400" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees > 0 && (
                      <div className="flex items-center text-slate-300">
                        <Users className="w-4 h-4 mr-2 text-purple-400" />
                        <span>Expected Attendees: {event.attendees}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Event Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-sm text-slate-300 bg-slate-700/50 rounded px-2 py-1">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {event.status === 'upcoming' && event.attendees > 0 && (
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Register for Event
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
