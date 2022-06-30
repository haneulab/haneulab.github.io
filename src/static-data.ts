interface ProjectData {
  title: string;
  description: string;
  category:
    | 'web-application'
    | 'mobile-application'
    | 'software-packages'
    | 'developer-documentation';
  href: string;
}
type ProjectsDataType = ProjectData[];
const PROJECTS: ProjectsDataType = [
  {
    title: 'Almond Haus',
    description:
      'Frontend web application for a local coffee shop, Almond Haus at Westminster location.',
    category: 'web-application',
    href: 'https://almondhaus.vercel.app',
  },
  {
    title: 'Yuchan Shokudo',
    description:
      'Frontend web application for a local authentic Japanese cuisine in Davis.',
    category: 'web-application',
    href: 'https://yuchanshokudo.com',
  },
  {
    title: 'UniRound',
    description:
      'A college ride-sharing service based as a web application created by a team of 4 designers & developers.',
    category: 'web-application',
    href: 'https://uniround.github.io',
  },
];
export { PROJECTS };
