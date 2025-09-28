
import React from 'react';
import { ArrowLeft, Award, FileText, Calendar, Users, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ScholarshipInfo = () => {
  const navigate = useNavigate();

  const scholarshipPrograms = [
    {
      name: 'JLSS (Junior Level Science Scholarship)',
      description: 'Merit-based scholarship for students pursuing science and technology courses',
      benefits: ['Full tuition fee', 'Monthly allowance', 'Book allowance', 'Thesis allowance'],
      requirements: ['Science/Technology course', 'GPA of 2.5 or higher', 'Filipino citizen'],
      duration: '4 years'
    },
    {
      name: 'RA 7687 (Science and Technology Scholarship)',
      description: 'Scholarship program under Republic Act 7687 for science and technology students',
      benefits: ['Tuition assistance', 'Living allowance', 'Laboratory fees', 'Research support'],
      requirements: ['STEM program', 'Academic excellence', 'Community service'],
      duration: '4-5 years'
    },
    {
      name: 'Merit Scholarship',
      description: 'Achievement-based scholarship for outstanding academic performance',
      benefits: ['Partial tuition support', 'Academic recognition', 'Mentorship program'],
      requirements: ['Outstanding GPA', 'Leadership qualities', 'Research potential'],
      duration: '2-4 years'
    }
  ];

  const importantDates = [
    { event: 'Application Period', date: 'March 1 - May 31, 2025' },
    { event: 'Examination Date', date: 'June 15, 2025' },
    { event: 'Interview Period', date: 'July 1-15, 2025' },
    { event: 'Results Release', date: 'August 1, 2025' },
    { event: 'Scholarship Start', date: 'August 15, 2025' }
  ];

  const contactInfo = {
    office: 'DOST Region III Scholarship Office',
    address: 'DOST Compound, Maimpis, City of San Fernando, Pampanga',
    phone: '+63 (045) 963-4362',
    email: 'scholarship.r3@dost.gov.ph',
    hours: 'Monday - Friday, 8:00 AM - 5:00 PM'
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
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold text-white">Government Scholarship Information</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Overview */}
            <Card className="bg-slate-800/90 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  DOST Region III Scholarship Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  The Department of Science and Technology (DOST) Region III offers various scholarship programs 
                  to support students pursuing science, technology, engineering, and mathematics (STEM) education. 
                  These programs aim to develop human resources in science and technology to support national development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-white font-medium">Active Scholars</h4>
                    <p className="text-blue-400 text-2xl font-bold">1,247</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-white font-medium">Partner Universities</h4>
                    <p className="text-green-400 text-2xl font-bold">23</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-white font-medium">Success Rate</h4>
                    <p className="text-yellow-400 text-2xl font-bold">94%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scholarship Programs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {scholarshipPrograms.map((program, index) => (
                <Card key={index} className="bg-slate-800/90 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 text-sm">{program.description}</p>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2">Benefits:</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">Requirements:</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        {program.requirements.map((req, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-700/50 p-3 rounded-lg">
                      <span className="text-slate-400 text-sm">Duration: </span>
                      <span className="text-white font-medium">{program.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Dates */}
            <Card className="bg-slate-800/90 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="text-white font-medium">{item.event}</h4>
                      <p className="text-blue-400">{item.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/90 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-green-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-white font-medium">{contactInfo.office}</p>
                        <p className="text-slate-400 text-sm">{contactInfo.hours}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-slate-300 text-sm">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-slate-300 text-sm">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-slate-300 text-sm">{contactInfo.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipInfo;
