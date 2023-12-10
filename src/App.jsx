import './App.css'
import React, {useState, useContext, useRef} from 'react'
import Displej from "./components/Display"
import Table from "./components/Table"
import { AppContext } from './provider.jsx'

/*const initData = {
  name: "U Chlebíčků",
  suma: 0,
  tables: [{idt: 1, tablesum: 0, stool: [{ids: 1, stoolsum: 0},
                                        {ids: 2, stoolsum: 0}]},
          {idt: 2, tablesum: 0, stool: [{ids: 1, stoolsum: 0},
                                        {ids: 2, stoolsum: 0}]}
  ]
}*/



function App() {
  const [globalmemo, dispatch] = useContext(AppContext);
  //const [globalmemo, setGlobalmemo] = useState(initData2)

  const inputRef = useRef();
  const [pozdrav, setPozdrav] = useState("Čau")

  const [pozdrav2, setPozdrav2] = useState("Čau2")
  const display = <Displej text={pozdrav2}></Displej> 

  console.log(globalmemo);
    

  const Zobraz = (text) => {
    setPozdrav(text)
  }

  /*const Zobraz2 = (text2) => {
    setPozdrav2(text2)
  }*/

  const deskComponents = globalmemo.tables.map((value, index, rest) => (
    <Table key={index} id={index} suma={value[0]} stools={value[1]}></Table>
  ));

const deskComponents2 = [];
let i = 0;
for (const iterator of globalmemo.tables){
  deskComponents2.push(
    <Table key={i} id={i}></Table>
  )
  i++;
}

  return (
    <>  
      <input ref={inputRef} type="text" defaultValue={pozdrav}></input>
      <button onClick={(e) => {Zobraz(inputRef.current.value)}}>NickGhur</button>
      <Displej jinytext="text2" text={pozdrav}></Displej>

      <p>-------------------------------------------------------------------------</p>

      <input type="text" defaultValue={pozdrav2} onInput={(e) => {setPozdrav2(e.currentTarget.value)}}></input>
      {display}
      <div>
        {deskComponents}
      </div>
    </>
  )
}

export default App
