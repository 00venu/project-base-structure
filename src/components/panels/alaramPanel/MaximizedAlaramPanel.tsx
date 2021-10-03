import { CloseRightarrow, classNames } from "./";

const MaximizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const { maximizedAlaramPanel, leftArrow } = classNames;

  return (
    <div className={maximizedAlaramPanel}>
      <CloseRightarrow className={leftArrow} onClick={alaramPanelHandler} />
    </div>
  );
};

export default MaximizedAlaramPanel;
