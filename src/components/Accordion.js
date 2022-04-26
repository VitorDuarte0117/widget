import React, { useState } from "react";

const Accordion = ({ items }) => {
    // Obs: array destructure, the activeIndex is reaching the first[0] element of the array and assigning it to a new variable called "activeIndex" and the setActiveIndex is reaching the second[1] element of the array and assigning with the variable setActiveIndex
    // the "" on useState("") is the initial value for the state, activeIndex="",then,setActiveIndex will fulfill as the changes are made
    const [activeIndex, setActiveIndex] = useState("");

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title${active}`}
                    onClick={() => {
                        onTitleClick(index);
                    }}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
