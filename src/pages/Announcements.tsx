
import React from 'react';
import { Bell, ArrowLeft, Calendar, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Announcements = () => {
  const navigate = useNavigate();

  const detailedAnnouncements = [
    {
      title: 'New Requirements Portal Update',
      date: 'January 10, 2025',
      time: '2:00 PM',
      priority: 'High',
      category: 'System Update',
      content: 'The requirements submission portal has been updated with new features including bulk upload, progress tracking, and automatic deadline reminders. All scholars are encouraged to familiarize themselves with the new interface.',
      details: [
        'Enhanced file upload system with drag-and-drop functionality',
        'Real-time progress tracking for all requirements',
        'Automated email reminders before deadlines',
        'Improved mobile responsiveness',
        'New document verification system'
      ],
      author: 'DOST-SEI IT Department',
      expires: 'February 10, 2025'
    },
    {
      title: 'Scholarship Renewal Process 2025',
      date: 'January 8, 2025',
      time: '10:00 AM',
      priority: 'Medium',
      category: 'Academic',
      content: 'Important information regarding the scholarship renewal process for continuing scholars. Please review the updated requirements and deadlines carefully.',
      details: [
        'Renewal applications must be submitted by March 15, 2025',
        'Updated GPA requirements: minimum of 1.75 for JLSS, 2.0 for RA 7687',
        'Additional community service requirement: 40 hours minimum',
        'New interview process for Merit Scholarship recipients',
        'Updated financial declaration forms required'
      ],
      author: 'DOST-SEI Scholarship Division',
      expires: 'March 15, 2025'
    },
    {
      title: 'SENTRONIZED General Assembly 2025',
      date: 'January 5, 2025',
      time: '9:00 AM',
      priority: 'High',
      category: 'Event',
      content: 'Save the date! The annual SENTRONIZED General Assembly will be held on July 21, 2025. Registration details and agenda will be announced soon.',
      details: [
        'Date: July 21, 2025 at 2:00 PM',
        'Venue: DOST Region III Auditorium',
        'Expected participants: All active DOST scholars',
        'Agenda includes scholarship updates and recognition ceremonies',
        'Registration opens February 1, 2025',
        'Free transportation will be provided from selected pickup points'
      ],
      author: 'SENTRONIZED Organizing Committee',
      expires: 'July 21, 2025'
    },
    {
      title: 'Community Outreach Program Registration',
      date: 'January 3, 2025',
      time: '4:30 PM',
      priority: 'Low',
      category: 'Outreach',
      content: 'Join our upcoming community outreach programs scheduled for March 2025. Help bring science education to underserved communities in Region III.',
      details: [
        'Multiple programs available throughout March 2025',
        'Various locations across Region III',
        'Educational science demonstrations for elementary students',
        'Certificate of participation provided',
        'Transportation and meals included',
        'Counts towards community service requirements'
      ],
      author: 'DOST Community Relations Office',
      expires: 'March 1, 2025'
    },
    {
      title: 'Research Symposium Call for Papers',
      date: 'December 28, 2024',
      time: '11:15 AM',
      priority: 'Medium',
      category: 'Academic',
      content: 'Submit your research abstracts for the upcoming Research Symposium. Showcase your work and compete for the Outstanding Research Award.',
      details: [
        'Abstract submission deadline: February 15, 2025',
        'Full paper submission: March 1, 2025',
        'Symposium date: March 25, 2025',
        'Categories: Engineering, Natural Sciences, Agriculture, Health Sciences',
        'Cash prizes for outstanding research presentations',
        'Publication opportunities in DOST research journal'
      ],
      author: 'DOST Research and Development Office',
      expires: 'March 1, 2025'
    },
    {
      title: 'Grade Submission Deadline Reminder',
      date: 'December 20, 2024',
      time: '8:00 AM',
      priority: 'High',
      category: 'Administrative',
      content: 'Final reminder: All grade submissions and requirements must be completed by January 31, 2025. Late submissions will not be accepted.',
      details: [
        'Deadline: January 31, 2025 at 11:59 PM',
        'No extensions will be granted under any circumstances',
        'Portal will automatically close after the deadline',
        'Incomplete submissions may affect scholarship status',
        'Contact support for technical issues before the deadline',
        'Backup copies of all documents recommended'
      ],
      author: 'DOST-SEI Academic Affairs',
      expires: 'January 31, 2025'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-400 border-red-500';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'Low':
        return 'bg-green-500/20 text-green-400 border-green-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'System Update':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'Academic':
        return 'bg-purple-500/20 text-purple-400 border-purple-500';
      case 'Event':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500';
      case 'Outreach':
        return 'bg-pink-500/20 text-pink-400 border-pink-500';
      case 'Administrative':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <AlertTriangle className="w-4 h-4" />;
      case 'Medium':
        return <Info className="w-4 h-4" />;
      case 'Low':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
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
              <h1 className="text-2xl font-bold text-white">Announcements</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {detailedAnnouncements.map((announcement, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2 flex items-center">
                        {getPriorityIcon(announcement.priority)}
                        <span className="ml-2">{announcement.title}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{announcement.date} at {announcement.time}</span>
                        <span>•</span>
                        <span>by {announcement.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Badge className={getPriorityColor(announcement.priority)}>
                        {announcement.priority}
                      </Badge>
                      <Badge className={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{announcement.content}</p>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3">Key Details:</h4>
                    <ul className="space-y-2">
                      {announcement.details.map((detail, idx) => (
                        <li key={idx} className="text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></span>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="text-slate-400 text-sm">
                      Expires: {announcement.expires}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        Mark as Read
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
