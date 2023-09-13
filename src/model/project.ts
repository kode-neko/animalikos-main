import { IconProp } from "@fortawesome/fontawesome-svg-core";

enum ProjectUrlType {
  WEB = 'web',
  GITHUB = 'github',
  STACKBLITZ = 'stackblitz'
}

interface ProjectUrl {
  name: string;
  type: ProjectUrlType;
  url: string;
}

interface Project {
  name: string;
  icon: IconProp;
  version: string;
  urlList: ProjectUrl[];
}

export {ProjectUrlType};
export type { Project, ProjectUrl };