import { faCodepen, faFigma, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Social } from "../model";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const SocialList: Social[] = [
  {
    name: "github",
    url: "https://www.google.com",
    icon: faGithub
  },
  {
    name: "twitter",
    url: "",
    icon: faTwitter
  },
  {
    name: "codepen",
    url: "",
    icon: faCodepen
  },
  {
    name: "bolt",
    url: "",
    icon: faBolt
  },
  {
    name: "figma",
    url: "",
    icon: faFigma
  }
];

export default SocialList;