let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")

function renderPosts() {
  const postHTML = postsArray.map(data => {
    return `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
      <hr />
    `
  }).join("")
  document.getElementById("show-posts").innerHTML = postHTML
}

//Default fetch when page is loading
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then(data => {
    postsArray = data.slice(0, 5)
    renderPosts()
  })

// FORM SUBMIT
document.getElementById("new-post").addEventListener("submit", event => {
  event.preventDefault()

  const title = titleInput.value
  const body = bodyInput.value

  const data = {
    title: title,
    body: body
  }

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      newData = {
        title: data.title,
        body: data.body
      }
      postsArray.unshift(newData)
      renderPosts()
      //Resetting text inputs
      titleInput.value = ""
      bodyInput.value = ""
    })

})
