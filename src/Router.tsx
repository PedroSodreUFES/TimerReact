import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { History } from "./screens/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />} />
            </Route>
        </Routes>
    )
}