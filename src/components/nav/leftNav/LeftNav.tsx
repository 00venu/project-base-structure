import { useHistory } from "react-router-dom";
import { HomeSVG, UOSVG, classNames } from "./";

const LeftNav = () => {
  const history = useHistory();
  const { leftNav, navItems } = classNames;
  const navigateHandler = (val: any) => {
    history.push(val);
  };
  return (
    <div className={leftNav}>
      <ul className={navItems}>
        <li>
          <HomeSVG onClick={() => navigateHandler("/")} />
        </li>
        <li>
          <UOSVG onClick={() => navigateHandler("/otherPage")} />
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
