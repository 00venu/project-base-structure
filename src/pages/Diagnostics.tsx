import { classNames } from "./landingPage/classess";
const Diagnostics  = () => {
  const { pageHeader } = classNames;
  return (
    <div>
      <h3 className={pageHeader} style={{padding:'20px'}}>Diagnostics</h3>
    </div>
  );
};

export default Diagnostics;
