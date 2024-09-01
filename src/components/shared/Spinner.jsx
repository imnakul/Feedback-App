import spinner from "../../resources/spinner.gif";

function Spinner() {
   return (
      <img
         src={spinner}
         alt='Loading...'
         style={{ width: "100px", margin: "auto", display: "block" }}
      ></img>
   );
}
export default Spinner;
