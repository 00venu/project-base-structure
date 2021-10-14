import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";

import {
  classNames,
  ActiveTab,
  activeTabData,
  acknowledgedTabData,
  unacknowledged,
  isIsolated,
} from "./";
const AlaramPanelTabs = (props: any) => {
  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
  };
  const { linkIsSelected } = classNames;

  return (
    <div>
      <Pivot
        aria-label="Basic Pivot Example"
        className={linkIsSelected}
        overflowBehavior="menu"
      >
        <PivotItem headerText={`Active(${activeTabData.length})`}>
          <ActiveTab showDetails={props.showDetails} />
        </PivotItem>
        <PivotItem headerText={`Acknowledged(${acknowledgedTabData.length})`}>
          <Label styles={labelStyles}>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={`Unacknowledged(${unacknowledged.length})`}>
          <Label styles={labelStyles}>Pivot #3</Label>
        </PivotItem>
        <PivotItem headerText={`Isolated(${isIsolated.length})`}>
          <Label styles={labelStyles}>Pivot #Four</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default AlaramPanelTabs;
