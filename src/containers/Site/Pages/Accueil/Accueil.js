import React from 'react'
import Titre1 from '../../../../components/ui/Titres/Titreh1'
import classes from '../../../../App.css'
import Image from '../../../../assets/images/chateau.jpg'
export default function Accueil() {
    return (
        <>
            <Titre1 css={classes.bigTitre} text="Bienvenue sur mon site web" />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="row">
                <img className="img-fluid img-thumbnail" src={Image} alt="Chateau" />
            </div>
        </>
    )
}
