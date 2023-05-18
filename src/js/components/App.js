import PostPage from "./PostPage.js";

function App({ $target }) {
    const postPage = new PostPage({
        $target
    })

    postPage.render()
}

export default App;