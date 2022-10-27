interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
  [key: string]: any;
}

const MainContainer = ({ children }: MainContainerProps) => (
  <div className="container">
    {children}
  </div>
);

export default MainContainer;
