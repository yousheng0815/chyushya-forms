import React, { FC } from "react"
import styles from "./index.module.scss"
import cx from "classnames"

interface Props {
  digit?: number
  alignLeft?: boolean
  multiLine?: boolean
}

const Field: FC<Props> = ({ digit = 1, alignLeft, multiLine }) => {
  return (
    <span
      contentEditable
      className={cx(styles.field, {
        [styles.alignLeft]: alignLeft,
        [styles.multiLine]: multiLine,
      })}
      style={{ minWidth: `${digit * 3}mm` }}
      onPaste={(e) => {
        e.preventDefault()
        var text = e.clipboardData.getData("text/plain")
        document.execCommand("insertHTML", false, text)
      }}
    />
  )
}

export default Field
