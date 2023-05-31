function PostList({ $target, initialState}) {
    const $postList = document.createElement("div")
    $postList.className = 'postList'
    $target.appendChild($postList)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        //데이터 갱신 될 때 마다 그리기
        this.render()
    }


    this.createTreeView = (data) => {
        let str = ''

        for (const key in data) {
            if (data[key].documents.length) {
              str += `<li class="dataList" data-id="${data[key].id}">${data[key].title}
                        <button class="addBtn" data-id="${data[key].id}">+</button>
                        <button class="delBtn" data-id="${data[key].id}">x</button>
                        <ul>${this.createTreeView(data[key].documents)}</ul>
                      </li>`
            } else {
              str += `<li class="dataList" data-id="${data[key].id}">
                        ${data[key].title}
                       <button class="addBtn" data-id="${data[key].id}">+</button>
                       <button class="delBtn" data-id="${data[key].id}">X</button>
                      </li>`
            }
          }
      
          return str
    }

    this.render = () => {
        $postList.innerHTML = `
        <ul>
            ${this.state
            .map(
                (post) => `
                <li class="dataList"data-id="${post.id}">
                🗒  ${post.title}
                <button class="addBtn" data-id="${post.id}">
                    +
                </button>
                <button class="delBtn" data-id="${post.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
                </li>
                ${post.documents ? `<ul>${this.createTreeView(post.documents)}</ul>` : ''}
                `,
            )
            .join('')}
        </ul>
        `
    }

    // 최초 한번 시작
    this.render()
}

export default PostList;