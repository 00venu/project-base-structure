import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";


export const classNames: any = mergeStyleSets(
    {
        panelWrap:{
            padding:'10px'
        },
        trainAlertParent: {
            backgroundColor: "#141414",
            borderRadius: "3px",
            padding: "10px",
            marginTop: "20px",
            display: "flex", 
            justifyContent: "center" 
          },
    })