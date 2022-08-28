import './App.css';
import {Welcome} from "./components/Welcome";
import {LoggedIn} from "./components/state/LoggedIn";

function App() {
    return (
        <div>
            <Welcome name={"jin"}/>
            <LoggedIn></LoggedIn>
        </div>
    );
}

export default App;
