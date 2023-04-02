import React, { FC, useContext } from "react"
import styles from "./index.module.scss"
import { AppContext } from "../../contexts/AppContext"
import { CloseButton } from "@chakra-ui/react"

const Content: FC = () => {
  const { forms, setForms } = useContext(AppContext)

  return (
    <div className={styles.container}>
      {forms.map((Form, i) => (
        <div key={Form.displayName} className={styles.formContainer}>
          {forms.length > 1 && (
            <CloseButton
              className={styles.closeButton}
              onClick={() => {
                setForms((forms) => {
                  const newForms = [...forms]
                  newForms.splice(i, 1)
                  return newForms
                })
              }}
            />
          )}
          <Form />
        </div>
      ))}
    </div>
  )
}

export default Content
