import {
  mergeStyleSets,
  AnimationVariables,
  keyframes,
} from "@fluentui/react/lib/Styling";

const duration = {
  durationValue1: "0.150s",
  durationValue2: "0.150s",
  durationValue3: "0.367s",
  durationValue4: "0.467s",
  easeFunction1: "cubic-bezier(.1,.9,.2,1)",
  easeFunction2: "cubic-bezier(.1,.25,.75,.9)",
};

const openLeft: string = keyframes({
  "0%": { marginLeft: "135px" },
  "100%": { marginLeft: "390px" },
});
const closeLeft: string = keyframes({
  "0%": { marginLeft: "390px" },
  "100%": { marginLeft: "135px" },
});

const openRight: string = keyframes({
  "0%": { marginRight: "85px" },
  "100%": { marginRight: "390px" },
});
const closeRight: string = keyframes({
  "0%": { marginRight: "390px" },
  "100%": { marginRight: "85px" },
});

export const classNames = mergeStyleSets({
  wrapper: {
    margin: "80px 85px 0 135px",
    border: "1px solid #666",
    padding: "20px",
  },
  openLeft: {
    animationDuration: AnimationVariables.durationValue1,
    animationName: openLeft,
    marginLeft: "390px",
  },
  closeLeft: {
    animationDuration: AnimationVariables.easeFunction2,
    animationName: closeLeft,
    marginLeft: "135px",
  },
  openRight: {
    animationDuration: AnimationVariables.durationValue2,
    animationName: openRight,
    marginRight: "390px",
  },
  closeRight: {
    animationDuration: AnimationVariables.easeFunction2,
    animationName: closeRight,
    marginRight: "85px",
  },
});
