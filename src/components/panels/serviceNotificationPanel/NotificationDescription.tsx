import { FocusZone, FocusZoneDirection } from "@fluentui/react-focus";
import React from "react";
import { Cabin } from "../../trains";
import {CabinSvg, classNames, EditpenSvg, RoundButton} from "."

const Description=(description:any)=>{
    console.log("description")
console.log(description)

    const {
      
        card,
        service_data_class,
        panelHeaderContainer,
        notificationcontainer,
        LongText,
        cardsParent,
        service_links,
        description_body,
        filled_button,
        service_column_class,
        DescriptionHeader,
        DescrptionParent
       
      } = classNames;
return(

    <div className={description_body} >
     
           <div className={notificationcontainer} >
     
           <div className={DescriptionHeader}>
    <h3>Defect ID-AL67154 <br/>
       <small>Alarm | Status:Open | description</small></h3>  
      <EditpenSvg></EditpenSvg>
      
    </div>
    
    
    <div className="DescrptionParent">
    
      <FocusZone direction={FocusZoneDirection.vertical}>
     
      <div className="ms-Grid" dir="ltr">
      <br/>
              <small>notification Description</small>
              <h3>placeholder for notification description</h3>
              <br/>
<div className={service_data_class}>
<div className="ms-Grid-row">

<div className="ms-Grid-col ms-sm6 "  > 
<div  className={service_column_class}>
<small>Functional Location</small>
<h3>TSNW-RS-D-D104</h3>
</div>
</div>

<div className="ms-Grid-col ms-sm6 ">
<small>Equipment</small>
<h3>Car1</h3>
  </div>
</div>
</div>

<div className={service_data_class}>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm6 "  >
<div  className={service_column_class}>
<small>Malfunction Start Date & Time</small>
<h3>24/12/2020|11:04 AM</h3>
     </div>
     </div>
<div className="ms-Grid-col ms-sm6 " > 
<small>Created Date & Time</small>
<h3>24/12/2020|11:04 AM</h3>
 </div>
 </div>
 </div> 
 <div className={service_data_class}>
 <div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm6 " > 
<div  className={service_column_class}>

<small>Notification Type</small>
<h3>Z3</h3>
</div>
</div>
<div className="ms-Grid-col ms-sm6 ">
<small>Reported By</small>
<h3>James</h3>
  </div>
  </div>
</div>
<div className={service_data_class}>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm6 " > 
<small>Coding Group Description</small>
<p>Global Constraint Codes</p>

</div>
</div>
</div>
<div className={service_data_class}>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm12 " > 
<small>Coding code Description</small>
<p>To Be Determined</p>

</div>

</div>


</div>
<div className={service_data_class}>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm12 " > 
<small>Code Group - Object Part</small>
<p>Train Control & Communication</p>

</div>
</div>
</div>

<div className={service_data_class}>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm6 " > 
<small>Psrt of Object</small>
<h5>Degital Voice Announcment</h5>

</div>
</div>
  </div>
</div>
<div className={LongText} >
<small>LongText/Line</small>
<h3>CMS User Notes : </h3>
<h3>&lt; Enter additional notes here &gt;</h3>
<h3> Triage Notes : </h3>
<h3>&lt; The triage notes will be inserted here&gt;</h3>
</div>
 <span> <a  href="" className={ service_links}>read more</a> <a   href="" className={ service_links}>open newtab</a></span>

 


 <div className="ms-Grid" dir="ltr">
<h4>attachments</h4>
<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm4 " id="list" >
<div className={service_data_class}>
<CabinSvg/>
     </div>
     </div>
<div className="ms-Grid-col ms-sm4 "  id="list"> 
<div className={service_data_class}>
<CabinSvg/>
 </div>
 </div>
 </div>
 </div> 
<br />
<span > <a   href="" className={ service_links}>Diagnosis Guide</a> <a  href=""  className={ service_links}>Unit OverView</a>  <a   href="" className={service_links}>Open HMI</a></span>
    

      </FocusZone>
     
    </div>
    
    </div>
    <div className="ms-Grid" dir="rtl">

<div className="ms-Grid-row">
<div className="ms-Grid-col ms-sm6 " id="list" >


<button type="submit"  className={filled_button} >submit</button>
     </div>
<div className="ms-Grid-col ms-sm6 "  id="list"> 

<RoundButton text="save as draft" />
 
 </div>
 </div>
 </div>

   
  </div>









)

}
export default Description;