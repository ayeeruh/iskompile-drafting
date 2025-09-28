
import React, { useState, useEffect } from 'react';
import { Calendar, Upload, Users, FileText, Bell, User, Settings, HelpCircle, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [requirements, setRequirements] = useState({ enrollment: 75, grades: 70 });
  const [gpa] = useState(1.25);
  
  const deadlineDate = new Date('2025-01-31');
  const isDeadlinePassed = currentDate > deadlineDate;
  const daysToDeadline = Math.max(0, Math.ceil((deadlineDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)));

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate dynamic requirements progress
  useEffect(() => {
    const timer = setInterval(() => {
      setRequirements(prev => ({
        enrollment: Math.min(100, prev.enrollment + Math.random() * 2),
        grades: Math.min(100, prev.grades + Math.random() * 1.5)
      }));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scholarshipInfo = [
    { title: 'DOST Scholarship Application 2025', type: 'Open', deadline: 'March 15, 2025', status: 'active' },
    { title: 'RA 7687 Scholarship Renewal', type: 'Ongoing', deadline: 'February 28, 2025', status: 'urgent' },
    { title: 'Merit Scholarship Guidelines', type: 'Updated', deadline: 'N/A', status: 'new' },
  ];

  const donationPrograms = [
    { 
      org: 'DOST Scholars Association', 
      program: 'Science Fair for Kids', 
      target: 50000, 
      raised: 32000,
      supporters: 45,
      trending: true 
    },
    { 
      org: 'JLSS Alumni', 
      program: 'STEM Equipment Drive', 
      target: 75000, 
      raised: 45000,
      supporters: 32,
      trending: false 
    },
    { 
      org: 'Merit Scholars Group', 
      program: 'Community Science Workshop', 
      target: 30000, 
      raised: 28000,
      supporters: 28,
      trending: true 
    },
  ];

  const upcomingEvents = [
    { event: 'SENTRONIZED: General Assembly', date: 'July 21, 2025', time: '2:00 PM', priority: 'high' },
    { event: 'Research Symposium', date: 'January 25, 2025', time: '9:00 AM', priority: 'medium' },
    { event: 'Grade Submission Deadline', date: 'January 31, 2025', time: '11:59 PM', priority: 'urgent' },
  ];

  const announcements = [
    { title: 'New Requirements Portal Update', date: 'January 10, 2025', priority: 'High', unread: true },
    { title: 'Scholarship Renewal Process', date: 'January 8, 2025', priority: 'Medium', unread: false },
    { title: 'Community Outreach Program', date: 'January 5, 2025', priority: 'Low', unread: true },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300 border-green-500';
      case 'urgent': return 'bg-red-500/20 text-red-300 border-red-500';
      case 'new': return 'bg-blue-500/20 text-blue-300 border-blue-500';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent') return <AlertTriangle className="w-4 h-4 text-red-400" />;
    if (priority === 'high') return <Clock className="w-4 h-4 text-orange-400" />;
    return <Bell className="w-4 h-4 text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Dynamic Science Background with Animation */}
      <div 
        className="absolute inset-0 opacity-12 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')`,
          transform: `translateX(${Math.sin(Date.now() / 10000) * 10}px)`
        }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-8 bg-cover bg-center bg-no-repeat mix-blend-overlay transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop')`,
          transform: `translateX(${Math.cos(Date.now() / 8000) * 15}px)`
        }}
      ></div>

      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header with Real-time Clock */}
        <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/d19e0981-72e3-4146-8cb4-aa1284df4476.png" 
                  alt="DOST Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-2xl font-bold text-white">DOST Region III Scholars Portal</h1>
                  <p className="text-blue-300 text-sm italic">Track smart and monitor easily.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-white text-sm font-medium">
                    {currentDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-blue-300 text-xs">
                    {currentDate.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit', 
                      second: '2-digit' 
                    })}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-slate-700"
                  onClick={() => navigate('/profile')}
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Dynamic Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-slate-800/90 border-slate-700 hover:bg-slate-800/95 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 text-sm">Current GPA</p>
                        <p className="text-2xl font-bold text-white animate-pulse">{gpa}</p>
                      </div>
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <FileText className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/90 border-slate-700 hover:bg-slate-800/95 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 text-sm">Requirements Progress</p>
                        <p className="text-2xl font-bold text-white">{Math.round((requirements.enrollment + requirements.grades) / 2)}%</p>
                      </div>
                      <div className="bg-blue-500/20 p-3 rounded-full">
                        <Upload className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/90 border-slate-700 hover:bg-slate-800/95 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 text-sm">Days to Deadline</p>
                        <p className={`text-2xl font-bold ${daysToDeadline <= 7 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                          {daysToDeadline}
                        </p>
                      </div>
                      <div className="bg-red-500/20 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Government Scholarship Information Board */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-400" />
                    Government Scholarship Information Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scholarshipInfo.map((info, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300 cursor-pointer">
                        <div>
                          <h3 className="text-white font-medium">{info.title}</h3>
                          <p className="text-slate-300 text-sm">Deadline: {info.deadline}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(info.status)}>
                            {info.type}
                          </Badge>
                          {info.status === 'new' && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Grade System Portal */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Upload className="w-5 h-5 mr-2 text-green-400" />
                    Grade System Portal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isDeadlinePassed && (
                    <div className="mb-4 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center animate-pulse">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                      <p className="text-red-300">Warning: Submission deadline has passed. Portal is now closed.</p>
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="bg-slate-700/50 border-2 border-dashed border-slate-600 rounded-lg p-8 hover:border-blue-500 transition-all duration-300">
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-300 mb-2">Upload your scanned grades here</p>
                        <p className="text-slate-500 text-sm mb-4">Accepted formats: PDF, JPG, PNG (Max 10MB)</p>
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                          disabled={isDeadlinePassed}
                          onClick={() => navigate('/requirements')}
                        >
                          Upload Grades
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dynamic Submission of Requirements */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-400" />
                    Scholarship Requirements Submission
                    <Badge className="ml-2 bg-red-500/20 text-red-300 border-red-500 animate-pulse">
                      Deadline: Jan 31, 2025
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
                        <h4 className="text-white font-medium mb-2">Certificate of Enrollment</h4>
                        <p className="text-slate-300 text-sm mb-3">Per-semester enrollment certificate</p>
                        <Progress value={requirements.enrollment} className="mb-2" />
                        <p className="text-slate-400 text-xs">
                          {Math.round(requirements.enrollment * 8 / 100)}/8 semesters submitted
                        </p>
                      </div>
                      <div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
                        <h4 className="text-white font-medium mb-2">Reports of Grade</h4>
                        <p className="text-slate-300 text-sm mb-3">Per-semester grade reports</p>
                        <Progress value={requirements.grades} className="mb-2" />
                        <p className="text-slate-400 text-xs">
                          {Math.round(requirements.grades * 8 / 100)}/8 semesters submitted
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button 
                        className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
                        disabled={isDeadlinePassed}
                        onClick={() => navigate('/requirements')}
                      >
                        Submit Requirements
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-sm">
                        Overall 4-year progress: {Math.round((requirements.enrollment + requirements.grades) / 2)}% complete
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Donation Space */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-yellow-400" />
                    Donation Space - Outreach Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donationPrograms.map((program, index) => (
                      <div key={index} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-medium">{program.program}</h4>
                            {program.trending && (
                              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500 text-xs">
                                Trending
                              </Badge>
                            )}
                          </div>
                          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white transition-all duration-300">
                            Donate
                          </Button>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{program.org}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">
                              Raised: ₱{program.raised.toLocaleString()} • {program.supporters} supporters
                            </span>
                            <span className="text-slate-400">Target: ₱{program.target.toLocaleString()}</span>
                          </div>
                          <Progress value={(program.raised / program.target) * 100} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Dynamic Calendar */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                    Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300">
                      <p className="text-2xl font-bold text-white">{currentDate.getDate()}</p>
                      <p className="text-slate-300">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                      <p className="text-slate-400 text-sm mt-2">
                        {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Upcoming Events */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-400" />
                      Upcoming Events
                    </CardTitle>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300"
                      onClick={() => navigate('/events')}
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{event.event}</h4>
                            <p className="text-slate-300 text-xs">{event.date}</p>
                            <p className="text-slate-400 text-xs">{event.time}</p>
                          </div>
                          {getPriorityIcon(event.priority)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Announcements */}
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      <Bell className="w-5 h-5 mr-2 text-red-400" />
                      Announcements
                      <Badge className="ml-2 bg-red-500/20 text-red-300 border-red-500 text-xs">
                        {announcements.filter(a => a.unread).length} new
                      </Badge>
                    </CardTitle>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300"
                      onClick={() => navigate('/announcements')}
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-medium text-sm">{announcement.title}</h4>
                            {announcement.unread && (
                              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <Badge 
                            variant={announcement.priority === 'High' ? 'destructive' : announcement.priority === 'Medium' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {announcement.priority}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-xs">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Creator Info with Animation */}
      <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-sm">IK</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">Iskompile</p>
            <p className="text-slate-400 text-xs">System Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
