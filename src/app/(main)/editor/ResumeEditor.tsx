"use client"


import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { useState } from "react";
import { ResumeValues } from "@/lib/validation";
import ResumePreviewSection from "./ResumePreviewSection";
import { cn, mapToResumeValues } from "@/lib/utils";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import useAutoSaveResume from "./useAutoSaveResume";
import { ResumeServerData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

const ResumeEditor = ({ resumeToEdit }: ResumeEditorProps) => {

  const searchParams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : 
      {
        
      }
  );

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const {isSaving, hasUnsavedChanges} = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);

  const currentStep = searchParams.get("step") || steps[0].key

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    step => step.key === currentStep
  )?.component;

  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(resumeData?.template || 'single');
  const handleTemplateSelect = (template: 'single' | 'double') => {
    setSelectedTemplate(template);
    setResumeData({...resumeData, template: template});
    // Add your template change logic here
  };

  return <div className="flex grow flex-col">
    <header className="space-y-1.5 border-b px-3 py-5 text-center">
      <h1 className="text-2xl font-bold">Design your resume</h1>
      <p className="text-sm text-muted-foreground">
        Follow steps below to create your resume. Your progress will be saved automatically.
      </p>
      {/* <div>
        <Drop
      </div> */}
    </header>
   
    <main className="relative grow">
  <div className="absolute bottom-0 top-0 flex w-full">
    {/* Collapsible Templates Section */}
    <div className={`transition-all duration-300 ease-in-out ${isTemplatesOpen ? 'w-64' : 'w-0'} overflow-hidden bg-gray-50`}>
    <div className="h-full overflow-y-auto p-4 space-y-4">
        <h3 className="font-medium text-gray-700">Choose Layout</h3>
        
        {/* Single Column Option */}
        <div 
          className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedTemplate === 'single' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-100'}`}
          onClick={() => handleTemplateSelect('single')}
        >
          <div className="flex flex-col items-center">
            <div className="mb-2 w-full flex justify-center">
              {/* Icon representing single column layout */}
              <svg width="60" height="80" viewBox="0 0 60 80" className="text-gray-600">
                <rect x="10" y="10" width="30" height="10" fill="currentColor" />
                <rect x="10" y="25" width="30" height="10" fill="currentColor" />
                <rect x="10" y="40" width="30" height="10" fill="currentColor" />
                <rect x="10" y="55" width="30" height="10" fill="currentColor" />
              </svg>
            </div>
            <span className="text-sm font-medium">Single Column</span>
          </div>
        </div>
        
        {/* Two Column Option */}
        <div 
          className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedTemplate === 'double' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-100'}`}
          onClick={() => handleTemplateSelect('double')}
        >
          <div className="flex flex-col items-center">
            <div className="mb-2 w-full flex justify-center">
              {/* Icon representing two column layout */}
              <svg width="60" height="80" viewBox="0 0 60 80" className="text-gray-600">
                <rect x="5" y="10" width="20" height="10" fill="currentColor" />
                <rect x="35" y="10" width="20" height="10" fill="currentColor" />
                <rect x="5" y="25" width="20" height="10" fill="currentColor" />
                <rect x="35" y="25" width="20" height="10" fill="currentColor" />
                <rect x="5" y="40" width="20" height="10" fill="currentColor" />
                <rect x="35" y="40" width="20" height="10" fill="currentColor" />
                <rect x="5" y="55" width="20" height="10" fill="currentColor" />
                <rect x="35" y="55" width="20" height="10" fill="currentColor" />
              </svg>
            </div>
            <span className="text-sm font-medium">Two Column</span>
          </div>
      </div>
      </div>
    </div>
    {/* Toggle Button */}
    <Button 
      onClick={() => setIsTemplatesOpen(!isTemplatesOpen)}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-r-md shadow-md"
    >
      {isTemplatesOpen ?  <ChevronLeft className="h-4 w-4" /> :  <ChevronRight className="h-4 w-4" />}
    </Button>
    {/* Main Content */}
    <div className="flex-1 flex">
      <div className={cn("w-full p-3 md:w-1/2 overflow-y-auto space-y-6 md:block", 
        showSmResumePreview && "hidden"
      )}>
        <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
        {
          FormComponent && <FormComponent resumeData={resumeData} setResumeData={setResumeData} />
        }
      </div>
      <div className="grow md:border-r" />
      <ResumePreviewSection resumeData={resumeData!} setResumeData={setResumeData} className={cn(showSmResumePreview && "flex")} />
    </div>
  </div>
</main>
    <Footer currentStep={currentStep} setCurrentStep={setStep} 
      showSmResumePreview={showSmResumePreview}
      setShowSmResumePreview={setShowSmResumePreview}
      isSaving={isSaving}
    />
  </div>;
};

export default ResumeEditor;
