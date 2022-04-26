import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: text,
                    },
                }
            );
            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => {
            if (text) {
                search();
            }
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated conte">
                    <a
                        href={`https://en.wikipedia.org/wiki/${result.title}`}
                        className="ui button"
                    >
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        className="input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
