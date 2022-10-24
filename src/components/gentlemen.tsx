import { useState } from "react";
import { Card } from "./card";

export function Gentlemen() {
    const famousGentlemen = [
        {
            id: 1,
            name: "Bertin Osborne",
            status: "Alive",
            profession: "Youtuber",
            twitter: "@osbourne",
            picture: "bertin.jpg",
            alternativeText: "Osbourne pointing at you",
            selected: true,
            letter: "B",
        },
        {
            name: "The Farytale",
            status: "RIP",
            profession: "Influencer",
            twitter: "pending",
            picture: "fary.jpg",
            alternativeText: "The Fary pointing at you",
            id: 2,
            selected: false,
            letter: "F",
        },
        {
            id: 3,
            name: "Julius Churchs",
            status: "Alive",
            profession: "Java developer",
            twitter: "@julius_churchs",
            picture: "julio.jpg",
            alternativeText: "Churchs pointing at you",
            selected: true,
            letter: "J",
        },
    ];

    const [info, setInfo] = useState(famousGentlemen);
    const renderGentlemen = famousGentlemen.map((value) => (
        <Card
            id={value.id}
            name={value.name}
            status={value.status}
            profession={value.profession}
            twitter={value.twitter}
            picture={value.picture}
            alternativeText={value.alternativeText}
            selected={value.selected}
            letter={value.letter}
        />
    ));
    return (
        <>
            <ul className="gentlemen">{renderGentlemen}</ul>;
        </>
    );
}
