import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layout" className="w-full relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
