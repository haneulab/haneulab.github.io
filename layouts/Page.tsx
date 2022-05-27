import { PageProps } from 'interfaces/layouts';

const Page: React.FC<PageProps> = ({ children }) => {
  return <main id="layout-page">{children}</main>;
};

export default Page;
