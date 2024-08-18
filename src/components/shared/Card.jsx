import PropTypes from "prop-types";

function Card({ children, reverse = "true" }) {
   //return <div className={`card ${reverse ? "reverse" : ""}`}>{children}</div>;
   // Dark mode using Conditional Class

   //Dark mode using conditional styling
   return (
      <div
         className='card'
         style={{
            backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
            color: reverse ? "#fff" : "#000",
         }}
      >
         {children}
      </div>
   );
}

Card.propTypes = {
   children: PropTypes.node.isRequired,
   reverse: PropTypes.bool,
};
export default Card;
