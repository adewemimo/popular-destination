import './Description.scss';

export function Description({ destination }) {
  return (
    <section className="description">
      <h2>Most Popular Destination</h2>

      <p>
        {destination
          ? `The most popular destination is ${destination.title}`
          : 'No popular destination'}
      </p>
    </section>
  );
}
