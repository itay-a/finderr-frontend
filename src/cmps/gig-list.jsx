import React from 'react'
import { GigPreview } from './gig-preview.jsx'

export function GigList({ gigs, onRemoveGig,openModal }) {
    if (!gigs) return <div>No Gigs Right Now....</div>
    if (!gigs.length) return <div>No Gigs Right Now....</div>
    return (
        <React.Fragment>
            <section className="gig-list card-grid">
                {gigs.map(gig => <GigPreview key={gig._id}
                    gig={gig} removeGig={() => onRemoveGig(gig._id)}
                    openModal={() => openModal(gig)}
                />)}
            </section>
        </React.Fragment>
    )
}