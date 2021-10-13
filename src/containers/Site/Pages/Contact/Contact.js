import React, { Component } from 'react'
import Titre1 from '../../../../components/ui/Titres/Titreh1'
import Btn from '../../../../components/ui/Buttons/Button'
import { NavLink,Route } from 'react-router-dom'
import ContactForm from './ContactForm/ContactForm'
export default class Contact extends Component {
    render() {
        return (
            <>
                <Titre1 text="Contacter Nous !!!" />
                <div>
                    <h2>Adresse</h2>
                    xxxxxxxxxxxxxxx
                    <h2>Telephone</h2>
                </div>
                <h2>Vous Preferez Nous Ecrire ?</h2>
                <NavLink to="/contact/form" exact>
                    <Btn text="Formulaire de contact" color='btn-primary' />
                </NavLink>
               
            </>
        )
    }
}
