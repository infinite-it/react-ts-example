import './App.css';
import {Welcome} from "./components/Welcome";
import {LoggedIn} from "./components/state/LoggedIn";
import {User} from "./components/state/User";

function App() {
    return (
        <div>
            <Welcome name={"jin"}/>
            <LoggedIn></LoggedIn>
            <User></User>
        </div>
    );
}

export default App;
