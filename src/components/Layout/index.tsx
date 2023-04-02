import { FC } from "react"
import styles from "./index.module.scss"
import Nav from "../Nav"
import Content from "../Content"

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.container}>
        <div className={styles.a4}>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Layout
