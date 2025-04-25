import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

    const [message, setMessage] = useState('');

    const hostname = window.location.hostname; // Gets just the hostname
    const beforeHyphen = hostname.split('-')[0];
    const api = beforeHyphen === "webappcustomer1" ? "https://webappcustomer1server-d8d8gzejd8fva0an.centralus-01.azurewebsites.net/api" : "https://webappcustomer2server-eub6daaja8hyhcce.centralus-01.azurewebsites.net/api"
    //const api2 = "https://monsoonwebappcontainersever-gqfvhdbkh6ddasg2.centralus-01.azurewebsites.net/api"

    useEffect(() => {
        fetch(`${api}`) // This works with proxy setup or NGINX in production
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return <h1>{message || 'Loading to all customer'} {api}</h1>;
}

export default App
