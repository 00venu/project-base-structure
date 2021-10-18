import { classNames } from "./classess";
const OtherPage = () => {
  const { pageHeader } = classNames;
  return (
    <div>
      <h3 className={pageHeader}>Other Page</h3>
    </div>
  );
};

export default OtherPage;
