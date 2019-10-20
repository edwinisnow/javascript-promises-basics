let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 3) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then(message => {
    console.log("Log: -----> : message", message)
}).catch(error => {
    console.log("Log: -----> : error", error)
})