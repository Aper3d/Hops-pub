import { Routes, Route } from "react-router-dom";

import Beer from "../Beer/Beer"
import Burger from "../Burger/Burger"
import Snack from "../Snack/Snack"

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route
                    path="/beer"
                    element={<Beer />}
                />
                <Route
                    path="/burger"
                    element={<Burger />}
                />
                <Route
                    path="/snack"
                    element={<Snack />}
                />
            </Routes>
        </main>
    )
}

export default Main