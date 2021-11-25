import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'

const queryString = require('query-string')

class _ExplorePage extends React.Component {

    state = {
        filterBy: {
            searchKey: '',
            tags: ''
        },
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const parsed = queryString.parse(this.props.location.search);
        const { searchKey, tags } = parsed
        if (searchKey) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, searchKey } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                // return
            })
        }
        if (tags) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, tags } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                // return
            })
        } else {
            this.props.loadGigs()
        }
    }

    render() {
        const { gigs } = this.props
        return (
            <div className="explore-page main-container">
                <GigList gigs={gigs} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onSetFilter
}


export const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage)