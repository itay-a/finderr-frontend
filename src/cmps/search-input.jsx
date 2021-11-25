import React from 'react'
import { FaSearch } from 'react-icons/fa'

export class SearchInput extends React.Component {
    state = {
        searchKey: '',
        placeholder: ''
    }

    componentDidMount() {
        const { pathname } = this.props.history.location
        if (pathname === '/') {
            this.setState({ placeholder: 'Try "building mobile app"' })
        } else this.setState({ placeholder: this.props.placeholder })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(({ [field]: value }), () => {
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(this.props.endpoint + this.state.searchKey)
    }

    render() {
        const { searchKey, placeholder } = this.state
        return (
            <div className="search-input-container">
                <form className="search-input-content flex" onSubmit={this.onSubmit} >
                    <label htmlFor='search'>
                        <div className="icon">
                            <FaSearch />
                        </div>
                        <input
                            name='searchKey' id='search'
                            type='text' placeholder={placeholder} value={searchKey}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="search-btn">Search</button>
                </form>
            </div>
        )
    }
}
