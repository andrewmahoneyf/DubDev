import React, { Component } from 'react';
import { db } from '../../firebase';

const initialState = {
    first: '',
    last: '',
    email: '',
    phone: '',
    company: '',
    message: ''
};

const resetState = {
    first: '',
    last: '',
    email: '',
    phone: '',
    company: '',
    message: ''
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value });

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.state = { ...initialState };
    }

    // Handle form submit and post to firebase messages collection
    handleSubmit = event => {
        event.preventDefault();

        const {
            first,
            last,
            email,
            phone,
            company,
            message
        } = this.state;

        db.sendMessage(first, last, email, phone, company, message)
            .then(function (response) {
                // Display alert and hide after 3 seconds
                document
                    .getElementById('alert')
                    .style
                    .display = 'block';
                setTimeout(function () {
                    document
                        .getElementById('alert')
                        .style
                        .display = 'none';
                }, 3000);
            })
            .catch(function (error) {
                return 'Error occurred. Please refresh page and try again.';
            });

        // Clear form
        this.setState(resetState);
    }

    render() {
        const {
            first, last,
            email, message
        } = this.state;

        // Validate the form
        const hasEmptyInput = first === '' || last === '' || !ValidateEmail(email);
        const isInvalid = message === '';
        var placeholder = "Please fill in your name and email first.";
        if (!hasEmptyInput) {
            placeholder = "Message...";
        }

        return (
            <section className="contact align-center">
                <form id="contactForm" onSubmit={this.handleSubmit}>
                    <div className="alert alert-success container w-100" id="alert" role="alert">
                        <h2 className="alert-heading">Your message has been sent!</h2>
                    </div>

                    <div className="input-group mb-3 container">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name</span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First"
                            id="first"
                            required="true"
                            value={this.state.first}
                            onChange={event => this.setState(byPropKey('first', event.target.value))}
                            />
                        <input
                            type="text"
                            className="form-control"
                            id="last"
                            placeholder="Last"
                            value={this.state.last}
                            onChange={event => this.setState(byPropKey('last', event.target.value))}
                            />
                    </div>

                    <div className="input-group mb-3 container">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Contact</span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required="true"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            />
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="Phone"
                            required="false"
                            value={this.state.phone}
                            onChange={event => this.setState(byPropKey('phone', event.target.value))} />
                    </div>

                    <div className="input-group mb-2 container">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Company</span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="company"
                            placeholder="If applicable..."
                            required="false"
                            value={this.state.company}
                            onChange={event => this.setState(byPropKey('company', event.target.value))} />
                    </div>

                    <div className="container">
                        <input
                            type="text"
                            placeholder={placeholder}
                            id="message"
                            className="mb-3 container"
                            disabled={hasEmptyInput}
                            value={this.state.message}
                            onChange={event => this.setState(byPropKey('message', event.target.value))}
                            required />
                        <br />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className="btn btn-secondary btn-lg btn-block"
                            onClick={this.handleSubmit}>Request a quote</button>
                    </div>
                </form>
            </section>
        );
    }
}