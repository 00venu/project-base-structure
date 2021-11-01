import { useSelector } from "react-redux";
import { StyledContainer, StyledDiv, StyledImg, StyledTypography } from "./StyledComponents";

interface ICardProps {
  imgSrc?: string;
  header?: string;
  subHeader?: string;
  listItems?: string[];
}

export default function EventsCard({ imgSrc, header, subHeader,listItems }: ICardProps) {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImg src={imgSrc ? imgSrc : ""} />
        <div>
          <StyledTypography variant="head7" weight={600}>
            {header}
          </StyledTypography>
          <div style={{marginBottom:"10px"}}>
          {listItems && listItems?.map((i)=>(
            <span key={i} style={{height:"24px",background:"#333D3D",borderRadius:"4px",padding:"5px 10px", marginRight:"5px"}}>{listItems.length ? i : "..."}</span>
          ))}
          </div>
          <StyledTypography variant="p2" weight={500}>
            {subHeader}
          </StyledTypography>
        </div>
      </StyledDiv>
    </StyledContainer>
  );
}
