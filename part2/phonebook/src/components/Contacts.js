import React from 'react'


const Contact = (props) => {
    return(
      <div>
        {props.name}: {props.number} <button onClick={props.deleteFun} name={props.name} id={props.id}>Delete</button>
      </div>
    )
}


const Contacts = (props) => {

  const contactsToShow = props.contacts.filter(
    contact => contact.name.toLowerCase().includes(props.filter.toLowerCase())
  )

  const mapper = (contact) => {
    return(
      <Contacts key={contact.id} id={contact.id} name={contact.name} number={contact.number} deleteFun={props.deleteFun}></Contacts>
    )
  }

  return(
    <div> {contactsToShow.map(mapper)} </div>
  )
}

export default Contacts