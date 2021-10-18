import { useState, useRef, lazy, Suspense } from "react";
import { DefaultButton } from "@fluentui/react";
import {
  MenuIcon,
  CloseIcon,
  CMSLogo,
  RefreshIcon,
  Logout,
  useOnClickOutside,
  classNames,
} from "./";
import ServiceNotification from "../panels/createServiceNotification";

const NavOverlay: any = lazy(() => import("../nav/navOverlay/NavOverlay"));

const Header = ({ createPanelHandler }: any) => {
  const [userDrop, setUserDrop] = useState(false);
  const [hamNav, setHamNav] = useState(false);
  const [createPanelState, seCreatePanelState] = useState(true);
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
    userDropOptions,
  } = classNames;
  const ref: any = useRef();
  const refHam: any = useRef();

  useOnClickOutside(ref, () => setUserDrop(false));
  useOnClickOutside(refHam, () => setHamNav(false));

  const userDropHandler = (e: any) => {
    setUserDrop((state) => !state);
  };

  const childHandler = (e: any) => {
    e.stopPropagation();
    console.log("test");
  };
  const hambergerHandler = () => {
    setHamNav((state) => !state);
  };

  const createPanelOpenHandler = () => {
   
    setTimeout(() => createPanelHandler(), 0);
  };

  return (
    <div className={header}>
        {/* <div>
        <ServiceNotification create={createPanelState} />
      </div> */}
      <div className={hamberger} onClick={hambergerHandler} ref={refHam}>
        {hamNav ? (
          <>
            <CloseIcon className={hambergerIcon} />
            <Suspense fallback="">
              <NavOverlay />
            </Suspense>
          </>
        ) : (
          <MenuIcon className={hambergerIcon} />
        )}
      </div>
      <h1>
        <CMSLogo className={mainLogo} />
      </h1>
      <div className={headerRight}>
        <div className={updateInfo}>Last Updated: 05/01/2021 09:20 AM </div>
        <RefreshIcon className={refreshIcon} />
        <DefaultButton className={defaultBtn} type="submit" onClick={() => createPanelOpenHandler()}>
          + Create Ticket
        </DefaultButton>
        <div className={userDropdown} onClick={userDropHandler} ref={ref}>
          <div>
            <h3 className="name">James Smith</h3>
            <span className="role">Help Desk User</span>
          </div>
          <div className={profileIcon}>JS</div>
          {userDrop ? (
            <ul className={userDropOptions}>
              <li onClick={childHandler}>
                <span>LogOut</span> <Logout />
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
