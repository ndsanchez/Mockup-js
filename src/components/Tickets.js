import React from 'react'
import SingleTicket from './SingleTicket'

class Ticket extends React.Component {
    render(){
        const { handleDelete, handleEdit, dataTicket } = this.props
        return(
            dataTicket.map(el => {
                return(
                    <SingleTicket key={el.id} handleDelete={handleDelete} handleEdit={handleEdit} dataTicket={el}/>
                )
            })
        )
    }
}

export default Ticket