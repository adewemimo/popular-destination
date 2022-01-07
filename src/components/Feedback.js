export function Feedback({ likes, dislikes }) {
  return (
    <div>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <p>Difference: {likes - dislikes}</p>
    </div>
  );
}
