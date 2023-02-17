const requestManager = (url, options = {} , attempt = 3) => {
    return new Promise((resolve , reject) => {
        fetch(url, options)
            .then(resolve)
            .catch((error) => {
                const isLastAttemp = attempt === 1;
                if (isLastAttemp) {
                    return reject(error)
                }
            })

            setTimeout(() => {
                requestManager(url, options, attempt -1);
            }, 3000)
    })
    
}

requestManager('https://foo.com').then((Response) => {
    console.log("response", Response)
})
.catch((err) => {
    console.log("err", err)
})