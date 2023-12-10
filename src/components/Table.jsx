import { useContext } from "react"
import { AppContext } from "../provider"

const Table = ({id}) => {
  const [globalmemo, dispatch] = useContext(AppContext);

  return (
    <div>
        Stůl číslo {id} <button onClick={() => {dispatch({typeof: "eat", payload: [id, 0, 1]})}}>vypil</button> {globalmemo.tables[id][0]}
        <div>
            ...
        </div>
    </div>
  )
}

export default Table