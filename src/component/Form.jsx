import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        userName: '',
        userEmail: '',
        password: '',
        userMessage: '',
        language: '',
        termsAndConditions: false,
        formSubmit: false,
    }

    handleChange = (e) => {
        // if (e.target.name === 'userName') {
        //     this.setState({ userName: e.target.value})
        // }
        // else if (e.target.name === 'userEmail') {
        //     this.setState({ userEmail: e.target.value})
        // }
        // else if (e.target.name === 'password') {
        //     this.setState({ password: e.target.value})
        // }
        // else if (e.target.name === 'language') {
        //     this.setState({ language: e.target.value})
        // }
        // else if (e.target.name === 'userMessage') {
        //     this.setState({ userMessage: e.target.value})
        // }
        // else if (e.target.name === 'termsAndConditions') {
        //     this.setState({ termsAndConditions: e.target.checked})
        // }

        if (e.target.name === 'termsAndConditions') {
            this.setState({
                [e.target.name]: e.target.checked,
            })
        }else{
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { userName, userEmail, password, userMessage, language, termsAndConditions, formSubmit } = this.state;

        console.log(userName, userEmail, password, userMessage, language, termsAndConditions);
        this.setState({ formSubmit: true })
    }

    render() {
        const { userName, userEmail, password, userMessage, language, termsAndConditions, formSubmit } = this.state;
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row gy-4">
                                        <div className="col-md-12">
                                            <label className="mb-1">Enter your name</label>
                                            <input name="userName" type="text" onChange={this.handleChange} className="form-control" placeholder="White your name" value={userName} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="mb-1">Enter your email</label>
                                            <input name="userEmail" type="text" onChange={this.handleChange} className="form-control" placeholder="White your email" value={userEmail} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="mb-1">Enter your password</label>
                                            <input name="password" type="password" onChange={this.handleChange} className="form-control" placeholder="password" value={password} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="mb-1">Enter your Message</label>
                                            <textarea name="userMessage" className="form-control" placeholder="Write your message" onChange={this.handleChange} value={userMessage}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="mb-1">Select Language</label>
                                            <select className="form-select" name="language" value={language} onChange={this.handleChange}>
                                                <option value="" disabled>Select Language</option>
                                                <option value="javascript">javascript</option>
                                                <option value="PHP">PHP</option>
                                                <option value="Python">Python</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input name="termsAndConditions" id="termsAndConditions" className="form-check-input" onChange={this.handleChange} type="checkbox" checked={termsAndConditions} />
                                                <label className="form-check-label" for="termsAndConditions">
                                                    Default checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        {
                            formSubmit && <div className="card">
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">User Name: {userName}</li>
                                                    <li className="list-group-item">User Email: {userEmail}</li>
                                                    <li className="list-group-item">Passwrod: {password}</li>
                                                    <li className="list-group-item">Message: {userMessage}</li>
                                                    <li className="list-group-item">Language: {language}</li>
                                                    <li className="list-group-item">Agree with terms and conditions: {termsAndConditions === true ? 'Agree' : 'Disgree'}</li>
                                                </ul>
                                            </div>
                                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
