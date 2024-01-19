import { useState } from 'react'

import classes from './NewPost.module.css'

const NewPost = ({ onCancel }) => {
  const [enteredData, setEnteredData] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function dataChangeHandler(event) {
    // event.stopPropagation() 
    setEnteredData(event.target.value)
  }

  function authorChangeHandler(event) {
    // event.stopPropagation() 
    setEnteredAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      data: enteredData,
      author: enteredAuthor,
    }
    console.log(postData)
    // onCancel() added this
    onCancel()

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={dataChangeHandler}
        />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewPost
