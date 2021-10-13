import React from 'react'
import Horaire from './Horaire/Horaire'
export default function Etablissement(props) {
    return (
        <div className="col-6 mb-4">
            <div className="card">
            <div className="card-header">
                {props.nom}
            </div>
            <div className="card-body">
                <h6 className="card-title">Email : {props.mail}</h6>
                <h6 className="card-title">Telephone : {props.telephone}</h6>
                <h6 className="card-title">Adresse : {props.adresse[0].commune}</h6>
                
                <strong>Horaire</strong>
                <Horaire horaire={props.horaire} />
                {props.url && <a href={props.url} target="_blank" className="btn btn-dark">Visiter</a>}
            </div>
        </div>
        </div>
    )
}
