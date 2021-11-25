

import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadGigs(filterBy = {}) {
    return (dispatch) => {
        gigService.query(filterBy)
            .then(gigs => {
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load gigs')
            })
    }
}

export function onRemoveGig(gigId) {
    return (dispatch, getState) => {
        gigService.remove(gigId)
            .then(() => {
                dispatch({
                    type: 'REMOVE_GIG',
                    gigId
                })
                showSuccessMsg('Gig removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove gig')
            })
    }
}

export function onAddGig(gig) {
    return (dispatch) => {
        gigService.save(gig)
            .then(savedGig => {
                dispatch({
                    type: 'ADD_GIG',
                    gig: savedGig
                })
                showSuccessMsg('The New Gig Was Added Succesfully!')
            })
            .catch(err => {
                showErrorMsg('Cannot add gig')
            })
    }
}

export function onEditGig(gigToSave) {
    return (dispatch) => {
        gigService.save(gigToSave)
            .then(savedGig => {
                dispatch({
                    type: 'UPDATE_GIG',
                    gig: savedGig
                })
                showSuccessMsg('Your Gig Was Apdated Succesfully!')
            })
            .catch(err => {
                showErrorMsg('Cannot update gig')
            })
    }
}

export function onSetFilter(filterBy) {
    return (dispatch) => {
        gigService.query(filterBy)
            .then(gigs => {
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
    }
}

export function addToCart(gig) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            gig
        })
    }
}

export function removeFromCart(gigId) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            gigId
        })
    }
}

export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.gigModule.cart.reduce((acc, gig) => acc + gig.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_CART' })
            showSuccessMsg('Charged you: $' + total.toLocaleString())


        } catch (err) {
            showErrorMsg('Cannot checkout, login first')
        }
    }
}