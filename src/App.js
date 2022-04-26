import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
            <Search />
        </div>
    );
};

export default App;
