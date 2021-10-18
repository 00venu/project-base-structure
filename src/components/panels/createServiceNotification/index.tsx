import './createService.css';
import  { useState } from "react";
import { Label } from "@fluentui/react/lib/Label";
import { TextField } from "@fluentui/react/lib/TextField";
import { IStackTokens, Stack } from "@fluentui/react/lib/Stack";
import { DefaultButton,Dropdown, DatePicker,PrimaryButton, Link,  } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";
import { ReactComponent as CrossLogo } from '../../../assets/img/serviceNotificationPanel/crossLogo.svg';
// import {TextFieldComponent} from '../../components/TextField';
// import {DropdownComponent} from '../../components/Dropdown';
// import {ReactComponent as PlusSign} from '../../assets/img/serviceNotificationPanel/plus-sign.svg';
// import {DatePickerComponent} from '../../components/DatePicker';
// import {PrimaryButtonComponent} from '../../components/PrimaryButton';
// import { LinkComponent } from '../../components/LinkComponent';
// import {UploadComponent} from '../../components/Attachment';

initializeIcons();

const effectoptions: any[] = [{ key: '1', text: 'option1' }];
const functionaloptions: any[] = [{ key: '1', text: 'option1' }];
const equipmentaloptions: any[] = [{ key: '1', text: 'option1' }];
const codeoptions: any[] = [{ key: '1', text: 'option1' }];
const partoptions: any[] = [{ key: '1', text: 'option1' }];
const statusoptions: any[] = [{ key: '1', text: 'option1' }];
const timeOptions: any[] = [{ key: '1', text: '6:00 AM' },{ key: '1', text: '7:00 AM' },{ key: '1', text: '8:00 AM' }];

