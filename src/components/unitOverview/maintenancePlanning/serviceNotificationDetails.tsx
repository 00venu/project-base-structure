import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store/reducers";
import { Typography } from "../../../typography";
import { StyledDiv, StyledLongDetailts, StyledLongText, StyledSpan, StyledTable, StyledTableHeader } from "./styledComponents";

const longText = `Hyderabad is the capital of southern India's Telangana state. A
major center for the technology industry, it's home to many
upscale restaurants and shops. Its historic sites include
Golconda Fort, a former diamond-trading center that was once the
Qutb Shahi dynastic capital. The Charminar, a 16th-century
mosque whose 4 arches support towering minarets, is an old city
landmark near the long-standing Laad Bazaar.Hyderabad is the
capital of southern India's Telangana state. A major center for
the technology industry, it's home to many upscale restaurants
and shops. Its historic sites include Golconda Fort, a former
diamond-trading center that was once the Qutb Shahi dynastic
capital. The Charminar, a 16th-century mosque whose 4 arches
support towering minarets, is an old city landmark near the
long-standing Laad Bazaar.Hyderabad is the capital of southern
India's Telangana state. A major center for the technology
industry, it's home to many upscale restaurants and shops. Its
historic sites include Golconda Fort, a former diamond-trading
center that was once the Qutb Shahi dynastic capital. The
Charminar, a 16th-century mosque whose 4 arches support towering
minarets, is an old city landmark near the long-standing Laad
Bazaar.Hyderabad is the capital of southern India's Telangana
state. A major center for the technology industry, it's home to
many upscale restaurants and shops. Its historic sites include
Golconda Fort, a former diamond-trading center that was once the
Qutb Shahi dynastic capital. The Charminar, a 16th-century
mosque whose 4 arches support towering minarets, is an old city
landmark near the long-standing Laad Bazaar.Hyderabad is the
capital of southern India's Telangana state. A major center for
the technology industry, it's home to many upscale restaurants
and shops. Its historic sites include Golconda Fort, a former
diamond-trading center that was once the Qutb Shahi dynastic
capital. The Charminar, a 16th-century mosque whose 4 arches
support towering minarets, is an old city landmark near the
long-standing Laad Bazaar.Hyderabad is the capital of southern
India's Telangana state. A major center for the technology
industry, it's home to many upscale restaurants and shops. Its
historic sites include Golconda Fort, a former diamond-trading
center that was once the Qutb Shahi dynastic capital. The
Charminar, a 16th-century mosque whose 4 arches support towering
minarets, is an old city landmark near the long-standing Laad
Bazaar.Hyderabad is the capital of southern India's Telangana
state. A major center for the technology industry, it's home to
many upscale restaurants and shops. Its historic sites include
Golconda Fort, a former diamond-trading center that was once the
Qutb Shahi dynastic capital. The Charminar, a 16th-century
mosque whose 4 arches support towering minarets, is an old city
landmark near the long-standing Laad Bazaar.Hyderabad is the
capital of southern India's Telangana state. A major center for
the technology industry, it's home to many upscale restaurants
and shops. Its historic sites include Golconda Fort, a former
diamond-trading center that was once the Qutb Shahi dynastic
capital. The Charminar, a 16th-century mosque whose 4 arches
support towering minarets, is an old city landmark near the
long-standing Laad Bazaar.Hyderabad is the capital of southern
India's Telangana state. A major center for the technology
industry, it's home to many upscale restaurants and shops. Its
historic sites include Golconda Fort, a former diamond-trading
center that was once the Qutb Shahi dynastic capital. The
Charminar, a 16th-century mosque whose 4 arches support towering
minarets, is an old city landmark near the long-standing Laad
Bazaar.Hyderabad is the capital of southern India's Telangana
state. A major center for the technology industry, it's home to
many upscale restaurants and shops. Its historic sites include
Golconda Fort, a former diamond-trading center that was once the
Qutb Shahi dynastic capital. The Charminar, a 16th-century
mosque whose 4 arches support towering minarets, is an old city
landmark near the long-standing Laad Bazaar.Hyderabad is the
capital of southern India's Telangana state. A major center for
the technology industry, it's home to many upscale restaurants
and shops. Its historic sites include Golconda Fort, a former
diamond-trading center that was once the Qutb Shahi dynastic
capital. The Charminar, a 16th-century mosque whose 4 arches
support towering minarets, is an old city landmark near the
long-standing Laad Bazaar.Hyderabad is the capital of southern
India's Telangana state. A major center for the technology
industry, it's home to many upscale restaurants and shops. Its
historic sites include Golconda Fort, a former diamond-trading
center that was once the Qutb Shahi dynastic capital. The
Charminar, a 16th-century mosque whose 4 arches support towering
minarets, is an old city landmark near the long-standing Laad
Bazaar.`;

export const ServiceNotificationDetails = () => {
  const unitMaintenance = useSelector((state:RootState ) => state.unitMaintenanceLog.SNDetail);
  
  return (
    <StyledDiv>
      <div>
        <StyledTable>
          <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
              Service Details
            </StyledTableHeader>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">TIcket ID</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.defect_id}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Service Notification No.</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.sn_id}</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Description</StyledSpan>
              <StyledSpan variant="p1">
              {unitMaintenance.value.notification_description}
              </StyledSpan>
            </td>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Notification Type</StyledSpan>
              <StyledSpan variant="p1">Repair Request</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Service Order No.</StyledSpan>
              <StyledSpan variant="p1">6145236489654</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">PM Activity Type</StyledSpan>
              <StyledSpan variant="p1">Preventive maintenance</StyledSpan>
            </td>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Effect</StyledSpan>
              <StyledSpan variant="p1">Unplanned Unavailability</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Priority</StyledSpan>
              <StyledSpan variant="p1">HIGH</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Status</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.system_status}</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Reported by</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.reported_by}</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Location</StyledSpan>
              <StyledSpan variant="p1">Canberra</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
              Unit & Equipment Details
            </StyledTableHeader>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Train</StyledSpan>
              <StyledSpan variant="p1">WCW-4-2</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Unit</StyledSpan>
              <StyledSpan variant="p1">D104</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Car</StyledSpan>
              <StyledSpan variant="p1">RDA2301</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Driver</StyledSpan>
              <StyledSpan variant="p1">John</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">
                Functional Location Description
              </StyledSpan>
              <StyledSpan variant="p1">D5-Intercity Short Unit</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Equipment Description</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.equipment_details.functinal_loc_description}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Equipment</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.equipment_details.equipment}</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>
      </div>
      <div>
        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
              Administration Details
            </StyledTableHeader>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Created By</StyledSpan>
              <StyledSpan variant="p1">J Smith</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Created at Date & Time</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.key_dates.create_datetime}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Changed By</StyledSpan>
              <StyledSpan variant="p1">J Smith</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Changed at Date & Time</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.key_dates.update_datetime}</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Notification Date & Time</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.key_dates.notificaion_datetime}</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Service Order Date</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.key_dates.malfunctionstart_datetime}</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
              Long Text
            </StyledTableHeader>
          </tr>
          <tr>
            <td style={{position:"relative"}}>
              <StyledLongText>
              {  unitMaintenance.value.long_text ?  `${unitMaintenance.value.long_text.substring(0, 1000)}...` : `${longText.substring(0, 1000)}...`}
              </StyledLongText>
              <StyledLongDetailts to="">View full Text</StyledLongDetailts>
            </td>
          </tr>
          </tbody>
        </StyledTable>
      </div>
    </StyledDiv>
  );
};
