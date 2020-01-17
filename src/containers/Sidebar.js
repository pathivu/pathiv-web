import React, { Component } from 'react';
import '../stylesheets/containers/sidebar.scss'
import Logo from '../components/logo';
import Select from '../components/select';


export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Logo />
                <header>Search Settings</header>
                <div className="selector">
                    <label>Select Microservices</label>
                    <div className="selectContainer">
                        <Select />
                    </div>
                </div>                
            </div>
        )
    }
}

export default Sidebar
