import { useState, useEffect } from "react";

function Control() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [tap, setTap] = useState([])
    const [beer, setBeer] = useState([])

    const token = localStorage.getItem.token

    useEffect(() => {
        if (token) {
            auth.getContent(token)
                .then(({ tap, beer }) => {
                    setTap(tap)
                    setBeer(beer)
                    setIsLoggedIn(true)
                })
        }
    }, [token]);


    return (
        <>
            (!isLoggedIn)
            ? <div className="auth__container"></div>
        </>
    )
}