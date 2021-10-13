import React from 'react'

export default function Horaire(props) {
    //console.log(props.horaire)
    return (
        <div>
            <ul>
                {
                   props.horaire && props.horaire.map((values,key)=>{
                        return(
                            <li key={key}> Du {values.du} Au {values.au} De {values.heures[0].de}  a {values.heures[0].a} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
