import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Kiki" body="Today is the best" />
        <Post author="Sam" body="Moose like to eat pumpkins" />
      </ul>
    </>
  )
}

export default PostsList
