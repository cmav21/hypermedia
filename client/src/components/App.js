import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>
const SurveryNew = () => <h2>SurveryNew</h2>

const App = () => (
    <div className="container">
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route exact path="/surveys/new" component={SurveryNew}/>
        </BrowserRouter>
    </div>
);

export default App;