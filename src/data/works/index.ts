import { StaticImageData } from 'next/image';
import UniroundImage from 'public/images/Uniround_Image.png';

export interface WorkDataInterface {
  id: number;
  title: string;
  progress: 'complete' | 'incomplete';
  description: {
    short: string;
    long: string[];
  };
  type:
    | 'web application'
    | 'web service'
    | 'mobile application'
    | 'software package';
  links?: {
    README?: string;
    html_url?: string;
  };
  href?: string;
  img: string | StaticImageData;
}

const works: WorkDataInterface[] = [
  {
    id: 1,
    title: 'UniRound',
    type: 'web service',
    progress: 'incomplete',
    description: {
      short:
        'Ride-sharing platform based as web application to provide simpler & safer ride sharing experiences among college students in each university.',
      long: [
        'Uniround is a web-based platform service designed from scratch to provide safer & simpler proccesses for matching ride-sharers among university students',
        'The project went to pre-launch phases in research, design, development, and testing. To learn more about this project, please go to the project source code or demo.',
      ],
    },
    links: {
      README: '#',
      html_url: '#',
    },
    href: '/projects/uniround',
    img: UniroundImage,
  },
];

export default works;
