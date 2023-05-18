import PostList from "./PostList.js";

function PostPage({ $target }) {
    const $page = document.createElement("div")
    
    const postList = new PostList({ 
        $target,
        initialState: [
            {
                id: 1,
                title: "제목"
            },
            {   
                id: 2,
                title: "MWU 화이팅"
            }
        ]
     })

    const $newBtn = document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.textContent = "new data"


    this.render = () => {
        $target.appendChild($page)
    }
}

export default PostPage;