import { FC, useContext } from "react"
import styles from "./index.module.scss"
import Nav from "../Nav"
import Content from "../Content"
import { AppContext } from "../../contexts/AppContext"

const Layout: FC = () => {
  const { setA4 } = useContext(AppContext)

  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.container}>
        <div className={styles.a4} ref={setA4}>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Layout
