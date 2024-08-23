import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
   const [text, setText] = useState("");
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState("");
   const [rating, setRating] = useState(10);

   const handleTextChange = (e) => {
      if (text === "") {
         setBtnDisabled(true);
         setMessage(null);
      } else if (text !== "" && text.trim().length <= 10) {
         setMessage("Text must be atleast 10 characters!");
         setBtnDisabled(true);
      } else {
         setMessage(null);
         setBtnDisabled(false);
      }
      //console.log(e.target.value);
      setText(e.target.value);
   };

   return (
      <Card>
         <form>
            <h2> How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
               <input
                  onChange={handleTextChange}
                  type='text'
                  placeholder='Write a Review'
                  value={text}
               />
               <Button type='submit' isDisabled={btnDisabled}>
                  Send
               </Button>
            </div>

            {message && <div className='message'>{message}</div>}
         </form>
      </Card>
   );
}
export default FeedbackForm;
