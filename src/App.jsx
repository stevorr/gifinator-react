import Form from './components/Form'
import Giphy from './components/Giphy'
import ClipboardButton from './components/ClipboardButton'
import History from './components/History'
import { useState, useEffect, useCallback, createContext } from 'react'
import ShowHistoryButton from './components/ShowHistoryButton'

export const AppContext = createContext();

export default function App() {
  const [query, setQuery] = useState(null)
  const [data, setData] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [history, setHistory] = useState([])

  const fetchRandomData = useCallback(async () => {
    const res = await fetch('https://api.giphy.com/v1/gifs/random?' + new URLSearchParams({
      api_key: process.env.REACT_APP_GIPHY_API_KEY
    }))
    const json = await res.json()
    setData(json.data)
    setHistory(h => [...h, json.data])
  }, [])

  const fetchData = useCallback(async () => {
    const res = await fetch('https://api.giphy.com/v1/gifs/search?' + new URLSearchParams({
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: query,
      limit: 1
    }))
    const json = await res.json()
    setData(json.data[0])
    setHistory(h => [...h, json.data[0]])
  }, [query])

  useEffect(() => {
    query ? fetchData() : fetchRandomData()
  }, [query, fetchData, fetchRandomData])

  const handleClickOfftoClose = (e) => {
    if (drawerOpen && !document.getElementById('history').contains(e.target)) {
      setDrawerOpen(false)
    }
  }

  return (
    <AppContext.Provider value={{ data, setData, setQuery, history, setHistory, setDrawerOpen }}>
      <div className="drawer drawer-end h-screen w-full" onClick={handleClickOfftoClose}>
        <input id="history-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} readOnly />
        <div className="drawer-content max-h-screen my-2">
          <div className="flex flex-col flex-initial items-center max-h-screen gap-3">
            <span className="text-3xl">Giphinator</span>
            <Form />
            {data && <Giphy />}
            <div className="flex flex-row gap-2">
              <ClipboardButton />
              <ShowHistoryButton />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="history-drawer" className="drawer-overlay"></label>
          <ul id="history" className="menu p-4 w-80 overflow-y-auto bg-base-100 text-base-content">
            <span className="text-xl">History</span>
            <div className="divider my-1"></div>
            <History />
          </ul>
        </div>
      </div>
    </AppContext.Provider>
  );
}