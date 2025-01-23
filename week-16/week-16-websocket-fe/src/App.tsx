import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket) {
      return;
    }
    socket.send(inputRef.current?.value || '');
    inputRef.current!.value = '';
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='message...'/>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
