import React, { forwardRef } from "react"
import styles from "./index.module.scss"
import cx from "classnames"

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  digit?: number
  alignLeft?: boolean
  multiLine?: boolean
}

const Field = forwardRef<HTMLSpanElement, Props>(
  ({ digit = 1, alignLeft, multiLine, className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        contentEditable
        className={cx(styles.field, className, {
          [styles.alignLeft]: alignLeft,
          [styles.multiLine]: multiLine,
        })}
        style={{ minWidth: `${digit * 3}mm` }}
        onPaste={(e) => {
          e.preventDefault()
          var text = e.clipboardData.getData("text/plain")
          document.execCommand("insertHTML", false, text)
        }}
        {...rest}
      />
    )
  }
)

export default Field
