const post =
  async (url,data) =>
    await fetch(url,
        { method: "POST"
        , mode: "cors"
        , cache: "no-cache"
        , credentials: "same-origin"
        , headers: { "Content-Type": "application/json" }
        , body: JSON.stringify(data)
        })

export default post
