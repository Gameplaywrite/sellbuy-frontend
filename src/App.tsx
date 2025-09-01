import { useEffect, useState } from 'react'
import './App.css'
import { apiFetch, API_BASE_URL } from './services/api'

function App() {
  const [health, setHealth] = useState<string>('checking...')
  useEffect(() => {
    apiFetch('/api/health')
      .then((data) => setHealth(JSON.stringify(data)))
      .catch((e) => setHealth(`error: ${e.message}`))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">SellBuy Frontend</h1>
      <p className="mt-2 text-sm text-gray-500">API: {API_BASE_URL}</p>
      <div className="mt-4 rounded border p-3">
        <div className="font-semibold">Backend health</div>
        <pre className="whitespace-pre-wrap text-sm">{health}</pre>
      </div>
    </div>
  )
}

export default App
