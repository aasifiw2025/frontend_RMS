export interface jobDetailProps {
  title: string;
  company: string;
  category: string;
  vacancies: string;
  deadline: string;
  city: string;
}

export interface salaryDetailprops {
  salaryCategory: "range" | "custom";
  minSalary: string;
  maxSalary: string;
  salaryType: string;
  recieveApplication: string;
  others: "featured" | "highlighted" | "remote";
}

export interface descriptionProps {
  experience: string;
  tags: string;
  jobRole: string;
  benefit: string;
  education: string;
  jobType: string;
  responsibilities: string;
}
