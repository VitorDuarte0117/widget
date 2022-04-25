import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a frond end JavaScript framework",
        },
        {
            title: "Why use React?",
            content: "React is more famous",
        },
        {
            title: "How do you use React?",
            content: "Who knows ",
        },
    ];
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
