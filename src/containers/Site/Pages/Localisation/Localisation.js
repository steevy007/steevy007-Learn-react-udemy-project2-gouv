import React, { Component } from 'react'
import axios from 'axios'
import Titre1 from '../../../../components/ui/Titres/Titreh1'
import Btn from '../../../../components/ui/Buttons/Button'
import Etablissement from './Etablissement/Etablissement'
export default class Localisation extends Component {
    state = {
        recherche: null
    }


    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`)
            .then(reponse => {
                this.setState({
                    recherche: reponse.data.features
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <Titre1 text="Rechercher un Etablissement" />
                <Btn text="Mairie" color='btn-primary' click={() => this.rechercheEtablissement('mairie')} />
                <Btn text="Commisariat de police" color='btn-primary' click={() => this.rechercheEtablissement('commissariat_police')} />
                <Btn text="Pole Emploie" color='btn-primary' click={() => this.rechercheEtablissement('pole_emploi')} />
                <Btn text="Prefecture" color='btn-primary' click={() => this.rechercheEtablissement('prelecture')} />

                {<div className="row no-gutters p-2">


                    {
                        this.state.recherche && this.state.recherche.map((value, key) => {
                            return (

                                <Etablissement key={key}
                                    adresse={value.properties.adresses}
                                    horaire={value.properties.horaires}
                                    id={value.properties.id}
                                    nom={value.properties.nom}
                                    telephone={value.properties.telephone}
                                    mail={value.properties.email}
                                    url={value.properties.url}
                                />
                            )
                        })
                    }
                </div>
                }
            </>
        )
    }
}
