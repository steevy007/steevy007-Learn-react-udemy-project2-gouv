import React from 'react'
import Titre1 from '../../../../components/ui/Titres/Titreh1'
export default function Route404() {
    return (
        <>
            <div className="container">
                <Titre1 text="Erreur 404 !!!" />
                <p>
                    Page Inexistant
                </p>
            </div>
        </>
    )
}
