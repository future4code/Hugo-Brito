import App from '../App'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ApllicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LisTripPages from '../pages/ListTripsPage/ListTripsPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function RouterPath() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage/>
                </Route>

                <Route exact path={"/LoginPage"}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/AdminHome"}>
                    <AdminHomePage/>
                </Route>

                <Route exact path={"/ListTrip"}>
                    <LisTripPages/>
                </Route>

                <Route exact path={"/Application"}>
                    <ApllicationFormPage/>
                </Route>

                <Route exact path={"/CreateTrip"}>
                    <CreateTripPage/>
                </Route>

                <Route exact path={"/TripDetail"}>
                    <TripDetailsPage/>
                </Route>


            </Switch>
        </BrowserRouter>
    )
}

export default RouterPath
