import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { getJokes } from './api';

function Home() {
  const [jokes, setJokes] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const jokes = getJokes();
    setJokes(jokes);
    async function fetchData() {
      
      const jokes = await getJokes();
      if (isMounted.current) {
        setJokes(jokes);
        console.log(jokes);
      }
    }
    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      {jokes.map((joke, index) => (
        <Card key={index} joke={joke} />
      ))}
    </div>
  );
}

export default Home;
