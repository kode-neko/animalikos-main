import { faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Project, ProjectUrlType } from "../model";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectList: Project[] = [
  {
    name: "react",
    icon: faReact,
    version: "16.1",
    urlList: [
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/react"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/react"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/react"
      }
    ]
  },
  {
    name: "vue",
    icon: faVuejs,
    version: "16.1",
    urlList: [
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/vue"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/vue"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/vue"
      }
    ]
  },
  {
    name: "svelte",
    icon: faLink,
    version: "16.1",
    urlList: [
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/svelte"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/svelte"
      },
      {
        name: "web",
        type: ProjectUrlType.WEB,
        url: "https://www.kodeneko.com/animalikos/svelte"
      }
    ]
  },
];

export default ProjectList;