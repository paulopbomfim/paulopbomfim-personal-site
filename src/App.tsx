import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Links } from "./pages/Links"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  )
}