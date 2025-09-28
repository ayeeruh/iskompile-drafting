
import React, { useState } from 'react';
import { Upload, FileText, ArrowLeft, CheckCircle, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';

const FileUpload = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({});

  const isEnrollment = type === 'enrollment';
  const pageTitle = isEnrollment ? 'Certificate of Enrollment' : 'Reports of Grade';
  const pageColor = isEnrollment ? 'blue' : 'purple';

  const semesters = [
    '1st Semester AY 2022-2023',
    '2nd Semester AY 2022-2023',
    '1st Semester AY 2023-2024',
    '2nd Semester AY 2023-2024',
    '1st Semester AY 2024-2025',
    '2nd Semester AY 2024-2025',
    '1st Semester AY 2025-2026',
    '2nd Semester AY 2025-2026'
  ];

  const handleFileUpload = (semesterIndex: number, files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFiles(prev => ({
        ...prev,
        [semesterIndex]: [...(prev[semesterIndex] || []), file]
      }));
    }
  };

  const removeFile = (semesterIndex: number, fileIndex: number) => {
    setUploadedFiles(prev => ({
      ...prev,
      [semesterIndex]: prev[semesterIndex]?.filter((_, index) => index !== fileIndex) || []
    }));
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-slate-700"
                  onClick={() => navigate('/requirements')}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Requirements
                </Button>
                <h1 className="text-2xl font-bold text-white">{pageTitle} Upload</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((semester, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{semester}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm mb-4">
                        Upload {pageTitle} for {semester}
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(index, e.target.files)}
                        className="hidden"
                        id={`file-${index}`}
                      />
                      <label htmlFor={`file-${index}`}>
                        <Button 
                          className={`${pageColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white cursor-pointer`}
                          asChild
                        >
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles[index] && uploadedFiles[index].length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">Uploaded Files:</h4>
                        {uploadedFiles[index].map((file, fileIndex) => (
                          <div key={fileIndex} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <FileText className="w-4 h-4 text-blue-400" />
                              <span className="text-white text-sm">{file.name}</span>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                              onClick={() => removeFile(index, fileIndex)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Guidelines */}
          <Card className="mt-6 bg-slate-800/90 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Upload Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-300">
                <p>• Files must be in PDF, JPG, or PNG format</p>
                <p>• Maximum file size: 10MB per document</p>
                <p>• Documents must be clear and readable</p>
                <p>• Ensure all information is visible and not cut off</p>
                <p>• One file per semester for {pageTitle.toLowerCase()}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
