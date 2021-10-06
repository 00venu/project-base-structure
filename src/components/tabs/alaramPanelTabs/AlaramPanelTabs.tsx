import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from "@fluentui/react/lib/Stack";
import { classNames } from "./classess";
import { DummyData } from "../../panels/serviceNotificationPanel/Data";
import { ReactComponent as TrainSvg } from "../../assets/img/serviceNotificationPanel/trainLocation.svg";

const AlaramPanelTabs = () => {
  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
  };
  const tabTitle: any = (text: any) => {
    return (
      <Stack style={{ maxWidth: "60px" }}>
        <Text nowrap>{text}</Text>
      </Stack>
    );
  };
  const {
    linkIsSelected,
    card,
    cardHeaderContainer,
    labelWidth,
    cardBottom,
    labelWidth2,
    cardsParent,
  } = classNames;
  interface CardList {
    text1: string;
    text2: string;
    date: string;
    time: string;
    text3: string;
    text5: string;
  }
  const onRenderCell = (
    item: CardList | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className={card}>
        <div className={cardHeaderContainer} style={{ paddingBottom: "10px" }}>
          <ul>
            <li>
              <Stack>
                <Text nowrap={true} className={labelWidth}>
                  {item?.text1}
                </Text>
              </Stack>
            </li>
            <li>
              <Stack>
                <Text nowrap className={labelWidth}>
                  {item?.text2}
                </Text>
              </Stack>
            </li>
          </ul>
          <ul>
            <li>{item?.date}</li>
            <li>{item?.time}</li>
          </ul>
        </div>
        <div className={cardBottom}>
          <div>
            <TrainSvg />
            <div>
              <Stack>
                <Text nowrap className={labelWidth2}>
                  {item?.text5}
                </Text>
              </Stack>
            </div>
          </div>
          <ul>
            <li style={{ color: "orange" }}>
              LOW <span></span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <Pivot aria-label="Basic Pivot Example" className={linkIsSelected}>
        <PivotItem headerText="Active(90)">
          <div className={cardsParent} style={{ height: "58vh" }}>
            <FocusZone direction={FocusZoneDirection.vertical}>
              <List items={DummyData} onRenderCell={onRenderCell} />
            </FocusZone>
          </div>
        </PivotItem>
        <PivotItem headerText={tabTitle("Acknowledged(20)")}>
          <Label styles={labelStyles}>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={tabTitle("Unacknowledged(20)")}>
          <Label styles={labelStyles}>Pivot #3</Label>
        </PivotItem>
        <PivotItem headerText={tabTitle("Isolated(30)")}>
          <Label styles={labelStyles}>Pivot #Four</Label>
        </PivotItem>
      </Pivot>
    </>
  );
};

export default AlaramPanelTabs;
