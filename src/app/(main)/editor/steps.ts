import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>,
  key: string;
}[] = [
  {
    title: "General info",
    component: GeneralInfoForm,
    key: "general-info"
  },
  {
    title: "Personal info",
    component: PersonalInfoForm,
    key: "personal-info"
  },
  {
    title: "Work experiences",
    component: WorkExperienceForm,
    key: 'work-experiences'
  },
  {
    title: "Education",
    component: EducationForm,
    key: 'education'
  }
]