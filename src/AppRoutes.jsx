import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"

import TelaInicial from "./Pages/TelaInicial"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<TelaInicial />} />
            </Routes>
        </Router>
    )

}

export default AppRoutes