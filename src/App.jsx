import { useState } from 'react'

import PostsList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(true)

  function hideModalHandler() {
    setmodalIsVisible(false)
  }

  function showModalHandler() {
    setmodalIsVisible(true)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
