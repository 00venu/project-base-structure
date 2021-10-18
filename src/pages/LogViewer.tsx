import { classNames } from "./landingPage/classess";
const LogViewer  = () => {
  const { pageHeader } = classNames;
  return (
    <div>
      <h3 className={pageHeader}>Log Viewer</h3>
    </div>
  );
};

export default LogViewer;
