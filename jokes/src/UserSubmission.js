import React, { useState } from 'react';
import { postJoke } from './api';

function UserSubmission() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    postJoke({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Joke:
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserSubmission;
