import { FC } from "react"
import styles from "./index.module.scss"
import Nav from "../Nav"
import Content from "../Content"

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.a4}>
        <Content />
      </div>
    </div>
  )
}

export default Layout
