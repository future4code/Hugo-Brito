import App from '../App'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import AdminHomePage from './pages/AdminHomePage/AdminHomePage'
import ApllicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage'
import LisTripPages from './pages/ListTripsPage/ListTripsPage'
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage'
import {Router, BrowserRouter, Switch} from 'react-router-dom'

function Router() {

    <BrowserRouter>
        <Switch>

            <Route exact path={"/login"}>
                <LoginPage:n />
            </Route>
            <Route exact path=''>
            </Route>

                
        </Switch>
    </BrowserRouter>
}

export default Router
