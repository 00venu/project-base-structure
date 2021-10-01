import { DefaultButton, IIconProps } from "@fluentui/react";
import { classNames } from "./classess";
import { ReactComponent as MenuIcon } from "../assets/img/layout/menu_icon.svg";
import { ReactComponent as CMSLogo } from "../assets/img/layout/INTEGRACMS.svg";
import { ReactComponent as RefreshIcon } from "../assets/img/layout/top_refresh.svg";

const Header = () => {
  const {
    header,
    hamberger,
    hambergerIcon,
    mainLogo,
    headerRight,
    updateInfo,
    refreshIcon,
    defaultBtn,
    userDropdown,
    profileIcon,
  } = classNames;
  return (
    <div className={header}>
      <div className={hamberger}>
        <MenuIcon className={hambergerIcon} />
      </div>
      <h1>
        <CMSLogo className={mainLogo} />
      </h1>
      <div className={headerRight}>
        <div className={updateInfo}>Last Updated: 05/01/2021 09:20 AM </div>
        <RefreshIcon className={refreshIcon} />
        <DefaultButton className={defaultBtn} type="submit" onClick={() => {}}>
          + Create Service Notification
        </DefaultButton>
        <div className={userDropdown}>
          <div>
            <h3 className="name">James Smith</h3>
            <span className="role">Help Desk User</span>
          </div>
          <div className={profileIcon}>JS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
