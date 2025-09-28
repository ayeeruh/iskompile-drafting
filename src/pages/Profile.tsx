
import React, { useState } from 'react';
import { User, Camera, Save, ArrowLeft, HelpCircle, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan.delacruz@email.com',
    university: 'Bulacan State University',
    campus: 'Main Campus',
    program: 'Computer Science',
    scholarshipType: 'JLSS',
    yearGranted: '2022',
    studentId: '2022-123456',
    phone: '+63 912 345 6789'
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const faqs = [
    {
      question: "How do I upload my grades?",
      answer: "Go to the Grade System Portal on the dashboard and click 'Upload Grades'. Make sure your files are in PDF, JPG, or PNG format and under 10MB."
    },
    {
      question: "What are the scholarship requirements?",
      answer: "You need to submit per-semester Certificate of Enrollment and Reports of Grade. The overall progress reflects 4 years of scholarship requirements."
    },
    {
      question: "When is the submission deadline?",
      answer: "The current deadline is January 31, 2025. The portal will close after this date."
    },
    {
      question: "How can I check my GPA?",
      answer: "Your current GPA is displayed on the dashboard. You can also view detailed grade history in the Grade System Portal."
    },
    {
      question: "How do I participate in donation programs?",
      answer: "Visit the Donation Space on the dashboard to see available outreach programs and click 'Donate' on programs you'd like to support."
    }
  ];

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
              <h1 className="text-2xl font-bold text-white">Profile</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-slate-800/90 border-slate-700">
              <TabsTrigger value="profile" className="data-[state=active]:bg-slate-700 text-white">
                Profile Information
              </TabsTrigger>
              <TabsTrigger value="faqs" className="data-[state=active]:bg-slate-700 text-white">
                FAQs
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-slate-700 text-white">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 text-slate-400" />
                      </div>
                      <Button 
                        size="sm" 
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Profile Picture</h3>
                      <p className="text-slate-400 text-sm">Click the camera icon to upload your photo</p>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="university" className="text-white">University</Label>
                      <Select onValueChange={(value) => handleInputChange('university', value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select University" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="bsu">Bulacan State University</SelectItem>
                          <SelectItem value="up">University of the Philippines</SelectItem>
                          <SelectItem value="ust">University of Santo Tomas</SelectItem>
                          <SelectItem value="dlsu">De La Salle University</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="campus" className="text-white">Campus</Label>
                      <Select onValueChange={(value) => handleInputChange('campus', value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select Campus" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="main">Main Campus</SelectItem>
                          <SelectItem value="north">North Campus</SelectItem>
                          <SelectItem value="south">South Campus</SelectItem>
                          <SelectItem value="extension">Extension Campus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program" className="text-white">Program</Label>
                      <Input
                        id="program"
                        value={profileData.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scholarshipType" className="text-white">Scholarship Type</Label>
                      <Select onValueChange={(value) => handleInputChange('scholarshipType', value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select Scholarship Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="JLSS">JLSS</SelectItem>
                          <SelectItem value="RA 7687">RA 7687</SelectItem>
                          <SelectItem value="Merit Scholarship">Merit Scholarship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearGranted" className="text-white">Year of Scholarship Grant</Label>
                      <Select onValueChange={(value) => handleInputChange('yearGranted', value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studentId" className="text-white">Student ID</Label>
                      <Input
                        id="studentId"
                        value={profileData.studentId}
                        onChange={(e) => handleInputChange('studentId', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs">
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-green-400" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-slate-700 rounded-lg">
                        <div className="p-4 bg-slate-700/50">
                          <h3 className="text-white font-medium">{faq.question}</h3>
                        </div>
                        <div className="p-4">
                          <p className="text-slate-300">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-purple-400" />
                    Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">Email notifications</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">SMS notifications</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">Deadline reminders</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Privacy</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">Show profile to other scholars</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">Allow data analytics</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Account</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-900/20">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
