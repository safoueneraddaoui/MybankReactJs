import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ListClientsComponent from "./components/ListClientsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (

    <div>
        <Router>
            <div className="container">
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={ <ListClientsComponent />} />
                        <Route path="/clients" element={ <ListClientsComponent />} />
                    </Routes>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>

  );
}

export default App;
