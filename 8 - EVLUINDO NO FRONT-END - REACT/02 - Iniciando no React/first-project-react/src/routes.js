import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Users from './containers/Users';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
//import Users from './containers/Users'

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} /> 
                <Route exact path="/usuarios" element={<Users/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes*/