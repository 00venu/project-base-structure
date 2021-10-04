import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navData } from "../leftNav";
import { classNames } from "./classess";

const NavOverlay = () => {
  const {
    navOverlayWrapper,
    expandedNav,
    mainicon,
    navTip,
    submenuBackground,
  } = classNames;
  const [showSubNav, setShowSubNav]: any = useState(null);
  const childHandler = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className={navOverlayWrapper} onClick={childHandler}>
      <nav>
        <ul className={expandedNav}>
          {navData.map((item) => {
            const dynamicClass: any = submenuBackground;
            return (
              <li className={showSubNav === item.name ? dynamicClass : null}>
                <NavLink
                  to={item.path}
                  onClick={() =>
                    setShowSubNav((state: any) =>
                      state !== item.name ? item.name : null
                    )
                  }
                >
                  <span className={mainicon}>{item.icon}</span>
                  {item.name}
                  {item.subNav ? <p className={navTip}>{item.tip}</p> : null}
                </NavLink>
                {item.subNav ? (
                  <ul>
                    {item.subNav.map((subItem) => {
                      return (
                        <li>
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavOverlay;
