import { NavLink, Link, useLocation } from "react-router-dom";
import { classNames, navData } from "./";

const LeftNav = () => {
  const { leftNav, navItems, active } = classNames;
  const { pathname } = useLocation();
  return (
    <nav className={leftNav}>
      <ul className={navItems}>
        {navData.map((item, i) => {
          let isActive: any = {};
          if (item.subNav) {
            const paths = item.subNav.map((v) => v.path);
            isActive["isActive"] = () =>
              [item.path, ...paths].includes(pathname);
          }
          return (
            <li key={i}>
              <NavLink
                exact
                to={item.path}
                activeClassName={active}
                {...isActive}
              >
                {item.icon}
                {item.subNav ? <span>{item.tip}</span> : null}
              </NavLink>
              {item.subNav ? (
                <ul>
                  {item.subNav.map((subItem, j) => {
                    return (
                      <li key={j}>
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
  );
};

export default LeftNav;
