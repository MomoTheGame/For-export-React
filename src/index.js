import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Chooserightcharger from './views/chooserightcharger'
import SupportInstaller from './views/support-installer'
import SupportInstallerPreinstallation from './views/support-installer-preinstallation'
import Submenu from './views/submenu'
import Recomendation from './views/recomendation'
import SupportUserMyChargerAnyCharger from './views/support-user-my-charger-any-charger'
import Stillnotconvinced from './views/stillnotconvinced'
import ACChargers from './views/a-c-chargers'
import AboutUs from './views/about-us'
import Vacancies from './views/vacancies'
import BusinessCharging from './views/business-charging'
import ContactUs from './views/contact-us'
import SupportUserMyChargerAnyCharger1 from './views/support-user-my-charger-any-charger1'
import WheretobuyRetailers from './views/wheretobuy-retailers'
import Specification from './views/specification'
import DCChargers from './views/d-c-chargers'
import HomeCharging from './views/home-charging'
import Support from './views/support'
import SupportUserMyCharger from './views/support-user-my-charger'
import Chooserightcharger1 from './views/chooserightcharger1'
import BusinessSide from './views/business-side'
import MainPage from './views/main-page'
import SupportUser from './views/support-user'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={Chooserightcharger}
          exact
          path="/chooserightcharger"
        />
        <Route component={SupportInstaller} exact path="/support-installer" />
        <Route
          component={SupportInstallerPreinstallation}
          exact
          path="/support-installer-preinstallation"
        />
        <Route component={Submenu} exact path="/submenu" />
        <Route component={Recomendation} exact path="/recomendation" />
        <Route
          component={SupportUserMyChargerAnyCharger}
          exact
          path="/support-user-my-charger-any-charger"
        />
        <Route component={Stillnotconvinced} exact path="/stillnotconvinced" />
        <Route component={ACChargers} exact path="/a-c-chargers" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Vacancies} exact path="/vacancies" />
        <Route component={BusinessCharging} exact path="/business-charging" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route
          component={SupportUserMyChargerAnyCharger1}
          exact
          path="/support-user-my-charger-any-charger1"
        />
        <Route
          component={WheretobuyRetailers}
          exact
          path="/wheretobuy-retailers"
        />
        <Route component={Specification} exact path="/specification" />
        <Route component={DCChargers} exact path="/d-c-chargers" />
        <Route component={HomeCharging} exact path="/home-charging" />
        <Route component={Support} exact path="/support" />
        <Route
          component={SupportUserMyCharger}
          exact
          path="/support-user-my-charger"
        />
        <Route
          component={Chooserightcharger1}
          exact
          path="/chooserightcharger1"
        />
        <Route component={BusinessSide} exact path="/business-side" />
        <Route component={MainPage} exact path="/main-page" />
        <Route component={SupportUser} exact path="/support-user" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
