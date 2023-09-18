import "./hamburgerAnimation.css";
import PropTypes from "prop-types";
const HamburgerAnimation = ({ ref, hover, setHover }) => {
  return (
    <div
      ref={ref}
      className={`menu-icon ${hover ? "hovered" : ""}`}
      onClick={() => {
        setHover(!hover);
      }}
      style={{ background: "transparent" }}
    >
      <div className="menu-bar menu-bar1"></div>
      <div className="menu-bar menu-bar3"></div>
    </div>
  );
};

export default HamburgerAnimation;
HamburgerAnimation.propTypes = {
  hover: PropTypes.bool.isRequired,
  setHover: PropTypes.bool.isRequired,
  ref: PropTypes.element.isRequired,
};
