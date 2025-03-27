"use client"

import ResumePreview from "@/components/ResumePreview";
import { ResumeServerData } from "@/lib/types";
import { mapToResumeValues } from "@/lib/utils";
import { formatDate } from "date-fns";
import Link from "next/link";

interface ResumeItemsProps {
  resume: ResumeServerData
}

export default function ResumeItem({resume}: ResumeItemsProps) {
  const wasUpdatedAt = resume.updatedAt !== resume.createdAt;

  return <div className="group border rounded-lg border-transparent hover:border-border transition-colors bg-secondary p-3">
    <div className="space-y-3">
      <Link href={`/editor?resumeId=${resume.id}`}
        className="inline-block w-full text-center"
      >
        <p className="font-semibold line-clamp-1">{resume.title || "No title"}</p>
        {resume.description && (
          <p className="line-clamp-2 text-sm">{resume.description}</p>
        )}
        <p className="text-xs text-muted-foreground">{
          wasUpdatedAt ? "updated" : "created"} on{" "}
          {formatDate(resume.updatedAt, "MMM d, yyyy h:mm a")}
          </p>
      </Link>
      <Link href={`/editor?resumeId=${resume.id}`}
        className="inline-block w-full"
      > 
        <ResumePreview 
          resumeData={mapToResumeValues(resume)}
        />  
      </Link>
    </div>
  </div>
}
