import { request } from "../../utils/api.js";
import { pushUrl } from "../../utils/Router.js";
import PostList from "./PostList.js";


function PostPage({ $target }) {
  const $page = document.createElement("div")
  $page.className = 'documentDiv'

  // const TEST_DATA = [
  //     {
  //       "id": 1, // Document id
  //       "title": "노션을 만들자", // Document title
  //       "documents": [
  //         {
  //           "id": 2,
  //           "title": "블라블라",
  //           "documents": [
  //             {
  //               "id": 3,
  //               "title": "함냐함냐",
  //               "documents": []
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "id": 4,
  //       "title": "hello!",
  //       "documents": []
  //     }
  //   ]
    
  
  const postList = new PostList({ 
    $target,
    initialState: [],
    onAttach: async (id) => {
      await request('/documents', {
        method: 'POST',
        body: JSON.stringify ({
          title: '제목없음',
          parent: id
        })
      })

      this.setState()
    },
    onDelete: async (id) => {
      await request(`document:${id}`, {
        method: "DELETE"
      })

      pushUrl
      this.setState()
    }
  })

  new NewButton({
    $target: $page,
    initialState: {
      text: 'New page',
      link: 'new',
      name: 'addNew'
    }
  })

  this.setState = async () => {
    const posts = await request('/documents')
    // console.log(posts)
    postList.setState(posts)
    this.render()
  }
  this.render = async () => {
      $target.appendChild($page)
  }
}

export default PostPage;