import "./App.css";
import { Gentlemen } from "./components/gentlemen";
import { Header } from "./components/header";
import { Card } from "./components/card";

export function App() {
    return (
        <>
            <div>
                <Header></Header>
                <Gentlemen></Gentlemen>
                <Card></Card>
            </div>
        </>
    );
}

export default App;
