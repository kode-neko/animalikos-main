import { IconProp } from "@fortawesome/fontawesome-svg-core";

enum ProjectUrlType {
  WEB = 0,
  GITHUB = 1,
  STACKBLITZ = 2
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