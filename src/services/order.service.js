
import { userService } from './user.service.js'
import { httpService } from './http.service'


export const orderService = {
    query,
    save,
}
// window.cs = orderService;


function query(filterBy = {}) {
    var queryStr = (!filterBy) ? '' : filterBy
    return httpService.get(`order`,queryStr)
}

// function remove(orderId) {
//     return storageService.remove(STORAGE_KEY, orderId)
// }

function save(order) {
    if (order._id) {return}
        //update
    //     return storageService.put(STORAGE_KEY, order)
    // } else {
        //add
        order.buyer = userService.getLoggedinUser()
        return httpService.post(`order`, order)
    // }
}