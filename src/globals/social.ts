import { faCodepen, faFigma, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Social } from "../model";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const SocialList: Social[] = [
  {
    name: "github",
    url: "https://github.com/kode-neko",
    icon: faGithub
  },
  {
    name: "twitter",
    url: "https://twitter.com/KodenekoFront",
    icon: faTwitter
  },
  {
    name: "codepen",
    url: "https://codepen.io/kodeneko",
    icon: faCodepen
  },
  {
    name: "bolt",
    url: "https://stackblitz.com/@kode-neko",
    icon: faBolt
  },
  {
    name: "figma",
    url: "https://twitter.com/KodenekoFront",
    icon: faFigma
  }
];

export default SocialList;