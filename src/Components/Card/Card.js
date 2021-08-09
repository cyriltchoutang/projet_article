
import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            {props.children} {/*. children car on ne sait pas encore ce qu'on mettra à l'interieur*/}
        </div>
    )
}
