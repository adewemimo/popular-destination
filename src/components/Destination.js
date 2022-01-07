import { Button } from './Button';
import './Destination.scss';
import { Feedback } from './Feedback';

export function Destination({ destination, handleLike, handleDislike }) {
  const { title, alt, image, likes, dislikes } = destination;

  return (
    <div className="destination-part">
      <h2>Destination: {title}</h2>
      <img src={image} alt={alt} />
      <Button handleLike={handleLike} handleDislike={handleDislike} />
      <Feedback likes={likes} dislikes={dislikes} />
    </div>
  );
}
