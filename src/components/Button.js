import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

export function Button({ handleLike, handleDislike }) {
  return (
    <section className="button-Style">
      <button onClick={handleLike}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button onClick={handleDislike}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </section>
  );
}
