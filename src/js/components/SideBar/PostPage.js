import { request } from "../../utils/api.js";
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
        onAttach: () => {
          this.setState()
        }
     })

    const $newBtn = document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.textContent = "new data"


    this.render = () => {
        const data = request("/documents")

        console.log(data)
        $target.appendChild($page)
    }
}

export default PostPage;