 

import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('A Paragraph');

  const myFunction = () => {
    setText('Paragraph changed.');
  };

  return (
    <div>
      <section>
        <h2>Demo JavaScript in Head</h2>
        <p id="demo">{text}</p>
        <button type="button" onClick={myFunction}>Try it</button>
      </section>



      

      <section>
        <h2>Demo JavaScript in Body</h2>
        <p id="demo2">{text}</p>
        <button type="button" onClick={myFunction}>Try it</button>
      </section>
    </div>
  );
}
<script>
  
</script>

