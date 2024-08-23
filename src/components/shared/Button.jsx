import PropTypes from "prop-types";

function Button({
   children,
   version = "primary",
   type = "button",
   isDisabled = "false",
}) {
   return (
      <button
         type={type}
         disabled={isDisabled}
         className={`btn btn-${version}`}
      >
         {children}
      </button>
   );
}

Button.propTypes = {
   children: PropTypes.node,
   version: PropTypes.string,
   type: PropTypes.string,
   isDisabled: PropTypes.bool,
};

export default Button;
