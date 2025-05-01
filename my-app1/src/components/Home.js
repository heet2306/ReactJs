import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const user = { id: 1, name: "John Doe", age: 30 };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the homepage.</p>

      {/* Sending data via route params and state */}
      <Link to={`/user/${user.id}`} state={{ name: user.name, age: user.age }}>
        View User Details
      </Link>
    </div>
  );
}

export default Home;
