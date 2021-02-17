import React from 'react'

const Form = () => {
  return(
    <form>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control"
          placeholder="Create new post here"  
        />
      </div>
    </form>
  )
}

export default Form