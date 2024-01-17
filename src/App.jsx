import { useState } from 'react'

import PostsList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false)

  function showModalHandler() {
    setmodalIsVisible(true)
  }

  function hideModalHandler() {
    setmodalIsVisible(false)
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
