import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'; 
import { Home } from './Home';
import { About } from './About';

export class Header extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <ul className="navbar">
                        <li>
                            <Link className="item" to="/">BLOG</Link>
                        </li>
                        <li>
                            <Link className="item" to="/about">ABOUT</Link>
                        </li>
                    </ul>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                </div>
            </Router>

        );
    }
}

