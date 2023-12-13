class Api {
    constructor(options) {
        this._url = options.url
    }

    checkRes = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`${res.status}`)
    }

    getTap = () => {
        return fetch(`${this._url}/tap`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(checkRes)
    }

    updateTap(data) {
        return fetch(`${this._url}/tap`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
            .then(checkRes)
    }

    addTap(data) {
        return fetch(`${this._url}/tap`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
            .then(checkRes)
            .then(data => { return (data) })
    }

    getBeer = () => {
        return fetch(`${this._url}/beer`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(checkRes)
    }

    updateBeer(data) {
        return fetch(`${this._url}/beer`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
            .then(checkRes)
    }

    addBeer(data) {
        return fetch(`${this._url}/beer`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
            .then(checkRes)
            .then(data => { return (data) })
    }

}