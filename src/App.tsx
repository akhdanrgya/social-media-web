import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <main className="flex h-screen">
      <Routes>
      {/* public */}
        <Route path="/sign-in" element={<SigninForm/>}/>
      {/* private */}
        <Route index element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default App
