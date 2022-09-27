import styles from "./Sidebar.module.css"
import { BiCopy ,BiBarChartAlt ,BiCog, BiChat, BiCool, BiImages} from "react-icons/bi";
export function Sidebar(){


    return(
      <>
        <div className={styles.sidebar}>
         <div>
         <img className={styles.image} src="https://1.bp.blogspot.com/-arGwhEe2rG0/YTuyVzbS2NI/AAAAAAAAuUU/tKgGGBXs4Ig1kDG63eB8R_CKppQ8HY71QCLcBGAsYHQ/s920/Best-Profile-Pic-For-Boys%2B%25281%2529.png" alt="pic" />
         </div>
         <div className={styles.icon}>
         <div>
            <BiBarChartAlt/>
         </div>
         <div>
            <BiCool  />
         </div>
         <div>
            <BiImages/>
         </div>
         <div>
            <BiChat/>
         </div>
         <div>
             <BiCopy />
         </div>
         <div>
            <BiCog/>
         </div>
         </div>
        </div>
        
      </>

    )
}