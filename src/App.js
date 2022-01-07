import './App.scss';
import { Description } from './components/Description';
import { Destination } from './components/Destination';
import { Header } from './components/Header';
import React, { useEffect, useState } from 'react';

function App() {
  const [popularDestination, setPopularDestination] = useState(undefined);
  const [destinations, setDestinations] = useState({
    dest1: {
      title: 'Canada',
      alt: 'first destination - canada',
      image:
        'https://www.ackahlaw.com/assets/uploads/img/news/Canada-Top-Destination-For-Foreign-Workers.jpeg',
      likes: 0,
      dislikes: 0,
    },
    dest2: {
      title: 'Miami Florida USA',
      alt: 'first destination - miami florida',
      image:
        'https://www.planetware.com/photos-large/USFL/florida-miami-bayfront-park.jpg',
      likes: 0,
      dislikes: 0,
    },
  });

  useEffect(() => {
    handlePopularDestination();
  }, [destinations]);

  const handlePopularDestination = () => {
    console.log('pop dest', destinations);
    const dest1Popularity =
      destinations.dest1.likes - destinations.dest1.dislikes;
    const dest2Popularity =
      destinations.dest2.likes - destinations.dest2.dislikes;
    if (dest1Popularity > dest2Popularity) {
      setPopularDestination(destinations.dest1);
    } else if (dest1Popularity < dest2Popularity) {
      setPopularDestination(destinations.dest2);
    } else {
      setPopularDestination(undefined);
    }
  };

  const handleLike = destinationKey => {
    const newDestination = {
      ...destinations[destinationKey],
      likes: destinations[destinationKey].likes + 1,
    };
    setDestinations(prevState => {
      return {
        ...prevState,
        ...{ [destinationKey]: newDestination },
      };
    });
  };

  const handleDislike = destinationKey => {
    const newDestination = {
      ...destinations[destinationKey],
      dislikes: destinations[destinationKey].dislikes + 1,
    };
    setDestinations(prevState => {
      return {
        ...prevState,
        ...{ [destinationKey]: newDestination },
      };
    });
  };

  return (
    <main className="App">
      <Header />
      <section className="destination">
        <section className="destination--left">
          <Destination
            destination={destinations.dest1}
            handleLike={() => handleLike('dest1')}
            handleDislike={() => handleDislike('dest1')}
          />
        </section>

        <Description destination={popularDestination} />

        <section className="destination--right">
          <Destination
            destination={destinations.dest2}
            handleLike={() => handleLike('dest2')}
            handleDislike={() => handleDislike('dest2')}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