const ServiceNotification = (props: any) => {
  
    const [expandPanel, setexpandFeild] = useState(true); 
    const [longTextHeight, setHeight] = useState(146);
    const [showPanel , setShowPanel] = useState(false);
    const [funcLoc , setFuncLoc] = useState('');
    const [equipmnet, setEquipment] = useState('');
    const [malStartDt , setmalStartDt] = useState('');
    const [malStartTime, setmalStartTime] = useState('');
    const [createdDate , setCreatedDate] = useState('');
    const [createdTime , setCreatedTime] = useState('');
    const [notType, setNotType] = useState('');
    const [priority , setPriority] = useState('');
    const [status , setStatus] = useState('');
    const [cgd, setCgd] = useState('');
    const [ccd , setCcd] = useState('');
    const [cgop, setCgop] = useState('');
    const [partOfObject, setPartOfObject] = useState('');
    const [notDesc , setNotDesc] = useState('');
    
    const [funcLocErr , setFuncLocErr] = useState('');
    const [equipmnetErr, setEquipmentErr] = useState('');
    const [malStartDtErr , setmalStartDtErr] = useState('');
    const [malStartTimeErr, setmalStartTimeErr] = useState('');
    const [createdDateErr , setCreatedDateErr] = useState('');
    const [createdTimeErr , setCreatedTimeErr] = useState('');
    const [notTypeErr, setNotTypeErr] = useState('');
    const [priorityErr , setPriorityErr] = useState('');
    const [statusErr , setStatusErr] = useState('');
    const [cgdErr, setCgdErr] = useState('');
    const [ccdErr , setCcdErr] = useState('');
    const [cgopErr, setCgopErr] = useState('');
    const [partOfObjectErr, setPartOfObjectErr] = useState('');
    const [notDescErr , setNotDescErr] = useState('');
    
   


  const stackTokens: IStackTokens = { childrenGap: 20 };
 
const setDisplayPanel = ()=>{
  setShowPanel(!showPanel)
  }

  const setHeightLongText = () =>{
    setexpandFeild(!expandPanel);
    if(expandPanel){
      setHeight(146);
    }
    else{
      setHeight(609);
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    // alert();
    const isValid = formValidation();
  
}
// code for form validation.
const formValidation = () => {
    var emailErr = "";
    var passwordErr = "";
    let isValid = true;
    console.log(funcLoc);
     if (!funcLoc || funcLoc =='') { setFuncLocErr("Cannot be empty."); isValid = false; }
     else{setFuncLocErr("");  isValid = false; }
     if (!equipmnet) { setEquipmentErr("Cannot be empty.");   isValid = false; }
     if (!malStartDt) { setmalStartDtErr("Cannot be empty.");    isValid = false; }
     if (!malStartTime) { setmalStartTimeErr("Cannot be empty.");   isValid = false; }
     if (!createdDate) { setCreatedDateErr("Cannot be empty.");    isValid = false; }
     if (!createdTime) { setCreatedTimeErr("Cannot be empty.");    isValid = false; }
     if (!notType) { setNotTypeErr("Cannot be empty.");   isValid = false; }
     if (!priority) {setPriorityErr("Cannot be empty.");    isValid = false; }
     if (!status) { setStatusErr("Cannot be empty.");    isValid = false; }
     if (!cgd) { setCgdErr("Cannot be empty.");    isValid = false; }
     if (!ccd) { setCcdErr("Cannot be empty.");    isValid = false; }
     if (!cgop) { setCgopErr("Cannot be empty.");    isValid = false; }
     if (!partOfObject) { setPartOfObjectErr("Cannot be empty.");    isValid = false; }
     if (!notDesc) { setNotDescErr("Cannot be empty.");    isValid = false; }
     else{setNotDescErr("");  isValid = false; }


    
    // setEmailErr(emailErr);
    
    return isValid;
}

  return (
    <section className={`createServiceNotif `} >
    
      <div className="serviceNotif ms-delay100 ms-slideLeftIn10 ms-fadeOut100">
      
        <div className="ms-Grid">
          
          <div className="row service-heading">
            <div className="heading">Create Service Notification </div>
            <div className ="crossLogo"><CrossLogo className="closeSvg"  onClick={setDisplayPanel}/></div>
          </div>
          <div className="scrollableDiv">
          <form onSubmit={onSubmit}>
          <div className="scrollablePane">
        
          <div  className="formDiv ">
          
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Label htmlFor="defect">Defect Id</Label>
              <TextField id="defect"  placeholder="Enter Defect ID/Alarm ID" />
              </div>
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Label htmlFor="report">Reported By</Label>
                <TextField id="report" name="reportBy" placeholder="James" />
              </div>
            </div>
            <div className="ms-Grid-row ">
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Func Loc" 
                    label="Functional Location *"
                    options={functionaloptions}
                     errorMessage={funcLocErr}                              
                     onChange={(e: any) => { setFuncLoc(e.target.text)}}
                    />
                </Stack>
              </div>
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Equipment" 
                    label="Equipment *"
                    options={effectoptions}   
                    errorMessage={equipmnetErr}                              
                    onChange={(e: any) => { setEquipment(e.target.value) }}                 
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Label htmlFor="malfunction">Malfunction Start Date *</Label>
                <DatePicker placeholder="21/2/2020"                              
                     onChange={(e: any) => { setmalStartDt(e.target.value) }}/>
              </div>
              <div className="ms-Grid-col ms-lg6 service-feild">
               
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="11:00 AM" 
                    label="Malfunction Start Time *"
                    options={timeOptions}  
                    errorMessage={malStartTimeErr}                              
                     onChange={(e: any) => { setmalStartTime(e.target.value) }}                   
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Label htmlFor="createdDate">Created on Date *</Label>
                <TextField id="createdDate" name="createdDate" 
                 placeholder="24/12/2020" 
                 errorMessage={createdDateErr}                              
                 onChange={(e: any) => { setCreatedDate(e.target.value) }}   />
              </div>
              <div className="ms-Grid-col ms-lg6 service-feild">
                <Label htmlFor="malfunctionTime">Created on Time *</Label>
                <TextField id="createdTime" name="createdTime" 
                 errorMessage={createdTimeErr}                              
                 onChange={(e: any) => { setCreatedTime(e.target.value) }}   
                placeholder="11:02 AM" />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg4 service-feild notificationType">
                  <Stack tokens={stackTokens}>
                  <Dropdown
                   placeholder="Select Notifi.." 
                    label="Notification Type *"
                    options={statusoptions} 
                    errorMessage={notTypeErr}                              
                    onChange={(e: any) => { setNotType(e.target.value) }}                      
                  />
                </Stack>
              </div>
              <div className="ms-Grid-col ms-lg4 service-feild priority">
                  <Stack tokens={stackTokens}>
                  <Dropdown               
                    placeholder="Select Priority" 
                    label="Priority *"
                    options={statusoptions}   
                    errorMessage={priorityErr}                              
                    onChange={(e: any) => { setPriority(e.target.value) }}                    
                  />

                  </Stack>
              </div>
              <div className="ms-Grid-col ms-lg4 service-feild status">
                <Stack tokens={stackTokens}>
                  <Dropdown                
                    placeholder="Select Status" 
                    label="Status *"
                    options={statusoptions}
                    errorMessage={statusErr}                              
                    onChange={(e: any) => { setStatus(e.target.value) }}   
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild longDropdowns">
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Coding Group Description" 
                    label="Coding Group Description *"
                    options={codeoptions}  
                    errorMessage={cgdErr}                              
                    onChange={(e: any) => { setCgd(e.target.value) }}                 
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild longDropdowns">
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Coding Code Description"
                    label="Coding Code Description *"
                    options={equipmentaloptions} 
                    errorMessage={ccdErr}                              
                    onChange={(e: any) => { setCcd(e.target.value) }}                    
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild longDropdowns">
               
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Code Group" 
                    label="Code Group - Object Part *"
                    options={partoptions}
                    errorMessage={cgopErr}                              
                    onChange={(e: any) => { setCgop(e.target.value) }}   
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild longDropdowns">
                <Stack tokens={stackTokens}>
                  <Dropdown
                    placeholder="Select Part of Object" 
                    label="Part of Object *"
                    options={partoptions}
                    errorMessage={partOfObjectErr}                              
                    onChange={(e: any) => { setPartOfObject(e.target.value) }}   
                  />
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild longtextField">
                <Label htmlFor="notifdes">Notification Description *</Label>
               <TextField id="notifdes notDesc"  className="input-class "
                errorMessage={notDescErr}                              
                onChange={(e: any) => { setNotDesc(e.target.value) }}   
                  placeholder="Enter Text Here" multiline resizable={false}/>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 service-feild">
                <Label htmlFor="notifdes">Long Text/Line</Label>
                <TextField id="notifdes longText" className="input-class "  placeholder="CMS User Notes:&#13;&#10;<Enter additional notes here>&#13;&#10;Triage Notes.&#13;&#10;<The triage notes will be inserted here>" multiline resizable={false} style={{height: `${longTextHeight}px`}} onClick={ setHeightLongText}/>
      
              </div>
              </div>
              {/* <div  className="attachementTitle">Add Attachments</div> */}
              <label className="ms-Label attachementTitle" style={{paddingLeft:"5px"}}>Add Attachments</label>
              {/* <div  className="ms-Grid-row" style={{marginLeft:"5px", marginTop:"5px"}}>                
            <UploadComponent />
              </div> */}
              <div  className="linksDiv">
                <div className="blue-font"> <Link text="Diagnosis Guide"/></div>
                <div className="blue-font" style={{ marginLeft: "42px" }}><Link text="Open HMI"/></div>
                <div className="blue-font" style={{ marginLeft: "86px" }}><Link text="Unit Overview"/></div>
              </div>
            
             
          </div>
          <div style={{ backgroundColor: "#2E2E33", height: "84px" }}>
              <div className="button-sec" style={{ paddingTop:"24px", display: "flex", justifyContent: "flex-end",alignItems:'center' }}>
                <PrimaryButton className="draftBtn" text="Save as Draft" />
                {/* <PrimaryButtonComponent className="submitBtn" text="Submit"  type="submit" /> */}
                <DefaultButton className="submitBtn" type="submit" >Submit</DefaultButton>
              </div>
            </div>
           
        </div>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}
export default ServiceNotification;