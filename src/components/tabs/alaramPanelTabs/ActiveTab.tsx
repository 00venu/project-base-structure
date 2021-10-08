import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from "@fluentui/react/lib/Stack";
import { classNames, DummyData, TrainSvg, RoundButton } from "./";

const ActiveTab = (props: any) => {
  const {
    card,
    cardHeaderContainer,
    labelWidth,
    cardBottom,
    labelWidth2,
    cardsParent,
    buttonParent,
    priorityButtons,
    trainCircle,
    trainIcon,
    colorOrange,
    colorRed,
    activeButton,
    repairPriority,
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
      <div className={card} onClick={props.showDetails}>
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
          <div className={repairPriority}>LOW</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={buttonParent}>
        <RoundButton text="Alarm" active={true} />
        <RoundButton text="Events" />
        <RoundButton text="Alerts" />
      </div>
      <ul className={priorityButtons}>
        <li className={activeButton}>
          <span className={trainCircle}>
            <TrainSvg className={trainIcon} />
          </span>
          All <p>30</p>
        </li>
        <li>
          <span className={[trainCircle, colorRed].join(" ")}>
            <TrainSvg className={trainIcon} />
          </span>
          High Priority <p>10</p>
        </li>
        <li>
          <span className={[trainCircle, colorOrange].join(" ")}>
            <TrainSvg className={trainIcon} />
          </span>
          Low Priority <p>20</p>
        </li>
      </ul>
      <div className={cardsParent} style={{ height: "55vh" }}>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <List items={DummyData} onRenderCell={onRenderCell} />
        </FocusZone>
      </div>
    </>
  );
};

export default ActiveTab;
