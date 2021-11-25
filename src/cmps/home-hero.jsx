import React from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from './search-input'

export class HomeHero extends React.Component {
    state = {
        pTags: [
            'React',
            'Node.js',
            'Redux',
            'Css'
        ],
       
    }

    render() {
        const { history } = this.props
        return (
            <div className="hero-container">
                <div className="main-container">
                    <div className="hero-content flex column">
                        <header>
                            <div>Find the perfect <span className="freelanse">freelance</span></div><br /><div> services for your business</div>
                        </header>
                        <SearchInput endpoint={`/explore?searchKey=`} history={history} />
                        <div className="hero-popular flex">
                            Popular:
                            <ul>
                                {this.state.pTags.map(tags => <Link key={tags} to={`/explore?tags=${tags}`} >
                                    {tags}
                                </Link>)}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


