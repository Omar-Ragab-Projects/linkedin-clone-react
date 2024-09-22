import { useSelector } from "react-redux";
import Post from "./Post";

export default function Posts() {
  const posts = useSelector((state) => state.posts.value);

  return (
    <ul className="flex flex-col-reverse">
      {posts &&
        posts.map((post, index) => {
          return <Post key={index} post={post} index={index} />;
        })}
    </ul>
  );
}
