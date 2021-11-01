import { DetailsList, DetailsListLayoutMode } from "@fluentui/react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 300px;
  .ms-DetailsList-contentWrapper {
    height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default function TrainDetails() {
  const renderList = [
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
    {
      train_number: "121331",
      unit_number: "coupling",
      alarm_source: ["AAC", "RCC", "MAC"],
      status: "08/01/2021",
    },
  ];

  const columns = [
    {
      key: "column1",
      name: "Car No.",
      fieldName: "train_number",
      minWidth: 50,
      maxWidth: 95,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column2",
      name: "Symptom",
      fieldName: "unit_number",
      minWidth: 50,
      maxWidth: 120,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column3",
      name: "Constraints",
      fieldName: "alarm_source",
      minWidth: 150,
      maxWidth: 180,
      isResizable: true,
      isSorted: true,
      onRender: (item: any) => {
        return (
          item &&
          item["alarm_source"].map((i: string) => (
            <span
              key={i}
              style={{
                height: "18px",
                background: "#333D3D",
                borderRadius: "4px",
                padding: "5px 10px",
                marginRight: "5px",
              }}
            >
              {i}
            </span>
          ))
        );
      },
    },
    {
      key: "column4",
      name: "Complete By",
      fieldName: "status",
      minWidth: 60,
      maxWidth: 140,
      isResizable: true,
      isSorted: true,
    },
  ];

  return (
    <>
      <StyledDiv>
        <DetailsList
          items={renderList}
          columns={columns}
          selectionMode={0}
          onRenderRow={(props, defaultRender: any) => (
            <div>{defaultRender(props)}</div>
          )}
          layoutMode={DetailsListLayoutMode.justified}
        />
      </StyledDiv>
    </>
  );
}
