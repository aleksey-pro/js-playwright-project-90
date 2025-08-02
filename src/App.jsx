import { useEffect, useState, useRef } from 'react'
import './App.css'

const rightData = {
  name: "anxieter",
  password: "123",
}

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedData, setLoggedData] = useState({});

  const formRef = useRef();

  useEffect(() => {
    setLoggedIn(loggedData.name === rightData.name && loggedData.password === rightData.password);
  }, [loggedData]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <form 
          ref={formRef}
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(formRef.current);
            if (loggedIn) {
              formRef.current.reset();
              setLoggedIn(false);
            } else {
              setLoggedData(Object.fromEntries(formData.entries()));
            }
          }}
          style={{ display: "flex", gap: "20px", flexDirection: "column" }}
        >
          <div>
            <label htmlFor="name">Имя пользователя</label>
            <input style={{ marginLeft: "10px" }} type="text" name="name" id="name"/>
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input style={{ marginLeft: "10px" }} type="text" name="password" id="password"/>
          </div>
          <button type="submit">
            {loggedIn ? "Выйти" : "Войти"}
          </button>
        </form>
      </div>
      <div role="status">{loggedIn ? "Вы вошли" : "Вы разлогинены"}</div>
    </>
  )
}

export default App
