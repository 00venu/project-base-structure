import {ReactComponent as TrainLeft} from '../../../assets/img/unitOverView/train_left.svg';
import {ReactComponent as TrainRight} from '../../../assets/img/unitOverView/train_right.svg';
import {ReactComponent as Cabin} from '../../../assets/img/unitOverView/train_cabin.svg';
import train_up_icon from '../../../assets/img/unitOverView/train_top.svg';
import { mergeStyleSets } from '@fluentui/react';
import styled from 'styled-components';

export const classNames: any = mergeStyleSets({
    trainAlert: {
      display: "flex",
    },
    issueCabin: {
      fill: "#712226",
    },
  }); 
  const StyledImg = styled.img`
  position: absolute;
  top: -18px;
  left: 54px;
  `;
  const StyledListItem = styled.li`
  position: relative;
  `;
  const StyledRightImg  = styled.img`
  position: absolute;
  top: -18px;
  right: 54px;
  `;

const TrainAlert = (props: any) => {
   const { trainAlert, issueCabin } = classNames;
  const { alertInfo } = props;
  return (
    <>
      <ul className={trainAlert}>
        <StyledListItem>
          <TrainLeft />
          <StyledImg src={train_up_icon} />
        </StyledListItem>
        {[...Array(alertInfo.noOfCabins)].map((item, i) => {
          let num = i + 1;
          return (
            <li key={i}>
              <Cabin
                 className={alertInfo.issueInCabin === num ? issueCabin : null}
              />
            </li>
          );
        })}
        <StyledListItem>
          <TrainRight />
          <StyledRightImg src={train_up_icon} />
        </StyledListItem>
      </ul>
      
    </>
  );
};

export default TrainAlert;