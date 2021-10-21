import { classNames } from "./classess";
const LandingPage = () => {
  const { pageHeader } = classNames;
  return (
    <div>
      <h3 className={pageHeader}>Fleet Overview</h3>
    </div>
  );
};

export default LandingPage;
