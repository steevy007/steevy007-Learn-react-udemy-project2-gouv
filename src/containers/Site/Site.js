import React, { Component } from 'react'
import Accueil from './Pages/Accueil/Accueil'
import Localisation from './Pages/Localisation/Localisation'
import Contact from './Pages/Contact/Contact'
import Navbar from '../../components/ui/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Route404 from './Pages/404/Route404'
import ContactForm from './Pages/Contact/ContactForm/ContactForm'
import Footer from '../../components/ui/Footer/Footer'
export default class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact render={() => <Accueil />} />
                            <Route path="/localisation" exact render={() => <Localisation />} />
                            <Route path="/contact" exact render={() => <Contact />} />
                            <Route path="/contact/form" render={()=><ContactForm><Contact/></ContactForm>}/>
                            <Route render={()=><Route404 />} />
                        </Switch>
                    </div>
                    <div className='minSite'></div>
                </div>
                <Footer />
            </>
        )
    }
}
