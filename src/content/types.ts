export type Project = {
  name: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type Job = {
  company: string;
  title: string;
  period: string;
  projects: Project[];
  highlights?: string[];
};

export type SkillGroup = { group: string; items: string[] };
export type Stat = { value: string; label: string };
export type School = { school: string; detail: string; period: string };
