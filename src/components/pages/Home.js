import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../images/DubDevLogo.png';
import background from "../../images/headerBackground.png";


export default class Home extends React.Component {
    render() {
        const pStyle = {
            textAlign: 'center',
            width: '80%',
            height: '300px',
            borderradius: '21px 21px 0 0'
        };
        const headerStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "102vh"
        };

        return (
            <section className="home bg-dark">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={headerStyle}>
                    <div className="col-md-8 p-4 mx-auto my-5 headline">
                        <img src={logo} alt="logo" className="w-100" />
                        <p className="lead font-weight-normal">Making websites affordable for small businesses in the Seattle &amp; Bellevue area</p>
                        <a className="btn btn-outline-secondary" href="#contact">Get a quote</a>
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 py-md-5 pl-md-3">
                    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">And an even wittier subheading.</p>
                        </div>
                        <div className="bg-light box-shadow mx-auto" style={pStyle}></div>
                    </div>
                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">And an even wittier subheading.</p>
                        </div>
                        <div className="bg-dark box-shadow mx-auto" style={pStyle}></div>
                    </div>
                </div>
            </section>
        );
    }
}