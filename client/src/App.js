import React, { useState, useEffect } from 'react';

function App() {
    const [response, setResponse] = useState('...')
    useEffect(() =>{
        async function checkAPIRoute() {
            try {
                const host = process.env.REACT_APP_HOST
                const response = await fetch(
                    `${host}/api`
                )
                if (response.status === 200) {
                    setResponse('status: ' + response.status)
                }
            } catch (err) {
                setResponse(err.toString)
            }
        }
        checkAPIRoute()
    }, [response])

  return (
    <div>
        <h1>Mern-app</h1>
        <h2>The API call is..</h2>
        <p>{response}</p>
        <p>1</p>
    </div>
  );
}

export default App;
