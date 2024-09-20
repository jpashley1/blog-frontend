export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.image_url}</p>
          <button onClick={props.onShow}>More info</button>
        </div>
      ))}

      <div>
        <h2>My First Blog Post</h2>
      </div>
      <div>
        <img
          src="https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_227_15820269818147731.png"
          alt=""
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio
          beatae veniam dicta error reprehenderit voluptates consequatur
          blanditiis placeat nulla repellat quia recusandae, eum iusto iste
          nobis praesentium laudantium corporis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque, ut esse? Ad, animi tempore?
          Itaque eligendi nesciunt non, veniam, quas labore, ab quae aut
          perspiciatis quam optio nostrum aliquid iure?
        </p>
      </div>
      <h2>Another One</h2>
      <div>
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2021/05/dj-khaled.jpg"
          alt=""
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio
          beatae veniam dicta error reprehenderit voluptates consequatur
          blanditiis placeat nulla repellat quia recusandae, eum iusto iste
          nobis praesentium laudantium corporis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque, ut esse? Ad, animi tempore?
          Itaque eligendi nesciunt non, veniam, quas labore, ab quae aut
          perspiciatis quam optio nostrum aliquid iure?
        </p>
      </div>
      <h2>My Third Blog Post</h2>
      <div>
        <img
          src="https://www.anseladams.com/wp-content/uploads/2011/09/ansel-adams-wilderness-minarets-615-1.jpeg"
          alt=""
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio
          beatae veniam dicta error reprehenderit voluptates consequatur
          blanditiis placeat nulla repellat quia recusandae, eum iusto iste
          nobis praesentium laudantium corporis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque, ut esse? Ad, animi tempore?
          Itaque eligendi nesciunt non, veniam, quas labore, ab quae aut
          perspiciatis quam optio nostrum aliquid iure?
        </p>
      </div>
    </div>
  );
}
