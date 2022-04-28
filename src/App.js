import React, { useState } from "react";

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

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                />
            ) : null}
        </div>
    );
};

export default App;
