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
  "0%": { width: "135px" },
  "100%": { width: "390px" },
});
const closeLeft: string = keyframes({
  "0%": { width: "390px" },
  "100%": { width: "135px" },
});

const openRight: string = keyframes({
  "0%": { width: "85px" },
  "100%": { width: "33%" },
});
const closeRight: string = keyframes({
  "0%": { width: "33%" },
  "100%": { width: "85px" },
});

export const classNames = mergeStyleSets({
  parent: {
    display: "flex",
  },
  wrapLeft: {
    width: "135px",
    marginTop: "80px",
  },
  wrapRight: {
    width: "85px",
    marginTop: "80px",
  },
  wrapper: {
    marginTop: "80px",
    border: "1px solid #666",
    padding: "20px",
    flexGrow: 1,
  },
  openLeft: {
    animationDuration: AnimationVariables.durationValue1,
    animationName: openLeft,
    width: "390px",
  },
  closeLeft: {
    animationDuration: AnimationVariables.easeFunction2,
    animationName: closeLeft,
    width: "135px",
  },
  openRight: {
    animationDuration: AnimationVariables.durationValue2,
    animationName: openRight,
    width: "33%",
  },
  closeRight: {
    animationDuration: AnimationVariables.easeFunction2,
    animationName: closeRight,
    width: "85px",
  },
});
