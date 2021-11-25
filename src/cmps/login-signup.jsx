import React from 'react'
import { userService } from '../services/user.service'
import { HiUserCircle } from 'react-icons/hi';


export class LoginSignup extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            fullname: '',
            from: '',
            photo: ''
        },
        isSignup: null,
        users: []
    }

    async componentDidMount() {
        const users = await userService.getUsers()
        // if (users===null) return
        this.setState({ users })
        this.setState({ isSignup: this.props.isSignup })
    }

    clearState = () => {
        const clearTemplate = {
            credentials: {
                username: '',
                password: '',
                fullname: '',
                from: '',
                photo: ''
            },
            doSignup: null
        }
        this.setState({ clearTemplate })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ credentials: { ...this.state.credentials, [field]: value } });
    }

    onLogin = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!this.state.credentials.username) return;
        this.props.onLogin(this.state.credentials);
        this.clearState()
    }

    onSignup = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!this.state.credentials.username || !this.state.credentials.password || !this.state.credentials.fullname) return;
        if (this.state.credentials.photo === '') this.setState({ credentials: { ...this.state.credentials, photo: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png' } })
        // if (this.state.credentials.photo==='') this.state.credentials.photo = 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'
        this.props.onSignup(this.state.credentials);
        this.clearState()
    }

    onLogout = (ev = null) => {
        if (ev) ev.preventDefault();
        this.props.onLogout(this.state.credentials);
        this.clearState()
    }

    toggleSignup = () => {
        this.setState({ isSignup: !this.state.isSignup })
    }

    render() {

        const { username, password, fullname, from, photo } = this.state.credentials;
        const { isSignup, users } = this.state;

        if (!users) {
            <div className="signup-section">
                {isSignup && <form className="signup-form" onSubmit={this.onSignup}>
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        placeholder="Fullname"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="from"
                        value={from}
                        placeholder="Country"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="photo"
                        value={photo}
                        placeholder="Your Profile Picture Link"
                        onChange={this.handleChange}
                    />
                    <button >Signup!</button>
                </form>}
            </div>

        }
        return (
            <div className="login-page">
                {/* <p> */}
                    <button className="btn-link" onClick={this.toggleSignup}>{isSignup ? 'Switch To Signup' : 'Switch To Login'}</button>
                {/* </p> */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span><HiUserCircle size='140px' style={{ color: 'rgb(36, 179, 112)' }} /></span>
                </div>
                {isSignup && <form className="login-form" onSubmit={this.onLogin}>
                    <select
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    >
                        <option value="">Select User</option>
                        {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                    </select>

                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <button>Login!</button>
                </form>}

                <div className="signup-section">
                    {!isSignup && <form className="signup-form" onSubmit={this.onSignup}>
                        <input
                            type="text"
                            name="fullname"
                            value={fullname}
                            placeholder="Fullname"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="from"
                            value={from}
                            placeholder="Country"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="photo"
                            value={photo}
                            placeholder="Your Profile Picture Link"
                            onChange={this.handleChange}
                        />
                        <button >Signup!</button>
                    </form>}
                </div>

            </div>
        )
    }
}