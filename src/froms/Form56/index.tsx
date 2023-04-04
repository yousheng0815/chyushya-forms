import React, { FC, useContext, useEffect, useState } from "react"
import styles from "./index.module.scss"
import cx from "classnames"
import Field from "../../components/Field"
import { AppContext } from "../../contexts/AppContext"
import { CloseButton } from "@chakra-ui/close-button"

const AFTER_TAX_CLASS_NAME = "afterTax"
const Form56: FC = () => {
  const { setFormInfo } = useContext(AppContext)

  const [beforeTaxField, setBeforeTaxField] = useState<HTMLSpanElement | null>(
    null
  )
  const [closeButRef, setCloseButRef] = useState<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!beforeTaxField || !closeButRef) return

    // to support offline editing
    beforeTaxField.setAttribute(
      "onblur",
      `
        const amount = Number(this.innerText.replace(/\\D/g, ""))
        this.innerText = amount.toLocaleString("en-US")
        this.parentElement.parentElement.getElementsByClassName('${AFTER_TAX_CLASS_NAME}')[0].innerText =
          (amount * 1.05).toLocaleString("en-US", { maximumFractionDigits: 0 })
      `
    )
    closeButRef.setAttribute(
      "onclick",
      `
        this.parentElement?.classList.toggle("${styles.hide}")
    `
    )
  }, [beforeTaxField, closeButRef])

  return (
    <div className={cx(styles.container)}>
      <CloseButton ref={setCloseButRef} className={styles.closeButton}>
        &#x1F648;
      </CloseButton>
      <div className={styles.header}>
        <div className={styles.h1}>佺詳電器企業有限公司</div>
        <div>收款明細單</div>
      </div>
      <div className={styles.table}>
        <div
          className={styles.tr}
          style={{ gridTemplateColumns: "auto 6fr auto 5fr" }}
        >
          <div className={styles.text}>承租廠商</div>
          <div>
            <Field
              alignLeft
              onInput={(e) => {
                const saveAsName = e.currentTarget.innerText
                setFormInfo(
                  (formInfo) =>
                    formInfo && {
                      ...formInfo,
                      saveAsName,
                    }
                )
              }}
            />
          </div>
          <div className={styles.text}>經辦人</div>
          <div>
            <Field />
          </div>
        </div>
        <div className={styles.tr}>
          <div className={styles.text}>租借期間</div>
          <div>
            <Field digit={3} />年<Field />月<Field />日<Field digit={5} />
            時起至
            <Field digit={3} />年<Field />月<Field />日<Field digit={5} />
            時止共
            <Field digit={3} />日
          </div>
        </div>
        <div className={styles.tr}>
          <div className={styles.text}>租借地點</div>
          <div>
            <Field alignLeft />
          </div>
        </div>
        <div className={styles.tr}>
          <div className={styles.text}>商品內容</div>
          <div>
            <Field alignLeft />
          </div>
        </div>
        <div
          className={styles.tr}
          style={{ gridTemplateColumns: "auto 1fr auto 1fr" }}
        >
          <div className={styles.text}>租借金額</div>
          <div>
            <Field ref={setBeforeTaxField} />
            (未稅)
          </div>
          <div className={styles.text}>租借金額</div>
          <div>
            <Field className={AFTER_TAX_CLASS_NAME} />
            (含稅)
          </div>
        </div>
      </div>
    </div>
  )
}

Form56.displayName = "收款明細單"

export default Form56
