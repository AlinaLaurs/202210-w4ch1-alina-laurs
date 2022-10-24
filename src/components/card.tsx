import { famousGentlemen } from "./models/data";

export function Card() {
    return (
        <>
            {famousGentlemen.map((value) => (
                <li className="gentleman">
                    <div className="gentleman__avatar-container">
                        <img
                            className="gentleman__avatar"
                            src={"../../assets/" + value.picture}
                            alt=" "
                        />
                        <span className="gentleman__initial">
                            {value.name.slice(0, 1)}
                        </span>
                    </div>
                    <div className="gentleman__data-container">
                        <h2 className="gentleman__name">{value.name}</h2>
                        <ul className="gentleman__data-list">
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Profession:
                                </span>
                                {value.profession}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Status:
                                </span>{" "}
                                {value.status}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Twitter:
                                </span>{" "}
                                {value.twitter}
                            </li>
                        </ul>
                    </div>
                    <p className="icon gentleman__icon fas fa-check">✔</p>
                    <p className="icon gentleman__icon gentleman__icon--delete fas fa-times">
                        ✕
                    </p>
                </li>
            ))}
        </>
    );
}
