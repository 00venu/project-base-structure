import { classNames } from './classess'
import { default as TrainAlert } from "../../trains/trainAlert/TrainAlert";

const AlarmDetails = () => {
    const { trainAlertParent, panelWrap } = classNames;
    const alertInfo = {
        noOfCabins: 2,
        issueInCabin: 1,
    };
    return (
        <div className={panelWrap}>
            <div className={trainAlertParent}>
                <TrainAlert alertInfo={alertInfo} />
            </div>
        </div>
    )
}

export default AlarmDetails;