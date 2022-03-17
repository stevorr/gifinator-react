import Form from './components/Form'
import Giphy from './components/Giphy'
import CopyToClipboard from './components/CopyToClipboard'
import { useState, useEffect, useCallback, createContext } from 'react'

export const AppContext = createContext();

export default function App() {
  const [query, setQuery] = useState(null)
  const [data, setData] = useState(null)

  const fetchData = useCallback(async () => {
    const res = await fetch('https://api.giphy.com/v1/gifs/search?' + new URLSearchParams({
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: query ?? 'hmm',
      limit: 1
    }))
    const json = await res.json()
    setData(json)
  }, [query])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <AppContext.Provider value={{ data, setQuery }}>
      <div className="flex flex-col flex-auto items-center">
        <span className="text-xl m-3">Giphinator React</span>
        <Form />
        {data && <Giphy />}
        <CopyToClipboard />
      </div>
    </AppContext.Provider>
  );
}