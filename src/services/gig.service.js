// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service'
import { userService } from './user.service.js'

const listeners = []

export const gigService = {
    query,
    getById,
    save,
    remove,
    subscribe
}

window.cs = gigService;

function query(filterBy = {}) {
    var queryStr = (!filterBy) ? '' : filterBy
    return httpService.get(`gig`,queryStr)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}

function save(gig) {
    if (gig._id) {
        return httpService.put(`gig`, gig)
    } else {
        gig.seller = userService.getLoggedinUser()
        return httpService.post(`gig`, gig)
    }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(gigs) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(gigs))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(gigs => {
            _notifySubscribersGigsChanged(gigs)
        })
})