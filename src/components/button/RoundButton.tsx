import { DefaultButton } from "@fluentui/react";
import { classNames } from "./classess";

const RoundButton = (props: any) => {
  const { roundButton, roundActive } = classNames;
  const active: any = props.active ? roundActive : null;
  return (
    <DefaultButton
      className={[roundButton, active].join(" ")}
      text={props.text}
    />
  );
};

export default RoundButton;
