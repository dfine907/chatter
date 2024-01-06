import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css'

const PostsList = () => {
    
  return (
    <div>
      <ul className={classes.posts}>
        <Post author="Kiki" body="React is awesome" />
        <Post author="Max" body="I love JavaScript" />
        <Post author="Sam" body="Python is way awesome" />
        <Post author="Max" body="Not" />
      </ul>
    </div>
  )
}

export default PostsList
