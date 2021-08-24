import {useState, useEffect} from 'react'

const App = () => {
  const [h, setH] = useState(0)
  const [m, setM] = useState(0)
  const [s, setS] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      
      setH(date.getHours())
      setM(date.getMinutes())
      setS(date.getSeconds())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <h1>{ `${ h } : ${ m } : ${ s }` }</h1>
  );
}

export default App;
