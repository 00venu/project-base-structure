import {
  mergeStyleSets,
  AnimationStyles,
  // AnimationClassNames,
  //AnimationVariables,
} from "@fluentui/react/lib/Styling";

export const panelCards: any = {
  panelHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:"0px 5px",
    h3: {
      fontFamily: "roboto-reg",
    },
  },
  searchIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
    cursor: "pointer",
  },
  cardsParent: {
    height: "89vh",
    overflow: "auto",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#2E2E33",
    marginBottom: "10px",
    boxSizing: "border-box",
    padding: "10px",
    borderRadius: "3px",
    cursor: "pointer",
    selectors: {
      "&:hover": {
        backgroundColor: "#333D3D",
      },
    },
    ul: {
      display: "flex",
      selectors: {
        "& ul:last-child": {
          fontSize: "12px",
        },
      },
      li: {
        listStyle: "none",
        textAlign: "right",
        selectors: {
          "& li:first-child": {
            paddingRight: "10px",
            position: "relative",
            ":after": {
              content: "'|'",
              position: "absolute",
              top: 0,
              right: "4px",
              bottom: 0,
              margin: "auto",
              color: "#666",
            },
          },
        },
      },
    },
  },
  cardHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBody: {
    padding: "20px 0",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    div: {
      display: "flex",
      alignItems: "center",
    },
  },
  labelWidth: {
    maxWidth: "70px",
  },
  labelWidth2: {
    maxWidth: "140px",
  },
  service_data_class:{
    border: "solid  gray 1px ",
    paddingLeft:"5px",
    
    
    
      },
      notificationcontainer:{
        overflow:"hidden"
        
    
        
      },
      LongText:{
    marginTop:"10px",
    padding:"20px"
      },
      service_links:{
        color:"teal",
        
        marginTop:"30px",
        padding:"15px",
    
      },
      description_body:{
        backgroundColor: "#2E2E33",
        height:"95vh",
        padding:"10px"
      },
      filled_button:{
       
        border: "1px solid #008B98",
        boxSizing: "border-box",
        lineHeight: " 16px",
        borderRadius: " 50px",
        color: "white",
        whiteSpace: "nowrap",
        backgroundColor: "darkcyan",
        padding:"5px",
        width:"130px"
       },
       service_column_class:{
    borderRight:"1px solid gray",
    padding:"5px"
    
    
       },
    
       
       DescrptionParent: {
        height: "78vh",
        overflow: "auto",
        marginTop: "20px",
     
      },
       DescriptionHeader:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom:"solid gray 1px",
        borderTop:"solid gray 1px",
        padding:"12px"
       },
     
};

export const classNames: any = mergeStyleSets(
  {
    minimizedPanel: {   
      height: "100%",
      paddingTop: "30px",
      backgroundColor: "#333D3D;",     
      textAlign: "center",
    },
    textRotation: {
      transform: "rotate(-90deg)",
      color: "#F5F5F5",
      whiteSpace: "nowrap",
      marginTop: "90px",
    },
    countRotation:{
      transform: "rotate(-90deg)",
    },
    arrowRotation: {
      transform: "rotate(-270deg)",          
    },
    arrowRotation90: {
      transform: "rotate(-90deg)",          
    },
    textContainer: {
      marginTop: "30px",
      position: "relative",
      span: {
        position: "absolute",
        top: "4px",
        right: 0,
        left: 0,
        bottom: 0,
        margin: "auto",
      },
    },
    leftArrow: {
      cursor: "pointer",
      position: "absolute",
      top: "30px",
      right: "-20px",
      bottom: 0,
    },
    maximizedPanel: {
      // width: "300px",
      height: "100%",
      backgroundColor: "#26262D",
      // position: "fixed",
      // top: "60px",
      // left: "50px",
      // bottom: 0,
      // zIndex: "998",
      borderTop: "1px solid #666",
      padding: "20px 10px",
      boxSizing: "border-box",
    },
    leftArrowClose: {
      cursor: "pointer",
  
    },
  
    maximizedPanelOpen: {
      ...AnimationStyles.slideRightIn400,
    },
    maximizedPanelClose: {
      ...AnimationStyles.slideLeftOut400,
    },
  },
  panelCards
);
