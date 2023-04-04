import React, { FC, useContext } from "react"
import styles from "./index.module.scss"
import { AppContext } from "../../contexts/AppContext"
import { CloseButton } from "@chakra-ui/react"

const Content: FC = () => {
  const { forms, setForms } = useContext(AppContext)

  return (
    <div className={styles.container}>
      {forms.map((Form, i) => (
        <div key={i} className={styles.formContainer}>
          <Form />
        </div>
      ))}
    </div>
  )
}

export default Content
