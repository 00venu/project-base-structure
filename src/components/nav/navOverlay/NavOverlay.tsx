import { classNames } from "./classess";

const NavOverlay = () => {
  const { navOverlayWrapper } = classNames;

  const childHandler = (e: any) => {
    e.stopPropagation();
    console.log("test");
  };
  return (
    <div className={navOverlayWrapper} onClick={childHandler}>
      Test
    </div>
  );
};

export default NavOverlay;
