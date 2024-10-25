import React, { useState, useEffect } from 'react';

function App() {
    const [greetings, setGreetings] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Fetch all greetings from the backend
    useEffect(() => {
        fetch('/api/greetings')
            .then((response) => response.json())
            .then((data) => setGreetings(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    // Function to add a new greeting
    const addGreeting = (e) => {
        e.preventDefault();
        const greeting = { message: newMessage };

        fetch('/api/greetings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(greeting),
        })
            .then((response) => response.json())
            .then((data) => {
                setGreetings([...greetings, data]); // Add new greeting to the list
                setNewMessage(''); // Clear input
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="App">
            <h1>Frontend - React</h1>
            <h2>All Greetings</h2>
            <ul>
                {greetings.map((greeting) => (
                    <li key={greeting.id}>{greeting.message}</li>
                ))}
            </ul>
            <h2>Add a New Greeting</h2>
            <form onSubmit={addGreeting}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Enter new greeting"
                />
                <button type="submit">Add Greeting</button>
            </form>
        </div>
    );
}

export default App;
