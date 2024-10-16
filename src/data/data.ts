import { CloudLightning, Lightbulb, FlameKindling } from 'lucide-react';
import port1 from '../data/img/port1.png'
import port2 from '../data/img/port2.png'
import port3 from '../data/img/port3.png'
import { faHtml5  ,faJs, faReact, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import tailwindcss from '../data/tailwind.svg'
import typescript from '../data/typescript.svg'
import nestJs from '../data/nestjs.svg'

export const history = [
  {
    title: "Hobbies",
    description:
      "In my free time I play video games, read fantasy or detective literature and create music of all kinds.",
    year: "Since child",
    img: port1
  },
  {
    title: "Riwi",
    description:
      "At the beginning of 2023 I had the opportunity to join a bootcamp called riwi, where not only I was trained as a developer but also I could learn a lot about the tech world thanks to my leaders.",
    year: 2023,
    img: port2
  },
  {
    title: "Vision",
    description:
      "I am currently a junior developer and I have knowledge in the field of Front-End and Back-End, and I aspire to continue growing in the world of programming. ",
    year: '∞',
    img: port3
  },
];

export const softSkills = [
    {
        title: 'Adaptability To Change',
        description: 'Since I was a child I have been accustomed to constant change and I have been able to strengthen it in different projects that I have been involved in. ',
        icon: CloudLightning
    },
    {
        title: 'Problem solving',
        description: "I'm fast and I like to find and propose solutions to the problems that arise to the work team, always being communicative.",
        icon: Lightbulb
    },
    {
        title: 'Working under pressure',
        description: 'At different points in my life I have had to test my abilities in situations under a lot of pressure, which has helped me not to block myself in such situations.',
        icon: FlameKindling 
    },
];

export const frontSkills = [
  {
    title: 'HTML5',
    icon: faHtml5
  },
  {
    title: 'Tailwind CSS',
    icon: tailwindcss
  },
  {
    title: 'Javascript',
    icon: faJs
  },
  {
    title: 'ReactJs',
    icon: faReact
  }
]

export const backSkills = [
  {
    title: 'Python',
    icon: faPython
  },
  {
    title: 'NodeJs',
    icon: faNodeJs
  },
  {
    title: 'Typescript',
    icon: typescript
  },
  {
    title: 'NestJs',
    icon: nestJs
  }
]