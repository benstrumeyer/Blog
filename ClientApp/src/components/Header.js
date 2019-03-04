import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Home } from './Home';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="navbar">
                    <div className="item">BLOG</div>
                    <div className="item">ABOUT</div>
                </div>
            </div>
        );
    }
  }