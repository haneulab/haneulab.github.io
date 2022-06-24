import Footer from './footer.layout';
import Header from './header.layout';
import ParentLayout from './parent.layout';

const Layout: {
  page: ({ children }: { children: JSX.Element }) => JSX.Element;
} = {
  page: ({ children }) => (
    <ParentLayout header={<Header />} footer={<Footer />}>
      {children}
    </ParentLayout>
  ),
};

export default Layout;
