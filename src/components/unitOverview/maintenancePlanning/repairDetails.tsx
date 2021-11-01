import {
  StyledDiv,
  StyledLink,
  StyledLongDetailts,
  StyledLongText,
  StyledSpan,
  StyledTable,
  StyledTableHeader,
} from "./styledComponents";
import attachmentIcon from "../../../assets/img/unitOverView/attachment_icon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";

const longText = `          Hyderabad is the capital of southern India's Telangana state. A
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

export const RepairDetails = () => {
  const unitMaintenance = useSelector((state:RootState ) => state.unitMaintenanceLog.SNDetail);
console.log(unitMaintenance);
  return (
    <StyledDiv>
      <div>
        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>Object Details</StyledTableHeader>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">
                Code Group Object Parts Description
              </StyledSpan>
              <StyledSpan variant="p1">
                Train Control & Communications
              </StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Part of Object Description</StyledSpan>
              <StyledSpan variant="p1">Networking Routing - Switch</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>
              Damage & Cause Details
            </StyledTableHeader>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Damage Code Short Text</StyledSpan>
              <StyledSpan variant="p1">Faulty system</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Damage Code Description</StyledSpan>
              <StyledSpan variant="p1">sfsd</StyledSpan>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Cause Code Short Text</StyledSpan>
              <StyledSpan variant="p1">UGLR-C01</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Cause Code Description</StyledSpan>
              <StyledSpan variant="p1">Unknown</StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>Activity Details</StyledTableHeader>
          </tr>
          <tr>
            <td style={{ height: "80px",position:"relative"}}>
              <img src={attachmentIcon} />
              <img src={attachmentIcon} />
              <img src={attachmentIcon} />
              <img src={attachmentIcon} />
              <div style={{position:"absolute",right:"0px"}}>
              <StyledLink to="">Diagnostic Guide</StyledLink>
              <StyledLink to="">Open Driver HMI</StyledLink>
              <StyledLink to="">Unit Overview</StyledLink>
              <StyledLink to="">Go to SAP</StyledLink>
              </div>
            </td>
          </tr>
          </tbody>
        </StyledTable>
      </div>
      <div>
        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>Activity Details</StyledTableHeader>
          </tr>
          <tr>
            <td colSpan={2}>
              <StyledSpan variant="p2">Activity Code Short Text</StyledSpan>
              <StyledSpan variant="p1">{unitMaintenance.value.maintenance_activity.activity_short_text}</StyledSpan>
            </td>
            <td colSpan={2}>
              <StyledSpan variant="p2">Activity Code Description</StyledSpan>
              <StyledSpan variant="p1">
                Replaced as an entire assembly
              </StyledSpan>
            </td>
          </tr>
          </tbody>
        </StyledTable>

        <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader colSpan={4}>Long Text</StyledTableHeader>
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
