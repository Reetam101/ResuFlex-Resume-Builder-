import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {formatDate} from 'date-fns'
import { Badge } from "./ui/badge";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export default function ResumePreview({resumeData, contentRef, className}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null) 
  const { fontStyle } = resumeData;
  const {width} = useDimensions(containerRef);

  return (
    <div className={cn("bg-white text-black h-fit w-full aspect-[210/297]", className)}
      ref={containerRef}
    >
      {resumeData?.template === "single" ? (
        <SingleColumnLayout resumeData={resumeData} width={width} contentRef={contentRef} />
      ) : (
        <DoubleColumnLayout resumeData={resumeData} width={width} contentRef={contentRef} />
      )}
    </div>
  );
}

interface LayoutProps {
  resumeData: ResumeValues;
  width: number;
  contentRef?: React.Ref<HTMLDivElement>;
}

function SingleColumnLayout({ resumeData, width, contentRef }: LayoutProps) {
  return (
    <div
      className={cn("space-y-6 p-6", !width && "invisible")}
      style={{
        zoom: (1/794) * width,
        fontFamily: resumeData.fontStyle
      }}
      ref={contentRef}
      id="resumePreviewContent"
    >
      <PersonalInfoHeader resumeData={resumeData} />
      <SummarySection resumeData={resumeData} withHr />
      <WorkExperienceSection resumeData={resumeData} withHr />
      <EducationSection resumeData={resumeData} withHr />
      <SkillsSection resumeData={resumeData} withHr />
    </div>
  );
}

function DoubleColumnLayout({ resumeData, width, contentRef }: LayoutProps) {
  return (
    <div
      className={cn("p-6", !width && "invisible")}
      style={{
        zoom: (1/794) * width,
        fontFamily: resumeData.fontStyle
      }}
      ref={contentRef}
      id="resumePreviewContent"
    >
      <PersonalInfoHeader resumeData={resumeData} />
      
      <div className="grid grid-cols-2 gap-8 mt-6">
        {/* Left Column */}
        <div className="space-y-6 pr-4">
          <SummarySection resumeData={resumeData} />
          <SkillsSection resumeData={resumeData} />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6 pl-4 border-l-2" style={{ borderColor: resumeData.colorHex }}>
          <WorkExperienceSection resumeData={resumeData} />
          <EducationSection resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
  withHr?: boolean;
}

function PersonalInfoHeader({resumeData}: ResumeSectionProps) {    
  const { photo, firstName, lastName, jobTitle, city, country, phone, email, colorHex, borderStyle } = resumeData;
  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : ""
    if(objectUrl) setPhotoSrc(objectUrl);
    if(photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo])

  return (
    <div className="flex items-center gap-6">
      {photoSrc && (
        <Image
          src={photoSrc!}
          width={100}
          height={100}
          alt="Author photo"
          className="aspect-square object-cover"
          style={{
            borderRadius: 
              borderStyle === BorderStyles.SQUARE ? "0px" : 
              borderStyle === BorderStyles.CIRCLE ? "9999px" : "10%"
          }}
        />
      )}
      <div className="space-y-2.5">
        <div className="space-y-1">
          <p className="text-3xl font-bold" style={{ color: colorHex }}>
            {firstName} {lastName}
          </p>
          <p className="font-medium" style={{ color: colorHex }}>
            {jobTitle}
          </p>
        </div>
        <p className="text-xs text-gray-500">
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? " • ": ""}
          {[phone, email].filter(Boolean).join(" • ")}
        </p>
      </div>
    </div>
  )
}

function SummarySection({ resumeData, withHr }: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;
  if(!summary) return null;

  return (
    <div className="space-y-3 break-inside-avoid">
      {withHr && <hr className="border-2" style={{ borderColor: colorHex }} />}
      <SectionTitle colorHex={colorHex!}>Professional Profile</SectionTitle>
      <div className="whitespace-pre-line text-sm">{summary}</div>
    </div>
  )
}

function WorkExperienceSection({ resumeData, withHr }: ResumeSectionProps){
  const { workExperiences, colorHex } = resumeData;
  const workExperiencesNotEmpty = workExperiences?.filter((exp) => Object.values(exp).filter(Boolean).length > 0)

  if(!workExperiencesNotEmpty?.length) return null;

  return (
    <div className="space-y-4">
      {withHr && <hr className="border-2" style={{ borderColor: colorHex }} />}
      <SectionTitle colorHex={colorHex!}>Work Experience</SectionTitle>
      {workExperiencesNotEmpty.map((exp, index) => (
        <div key={index} className="break-inside-avoid space-y-1 mb-3">
          <div className="flex items-center justify-between text-sm font-semibold" style={{ color: colorHex }}>
            <span>{exp.position}</span>
            {exp.startDate && (
              <span>
                {formatDate(exp.startDate, "MM/yyyy")} - {" "}
                {exp.endDate ? formatDate(exp.endDate, 'MM/yyyy') : 'Present'}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold">{exp.company}</p>
          <div className="whitespace-pre-line text-xs">{exp.description}</div> 
        </div>
      ))}
    </div>
  )
}

function EducationSection({ resumeData, withHr }: ResumeSectionProps) {
  const {educations, colorHex} = resumeData
  const educationsNotEmpty = educations?.filter((edu) => Object.values(edu).filter(Boolean).length > 0)

  if (!educationsNotEmpty?.length) return null;

  return (
    <div className="space-y-4">
      {withHr && <hr className="border-2" style={{ borderColor: colorHex }} />}
      <SectionTitle colorHex={colorHex!}>Education</SectionTitle>
      {educationsNotEmpty.map((edu, index) => (
        <div key={index} className="break-inside-avoid space-y-1 mb-3">
          <div className="flex items-center justify-between text-sm font-semibold" style={{ color: colorHex }}>
            <span>{edu.degree}</span>
            {edu.startDate && (
              <span>
                {formatDate(edu.startDate, 'MM/yyyy')} 
                {edu.endDate ? ` - ${formatDate(edu.endDate, "MM/yyyy")}` : ""}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold">{edu.school}</p>
        </div>
      ))}
    </div>
  )
}

function SkillsSection({ resumeData, withHr }: ResumeSectionProps) {
  const { skills, colorHex, borderStyle } = resumeData;
  if(!skills?.length) return null;

  return (
    <div className="break-inside-avoid space-y-3">
      {withHr && <hr className="border-2" style={{ borderColor: colorHex }} />}
      <SectionTitle colorHex={colorHex!}>Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            className="text-white hover:bg-opacity-90" 
            style={{
              backgroundColor: colorHex,
              borderRadius: 
                borderStyle === BorderStyles.SQUARE ? "0px" : 
                borderStyle === BorderStyles.CIRCLE ? "9999px" : "8px"
            }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ children, colorHex }: { children: React.ReactNode; colorHex: string }) {
  return (
    <p className="text-lg font-semibold mb-2" style={{ color: colorHex }}>
      {children}
    </p>
  )
}