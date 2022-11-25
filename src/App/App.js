import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import "./App.css";
import { useState } from "react";


const App = () => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

    const onLast = (newQuestionsAndAnswers) => {
        setQuestionsAndAnswers(newQuestionsAndAnswers);
    }

    return (
            <Routes>
                <Route path="/vragen/:number" element={<QuestionsRouter onLast={onLast} />}>
                </Route>
                <Route path="/outro" element={<Outro questionsAndAnswers={questionsAndAnswers}></Outro>}>
                </Route>
                <Route path="/" element={<Intro />}></Route>
            </Routes>
    );

}

export default App;