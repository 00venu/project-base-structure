import { DefaultButton } from "@fluentui/react";
import { classNames } from "./classess";

const RoundButton = (props: any) => {
  const { roundButton } = classNames;
  return <DefaultButton className={roundButton} text={props.text} />;
};

export default RoundButton;
