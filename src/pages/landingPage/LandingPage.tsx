import { Header, LeftNav, MinimizedPanel, Rightarrow, classNames } from "./";

const LandingPage = () => {
  const { leftArrow } = classNames;
  return (
    <div>
      <Header />
      <LeftNav />
      <MinimizedPanel />
      <div className={leftArrow}>
        <Rightarrow />
      </div>
    </div>
  );
};

export default LandingPage;
