import { PageProps } from 'interfaces/layouts';

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <main
      id="layout-page"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      {children}
    </main>
  );
};

export default Page;
