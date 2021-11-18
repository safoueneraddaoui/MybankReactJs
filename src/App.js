import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ListClientsComponent from "./components/ListClientsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddClientsComponent from "./components/AddClientsComponent";

function App() {
  return (

    <div>
        <Router>
            <div >
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={ <ListClientsComponent />} />
                        <Route path="/clients" element={ <ListClientsComponent />} />
                        <Route path="/add-client" element={ <AddClientsComponent />} />
                    </Routes>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>

  );
}

export default App;
