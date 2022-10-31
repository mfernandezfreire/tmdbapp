interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
  [key: string]: any;
}

const MainContainer = ({ children }: MainContainerProps) => (
  <div
    className="container"
    style={
      {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }>
    {children}
  </div>
);

export default MainContainer;
