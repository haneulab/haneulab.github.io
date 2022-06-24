interface ParentLayoutProps {
  header: JSX.Element;
  children: JSX.Element;
  footer: JSX.Element;
}
const ParentLayout: React.FC<ParentLayoutProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div id="layout" className="w-full relative">
      {header}
      {children}
      {footer}
    </div>
  );
};
export default ParentLayout;
