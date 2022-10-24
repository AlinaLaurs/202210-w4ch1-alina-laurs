import { useState } from "react";
import { famousGentlemen } from "./models/data";

export function Gentlemen() {
    const [counter, setCounter] = useState(0);

    const handler = () => {
        setCounter(famousGentlemen.length);
    };
    const clickAll = () => {
        famousGentlemen.forEach((famousGentlemen) => {
            famousGentlemen.selected = true;
            handler();
        });
    };

    return (
        <>
            <section className="controls">
                <p className="info">
                    <span>{counter}</span> gentlemen pointing at you
                </p>
                <button className="button button--select" onClick={clickAll}>
                    Select all
                </button>
            </section>
        </>
    );
}
