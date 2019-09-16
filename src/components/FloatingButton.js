import React from 'react'
import '../styles/floatingButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const iconPlus = <FontAwesomeIcon color="#ffffff" icon={faPlus}/>

const FloatingButton = (props) =>(
    <React.Fragment>
        <button onClick={props.handleFloating} className="btn-floating" data-toggle="modal" data-target="#exampleModal">
            <span>{iconPlus}</span>
        </button>
    </React.Fragment>
)

export default FloatingButton