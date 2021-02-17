import React from 'react'
import Form from '../components/Form'
import Notes from '../components/Notes'

const Home = () => {

  const notes = new Array(5)
    .fill('')
    .map((_, i ) => ({id: i, title: `Note ${i + 1}`}))

  return(
    <>
      <Form />
      <hr/>
      <Notes notes={notes}/>
    </> 
  )
}

export default Home