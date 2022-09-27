import { useContext } from "react"
import { AppContext } from "../Context/Context"
import styles from "./Body.module.css"
import { Detail } from "./Detail"

export function Body(){
      const {handleTheme} = useContext(AppContext)

    return(
        <>
          <div className={styles.dash}>
             <div className={styles.button}>
               <h1>My DashBoard</h1>
               <button onClick={handleTheme} >Theme</button>
             </div>
          
          <div>
            <Detail />
          </div>

          </div>


        </>
    )
}