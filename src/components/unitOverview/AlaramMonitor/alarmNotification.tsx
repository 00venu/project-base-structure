import { Text } from "@fluentui/react";
import styled from "styled-components";
import { classNames } from "./classess";
import { AlarmDropDowns } from "./dropDown";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TrainDetails from "./alarmTableData";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";
import toggleUpIcon from "../../../assets/img/unitOverView/toggle_up_icon.svg";
import { StyledDiv, StyledIcon } from "./StyledComponents";
import { useState } from "react";
import { Typography } from "../../../typography";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";

const StyledTypography = styled(Typography)`
position: absolute;
top: -157px;
right: 512px;
`;

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: {
    marginTop: "10px",
  },
};

const options = {
  chart: {
    type: "column",
  },

  title: {
    text: "Total fruit consumption, grouped by gender",
  },

  xAxis: {
    categories: [
      "Dec 1",
      "Dec 3",
      "Dec 5",
      "Dec 7",
      "Dec 9",
      "Dec 11",
      "Dec 13",
      "Dec 15",
      "Dec 17",
      "Dec 19",
      "Dec 21",
      "Dec 23",
      "Dec 25",
      "Dec 27",
      "Dec 29",
      "Dec 31",
    ],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of fruits",
    },
  },

  plotOptions: {
    column: {
      stacking: "normal",
    },
  },

  series: [
    {
      name: "Raised",
      data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2],
      stack: "male",
    },
    {
      name: "High Priority",
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5],
      stack: "male",
    },

    {
      name: "Low Priority",
      data: [3, 0, 4, 4, 3, 3, 4, 4, 2, 5],
      stack: "female",
    },
  ],
};

export default function AlarmNotifications() {
  const alarms = useSelector((state:RootState ) => state.unitAEEMonitor);
  console.log(alarms);
  const [istoggled, setToggled] = useState<Boolean>(true);
  const {
    priorityButtons,
    trainCircle,
    colorOrange,
    colorRed,
    colorBlue,
    priorities,
    linkIsSelected,
    horizontalLine,
  } = classNames;
  return (
    <div style={{position:"relative"}}>
      <StyledTypography variant="p1" weight={500}>
        Next Routine Maintenance: 08/01/2021 | Last Routine Maintenance:
        08/12/2021 |
      </StyledTypography>
      <StyledDiv>
        <div style={{ background: "#26262D", padding: "20px" }}>
          <div className={priorities}>
            <Text variant="large">Alaram count vs Service Notifications</Text>
            <ul className={priorityButtons}>
              <li>
                <span className={[trainCircle, colorBlue].join(" ")} />
                Raised SN {30}
              </li>
              <li>
                <span className={[trainCircle, colorRed].join(" ")}></span>
                High Priority {10}
              </li>
              <li>
                <span className={[trainCircle, colorOrange].join(" ")}></span>
                Low Priority {20}
              </li>
              <StyledIcon
                src={toggleUpIcon}
                alt="img"
                onClick={() => setToggled(!istoggled)}
              />
            </ul>
          </div>

          {istoggled && (
            <HighchartsReact highcharts={Highcharts} options={options} />
          )}
        </div>
        <div className={horizontalLine} />
        <Pivot
          aria-label="Basic Pivot Example"
          className={linkIsSelected}
          overflowBehavior="menu"
        >
          <PivotItem headerText="Active(30)">
            <Label styles={labelStyles} />
          </PivotItem>
          <PivotItem headerText="Acknowledged(05)">
            <Label styles={labelStyles}></Label>
          </PivotItem>
          <PivotItem headerText="Unacknowledged(10)">
            <Label styles={labelStyles}></Label>
          </PivotItem>
          <PivotItem headerText="Isolated(15)">
            <Label styles={labelStyles}></Label>
          </PivotItem>
        </Pivot>
        <TrainDetails />
      </StyledDiv>
    </div>
  );
}
