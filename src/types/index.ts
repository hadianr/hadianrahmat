export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  employmentType?: string;
  city?: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ITechnologySkill {
  name: string;
  description: string;
  skills?: string[];
}

export interface ITechnologySubcategory {
  name: string;
  description?: string;
  items: ITechnologySkill[];
}

export interface ITechnology {
  category: string;
  description: string;
  subcategories: ITechnologySubcategory[];
}
