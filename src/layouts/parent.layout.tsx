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
    <div id="layout">
      {header}
      {children}
      {footer}
    </div>
  );
};
export default ParentLayout;
