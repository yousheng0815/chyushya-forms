import React, { FC, useContext, useRef } from "react"
import styles from "./index.module.scss"
import cx from "classnames"
import Field from "../../components/Field"
import { AppContext } from "../../contexts/AppContext"

const Form56: FC = () => {
  const { setFormInfo } = useContext(AppContext)
  const afterTaxRef = useRef<HTMLSpanElement | null>(null)

  return (
    <div className={cx(styles.container)}>
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
            <Field
              onBlur={(e) => {
                const amount = Number(
                  e.currentTarget.innerText.replace(/\D/g, "")
                )
                e.currentTarget.innerText = amount.toLocaleString("en-US")
                if (afterTaxRef.current) {
                  afterTaxRef.current.innerText = (
                    amount * 1.05
                  ).toLocaleString("en-US", { maximumFractionDigits: 0 })
                }
              }}
            />
            (未稅)
          </div>
          <div className={styles.text}>租借金額</div>
          <div>
            <Field ref={afterTaxRef} />
            (含稅)
          </div>
        </div>
      </div>
    </div>
  )
}

Form56.displayName = "收款明細單"

export default Form56
