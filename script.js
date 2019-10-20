// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 3) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then(message => {
//     console.log("Log: -----> : message", message)
// }).catch(error => {
//     console.log("Log: -----> : error", error)
// })

// callback
const userLeft = false
const userWatching = false;

function watchCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'user left',
            message: 'sad'
        })
    } else if (userWatching) {
        errorCallback({
            name: 'user watching',
            message: 'watching'
        })
    } else {
        callback('Success')
    }
}

watchCallback((message) => {
    console.log('on success ' + message);
}, (error) => {
    console.log('on error ' + error.message);
})

function watchPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: 'sad'
            })
        } else if (userWatching) {
            reject({
                name: 'user watching',
                message: 'watching'
            })
        } else {
            resolve('Success')
        }
    })

}

watchPromise().then((message) => {
    console.log('success ' + message)
}).catch(error => {
    console.log('error ' + error.message)
})

// promises.all

const p1 = new Promise((resolve, reject) => {
    resolve('Promise 1')
})
const p2 = new Promise((resolve, reject) => {
    resolve('Promise 2')
})
const p3 = new Promise((resolve, reject) => {
    resolve('Promise 3')
})

Promise.all([p1, p2, p3]).then((messages) => {
    console.log('messages', messages);
})
// promise.race
Promise.race([p1, p2, p3]).then((messages) => {
    console.log('messages', messages);
})