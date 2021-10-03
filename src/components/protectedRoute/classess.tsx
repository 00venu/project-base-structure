import {
  mergeStyleSets,
  AnimationVariables,
  keyframes,
} from "@fluentui/react/lib/Styling";

const duration = {
  durationValue1: "0.150s",
  durationValue2: "0",
  durationValue3: "0.367s",
  durationValue4: "0.467s",
  easeFunction1: "cubic-bezier(.1,.9,.2,1)",
  easeFunction2: "cubic-bezier(.1,.25,.75,.9)",
};

const openLeft: string = keyframes({
  "0%": { margin: "80px 80px 0 135px" },
  "100%": { margin: "80px 80px 0 390px" },
});
const closeLeft: string = keyframes({
  "0%": { margin: "80px 80px 0 390px" },
  "100%": { margin: "80px 80px 0 135px" },
});

export const classNames = mergeStyleSets({
  wrapper: {
    margin: "80px 80px 0 135px",
    border: "1px solid #666",
    padding: "20px",
  },
  openLeft: {
    animationDuration: AnimationVariables.durationValue1,
    animationName: openLeft,
    margin: "80px 80px 0 390px",
  },
  closeLeft: {
    animationDuration: AnimationVariables.easeFunction2,
    animationName: closeLeft,
    margin: "80px 80px 0 135px",
  },
});
