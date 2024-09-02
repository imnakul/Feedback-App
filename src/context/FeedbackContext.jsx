import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

   const [feedback, setFeedback] = useState([]);

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });

   useEffect(() => {
      fetchFeedback();
   }, []);

   //Fetch Feedback
   const fetchFeedback = async () => {
      const response = await fetch("/feedback?sort=id&_order=asc");
      const data = await response.json();

      //Server side no sorting , so as it is data
      /*setFeedback(data);
      setIsLoading(false);*/

      //Doing client side sorting to Keep/show most recent feedback at top
      const sortedData = data.sort((a, b) => b.id - a.id);
      setFeedback(sortedData);
      setIsLoading(false);
   };

   //add feedback id creation automatic - random alphanumeric number changed to Incrementing id number
   const addFeedback = async (newFeedback) => {
      // Fetch existing feedback to determine the max ID
      const response = await fetch("/feedback");
      const feedback = await response.json();
      const maxId =
         feedback.length > 0
            ? Math.max(...feedback.map((item) => parseInt(item.id, 10)))
            : 0;

      // Set the new ID
      newFeedback.id = (maxId + 1).toString();

      // Add the new feedback with the incremented ID
      const postResponse = await fetch("/feedback", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newFeedback),
      });

      const data = await postResponse.json();

      setFeedback([data, ...feedback]);
   };

   //to delete feedback
   const deleteFeedback = async (id) => {
      if (window.confirm("Are you sure you want to delete?")) {
         await fetch(`/feedback/${id}`, { method: "DELETE" });

         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   //Update Feedback item
   const updateFeedback = async (id, updItem) => {
      const response = await fetch(`/feedback/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(updItem),
      });

      const data = await response.json();

      setFeedback(
         feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
   };

   //set item to be updated
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true,
      });
   };

   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback, //function used to edit item
            feedbackEdit, //actal state which is holding item to be edited
            updateFeedback,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};

export default FeedbackContext;
