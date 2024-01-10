import React, { useState } from 'react'
import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'

const PostsList = () => {
  const [enteredData, setEnteredData] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function dataChangeHandler(event) {
    setEnteredData(event.target.value)
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      <NewPost
        onDataChange={dataChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredData} />
        <Post author="Sam" body="Moose like to eat pumpkins" />
      </ul>
    </>
  )
}

export default PostsList
