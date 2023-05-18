import Editor from "./PostMain/Editor.js";
import PostPage from "./SideBar/PostPage.js";

function App({ $target }) {
    const postPage = new PostPage({
        $target
    })

    postPage.render()

    new Editor({$target})
}

export default App;