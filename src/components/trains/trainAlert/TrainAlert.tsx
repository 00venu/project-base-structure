import { TrainLeft, Cabin, TrainRight, classNames } from "../";

const TrainAlert = (props: any) => {
  const { trainAlert, issueCabin } = classNames;
  const { alertInfo } = props;
  return (
    <>
      <ul className={trainAlert}>
        <li>
          <TrainLeft />
        </li>
        {[...Array(alertInfo.noOfCabins)].map((item, i) => {
          let num = i + 1;
          return (
            <li>
              <Cabin
                className={alertInfo.issueInCabin === num ? issueCabin : null}
              />
            </li>
          );
        })}
        <li>
          <TrainRight />
        </li>
      </ul>
    </>
  );
};

export default TrainAlert;
