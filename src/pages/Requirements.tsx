import React, { useState } from 'react';
import { Upload, FileText, ArrowLeft, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Requirements = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const deadlineDate = new Date('2025-01-31');
  const isDeadlinePassed = currentDate > deadlineDate;

  const requirementData = [
    {
      semester: '1st Semester AY 2022-2023',
      enrollment: { status: 'submitted', date: '2022-08-15' },
      grades: { status: 'submitted', date: '2022-12-20' }
    },
    {
      semester: '2nd Semester AY 2022-2023',
      enrollment: { status: 'submitted', date: '2023-01-15' },
      grades: { status: 'submitted', date: '2023-05-20' }
    },
    {
      semester: '1st Semester AY 2023-2024',
      enrollment: { status: 'submitted', date: '2023-08-15' },
      grades: { status: 'submitted', date: '2023-12-20' }
    },
    {
      semester: '2nd Semester AY 2023-2024',
      enrollment: { status: 'submitted', date: '2024-01-15' },
      grades: { status: 'submitted', date: '2024-05-20' }
    },
    {
      semester: '1st Semester AY 2024-2025',
      enrollment: { status: 'submitted', date: '2024-08-15' },
      grades: { status: 'submitted', date: '2024-12-20' }
    },
    {
      semester: '2nd Semester AY 2024-2025',
      enrollment: { status: 'submitted', date: '2025-01-15' },
      grades: { status: 'pending', date: null }
    },
    {
      semester: '1st Semester AY 2025-2026',
      enrollment: { status: 'pending', date: null },
      grades: { status: 'pending', date: null }
    },
    {
      semester: '2nd Semester AY 2025-2026',
      enrollment: { status: 'pending', date: null },
      grades: { status: 'pending', date: null }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500">Submitted</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500">Pending</Badge>;
      default:
        return <Badge className="bg-red-500/20 text-red-400 border-red-500">Missing</Badge>;
    }
  };

  const submittedCount = requirementData.reduce((acc, req) => {
    return acc + (req.enrollment.status === 'submitted' ? 1 : 0) + (req.grades.status === 'submitted' ? 1 : 0);
  }, 0);

  const totalRequirements = requirementData.length * 2;
  const progressPercentage = (submittedCount / totalRequirements) * 100;

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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-slate-700"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Dashboard
                </Button>
                <h1 className="text-2xl font-bold text-white">Requirements Submission</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-red-500/20 text-red-300 border-red-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Deadline: Jan 31, 2025
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Deadline Warning */}
          {isDeadlinePassed && (
            <Card className="mb-6 bg-red-900/50 border-red-700">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                  <p className="text-red-300 font-medium">
                    Warning: Submission deadline has passed. Portal is now closed for new submissions.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Progress Overview */}
          <Card className="mb-6 bg-slate-800/90 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                4-Year Scholarship Requirements Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Overall Progress</span>
                  <span className="text-white font-medium">{submittedCount}/{totalRequirements} documents</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-slate-300 text-sm">Certificates of Enrollment</p>
                    <p className="text-white font-bold text-lg">
                      {requirementData.filter(req => req.enrollment.status === 'submitted').length}/8
                    </p>
                    <Button 
                      className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                      onClick={() => navigate('/upload/enrollment')}
                      disabled={isDeadlinePassed}
                    >
                      Upload Certificates
                    </Button>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-slate-300 text-sm">Reports of Grade</p>
                    <p className="text-white font-bold text-lg">
                      {requirementData.filter(req => req.grades.status === 'submitted').length}/8
                    </p>
                    <Button 
                      className="w-full mt-2 bg-purple-600 hover:bg-purple-700"
                      onClick={() => navigate('/upload/grades')}
                      disabled={isDeadlinePassed}
                    >
                      Upload Grades
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements per Semester */}
          <div className="space-y-4">
            {requirementData.map((semester, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{semester.semester}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Certificate of Enrollment */}
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">Certificate of Enrollment</h4>
                        {getStatusBadge(semester.enrollment.status)}
                      </div>
                      {semester.enrollment.status === 'submitted' ? (
                        <div className="flex items-center text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Submitted: {semester.enrollment.date}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-slate-400 text-sm">Upload Certificate</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Report of Grades */}
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">Report of Grades</h4>
                        {getStatusBadge(semester.grades.status)}
                      </div>
                      {semester.grades.status === 'submitted' ? (
                        <div className="flex items-center text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Submitted: {semester.grades.date}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-slate-400 text-sm">Upload Grades</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Submission Guidelines */}
          <Card className="mt-6 bg-slate-800/90 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-300">
                <p>• Files must be in PDF, JPG, or PNG format</p>
                <p>• Maximum file size: 10MB per document</p>
                <p>• Documents must be clear and readable</p>
                <p>• Ensure all information is visible and not cut off</p>
                <p>• Submit documents for each semester as required</p>
                <p className="text-red-400 font-medium">• All submissions must be completed before the deadline</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
