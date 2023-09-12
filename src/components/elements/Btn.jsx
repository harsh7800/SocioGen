import { useContext } from "react";
import "./Button.css";
import PropTypes from "prop-types";
import Context from "../../Context";
const Button = ({ name, svg, className, link }) => {
  const { setOver } = useContext(Context);

  return (
    <button
      className={className}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onClick={() => window.open(link, "_blank")}
    >
      <i
        className={`fa-brands fa-${svg}`}
        id="svgIcon"
        style={{ fontSize: "1.1em", color: "white" }}
      ></i>
      <span className="text">{name}</span>
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Button;
