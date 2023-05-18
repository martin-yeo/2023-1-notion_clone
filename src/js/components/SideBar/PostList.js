function PostList({ $target, initialState}) {
    const $postList = document.createElement("div")

    $target.appendChild($postList)

    this.state = initialState
    this.setState = (nextState) => {
        this.state = nextState
        //데이터 갱신 될 때 마다 그리기
        this.render()
    }


    this.createTreeView = (data) => {
        let str = ""

        for (const key in data) {
            if( data[key].documents.length ) {
                str += 
                `
                <li data-id="${data[key].id}">${data[key].title}
                    <ul>
                        ${this.createTreeView(data[key].documents)}
                    </ul>
                </li>
                `
            } else {
                str +=   `<li data-id="${data[key].id}">${data[key].title}`
            }
        }
    }

    this.render = () => {
        $postList.innerHTML = `
            <ul>
                ${this.state
                    .map(
                    (data) => 
                    `
                    <li data-id="${data.id}">${data.title}</li>
                    ${ 
                        data.documents 
                        ? 
                        `<ul>${this.createTreeView(data.documents)}</ul>` 
                        : 
                        "" 
                    }
                    `
                    ).join("")
                }
            </ul>
        `
    }

    // 최초 한번 시작
    this.render()
}

export default PostList;