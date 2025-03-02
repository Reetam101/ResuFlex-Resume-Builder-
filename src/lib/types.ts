import { ResumeValues } from "./validation";

export interface EditorFormProps {
  resumeData: ResumeValues | undefined;
  setResumeData: (data: ResumeValues) => void;
}