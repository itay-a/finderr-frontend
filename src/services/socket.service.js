import io from 'socket.io-client'
// import { userService } from './user.service';

// export const SOCKET_EMIT_USER_WATCH = 'user-watch';
// export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
// export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';
// export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you';


const baseUrl = (process.env.NODE_ENV === 'production')? '' : '//localhost:3030'
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

window.socketService = socketService

// var socketIsReady = false;
socketService.setup()
// const userFromStorage = userService.getLoggedinUser()
// console.log('userFromStorage',userFromStorage._id);
// socketService.emit('set-userId',userFromStorage._id)
// window.addEventListener("beforeunload", socketService.terminate);


function createSocketService() {

  var socket = null;
  const socketService = {
    async setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      console.log('socket on front socket service',eventName, cb);
      socket.on(eventName, cb)
    },
    off(eventName, cb=null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      console.log('socket emit front socket service',eventName, data);
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}