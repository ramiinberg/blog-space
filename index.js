let postsArray = []

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

  const title = document.getElementById("post-title").value
  const body = document.getElementById("post-body").value

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
      document.getElementById("post-title").value = ""
      document.getElementById("post-body").value = ""
    })

})
