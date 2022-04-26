import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
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

    const options = [
        {
            label: "The Color Red",
            value: "red",
        },
        {
            label: "The Color Green",
            value: "green",
        },
        {
            label: "The Color Blue",
            value: "blue",
        },
    ];
    return (
        <div>
            <Dropdown options={options} />
        </div>
    );
};

export default App;
