import { useSelector } from "react-redux";
import { StyledDiv, StyledLongDetailts, StyledLongText, StyledSpan, StyledTable, StyledTableHeader } from "./styledComponents";
import { RootState } from "../../../store/reducers";

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

export const Constraints = () => {
  const unitMaintenance = useSelector((state:RootState ) => state.unitMaintenanceLog.SNDetail);
  return (
    <StyledDiv>
      <div>
        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
            Constraints
            </StyledTableHeader>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">MOS Reference No.</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.minimum_os_detail.mos_ref_no}</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Active Constraints</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.minimum_os_detail.mos_constraints}</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Waiver Reference No.</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.waiver_details.waiver_ref_no}</StyledSpan>
            </td>
            <td colSpan={2}> 
              <StyledSpan variant="p2">Waived Constraints</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.waiver_details.waiver_constraints}</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Complete By Date</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.minimum_os_detail.complete_by_date}</StyledSpan>
            </td>
            <td colSpan={2}> 
              <StyledSpan variant="p2">Waiver Validity Period</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.waiver_details.waiver_validity_period}</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
            Code Group Details
            </StyledTableHeader>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Code Group</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.maintenance_plant_detail.code_group}I</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Unit</StyledSpan>
              <StyledSpan variant="p1">D104</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Equipment Description</StyledSpan>
              <StyledSpan variant="p1">RDA2301 - Intercity A-CAR</StyledSpan>
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
