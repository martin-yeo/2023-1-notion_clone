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
        $target: $listContainer,
        initialState : {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
    })

    const postEditPage = new PostEditPage({ 
        $target, $rendingContainer, 
        initialState: {
            
        }
    })

    this.route = () => {
        const {pathname} = window.location

        //위치를 파악해서 api연동 던져주기

        console.log(test)
        postEditPage.render()
        postPage.setState()
    }
    this.route()
}

export default App;