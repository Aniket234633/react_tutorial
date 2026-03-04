import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <h2 className="text-center w-full">Hello This is background changer project</h2>
        <div className="flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
          <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-2xl gap-3">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full cursor-pointer" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full cursor-pointer" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full cursor-pointer" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full cursor-pointer" style={{backgroundColor: "black", color:"white"}}>Black</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full cursor-pointer" style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
