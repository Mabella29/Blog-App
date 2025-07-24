import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
      <p className="text-sm text-gray-500 mt-2">
        By {post.owner?.email || "Unknown"}
      </p>
      <Link
        to={`/post/${post._id}`}
        className="text-blue-600 hover:underline mt-3 block"
      >
        Read More
      </Link>
    </div>
  );
}

export default PostCard;
