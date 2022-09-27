import styles from "./Detail.module.css"

export function Detail(){

    return(
        <>
          <div className={styles.main}>
            <div className={styles.tag}>
                <p>Active User</p>
                <p>
                    For August 2020
                </p>
            </div>

           <div>
           <div>
                <img className={styles.image} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="pic" />
                <p>Nurpul Dev</p>
                <hr />
                <p>Professional 6</p>
            </div>
            <div>
                <img className={styles.image} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="pic" />
                <p>Sandhya</p>
                <hr />
                <p>Professional 11</p>
            </div>
            <div>
                <img className={styles.image} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="pic" />
                <p>Elon Tusk</p>
                <hr />
                <p>Professional 15</p>
            </div>
           </div>
          </div>
        </>
    )
}