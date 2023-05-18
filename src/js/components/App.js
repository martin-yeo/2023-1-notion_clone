import PostPage from "./PostPage.js";

function App({ $target }) {
    // console.log({$target})
    new PostPage({
        $target
    })

    //PostPage.render()
}

export default App;