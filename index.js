fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then(data => {
    const postsArray = data.slice(0, 5)

    const postHTML = postsArray.map(item => {
      return `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        <hr />
      `
    }).join("")
    document.getElementById("show-posts").innerHTML = postHTML
  })

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
      const postHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <hr />
      `
      document.getElementById("show-posts").innerHTML = postHTML + document.getElementById("show-posts").innerHTML
      console.log(data)
    })

})
