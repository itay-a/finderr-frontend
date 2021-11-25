import React from 'react'
import { connect } from 'react-redux'
import { onEditGig } from '../store/gig.actions'
import { HiUserCircle } from 'react-icons/hi';



export class _GigEdit extends React.Component {


    state = {

        gig: {
            _id: '',
            title: '',
            category: '',
            tags: [],
            price: '',
            description: '',
            deliveryIn: '',
            imgs: [],
            rate: '',
            rateCount: '',
            reviews: [],
            imgUrls: '',

            seller: {
                _id: '',
                fullname: '',
                imgUrl: '',
                sellerLine: '',
                from: '',
                MemberSince: '',
                AvResponseTime: ''
            }
        }
    }

    componentDidMount() {
        const { gig } = this.props
        this.setState({ gig: gig }, () => {
        })
    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ gig: { ...this.state.gig, [field]: value } })
    }

    onEdit = async (ev) => {
        ev.preventDefault();
        await Promise.all([
            this.props.EditGig(this.state.gig),
            this.setState({ gig: { title: '', category: '', tags: '', price: '', description: '', deliveryIn: '', imgUrls: '' } })
        ]);
    }

    render() {
        const { title, price, description, deliveryIn, tags, imgUrls } = this.state.gig;

        return (
            <div className="gig-edit flex-column">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span><HiUserCircle size='140px' style={{ color: 'rgb(36, 179, 112)' }} /></span>
                </div>
                <h2>Edit Your Gig</h2>
                < form className="form-edit" onSubmit={this.onEdit} >
                    <div className="post-edited-gig">
                        <input name="title" type="text" value={title} placeholder="Enter Gig Name" onChange={this.handleTextChange} />
                        <select name="category" id="ctg-select" onChange={this.handleTextChange}>
                            <option value="">select a category</option>
                            <option value="graphics-and-design">Graphics & Design</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="writing-and-translation">Writing & Translation</option>
                            <option value="video-and-animation">Video & Animation</option>
                            <option value="music-and-audio">Music & Audio</option>
                            <option value="programming-and-tech">Programming & Tech</option>
                            <option value="data">Data</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="sitemap">Sitemap</option>
                        </select>
                        <input name="tags" type="text" value={tags} placeholder="Enter Search Tags" onChange={this.handleTextChange} />
                        <input name="price" type="text" value={price} placeholder="Enter Gig Price" onChange={this.handleTextChange} />
                        <input name="description" type="text" value={description} placeholder="Enter Gig Description" onChange={this.handleTextChange} />
                        <input name="deliveryIn" type="text" value={deliveryIn} placeholder="Enter delivery Time In Days" onChange={this.handleTextChange} />
                        <input name="imgUrls" type="text" value={imgUrls} placeholder="Enter image url" onChange={this.handleTextChange} />
                        <div className="edit-btn-container"><button className="edit-btn">Update Gig</button></div>
                    </div>
                </form >
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
    onEditGig,
}

export const GigEdit = connect(mapStateToProps, mapDispatchToProps)(_GigEdit)