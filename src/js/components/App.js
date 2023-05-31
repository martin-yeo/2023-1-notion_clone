import PostEditPage from "./PostMain/PostEditPage.js";
import PostPage from "./SideBar/PostPage.js";

function App({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'
    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)
  

    const postPage = new PostPage({
        $target: $listContainer
    })

    const postEditPage = new PostEditPage({ 
        $target,
        initialState: {}
     })
     
     postEditPage.render()
}

export default App;