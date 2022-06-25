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