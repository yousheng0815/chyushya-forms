import React, { FC } from "react"
import styles from "./index.module.scss"
import cx from "classnames"
import Field from "../../components/Field"

const Form56: FC = () => {
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
            <Field />
          </div>
          <div className={styles.text}>經辦人</div>
          <div>
            <Field />
          </div>
        </div>
        <div className={styles.tr}>
          <div className={styles.text}>租借期間</div>
          <div>
            <Field digit={4} />年<Field />月<Field />日<Field />
            時起至
            <Field />年<Field />月<Field />日<Field />
            時止共
            <Field />日
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
            <Field />
            (未稅)
          </div>
          <div className={styles.text}>租借金額</div>
          <div>
            <Field />
            (未稅)
          </div>
        </div>
      </div>
    </div>
  )
}

Form56.displayName = "收款明細單"

export default Form56
