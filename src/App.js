import "./App.css";
import { useState } from "react";
import JoinScreen from "./components/JoinScreen.js";
import Navbar from "./components/Navbar.js";
import QuizScreen from "./components/QuizScreen.js";

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
