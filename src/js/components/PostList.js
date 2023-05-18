function PostList({ $target, initialState}) {
    const $postList = document.createElement("div")

    $target.appendChild($postList)

    this.state = initialState
    this.setState = (nextState) => {
        this.state = nextState
        //데이터 갱신 될 때 마다 그리기
        this.render()
    }

    this.render = () => {
        $postList.innerHTML = `
            <ul>
                ${this.state
                    .map((item) => `<li>${item.title}</li>`).join("")
                }
            </ul>
        `
    }

    // 최초 한번 시작
    this.render()
}

export default PostList;