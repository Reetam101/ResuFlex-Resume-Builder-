import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";

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
  },
  {
    title: 'Skill',
    component: SkillsForm,
    key: 'skill'
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: 'summary'
  },
  // {
  //   title: "Links",
  //   component: LinksForm,
  //   key: "link"
  // },
  // {
  //   title: "Achievements",
  //   component: AchievementsForm,
  //   key: "achievement"
  // }
]