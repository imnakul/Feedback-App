//import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
//import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
   //const [feedback, setFeedback] = useState(FeedbackData);

   return (
      <FeedbackProvider>
         <Router>
            <Header />
            <div className='container'>
               <Routes>
                  <Route
                     exact
                     path='/'
                     element={[
                        <FeedbackForm />,
                        <FeedbackStats />,
                        <FeedbackList />,
                     ]}
                  />
               </Routes>

               <Routes>
                  <Route exact path='/about' element={<AboutPage />} />
               </Routes>
               <AboutIconLink />
            </div>
         </Router>
      </FeedbackProvider>
   );
}

export default App;
