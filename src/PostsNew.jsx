export function PostsNew() {
  return (
    <div id="Posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Author: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image URL: <input type="text" />
        </div>
        <button type="submit">Post post</button>
      </form>
    </div>
  );
}
