import React from 'react'; //pour importer la librairie React
import './App.css'; //pour relier les styles css
import Eshop from './pages/ESHOP';
import Compte from './pages/COMPTE';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Eshop />} />
                <Route path="/compte" element={<Compte />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;