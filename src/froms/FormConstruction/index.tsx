import { FC } from "react"
import styles from "./index.module.scss"

const FormConstruction: FC = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="/form-construction.html"
        className={styles.iframe}
        title="form-construction"
      />
    </div>
  )
}

FormConstruction.displayName = "施工單"

export default FormConstruction
