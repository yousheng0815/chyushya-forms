import React, { FC, useContext } from "react"
import styles from "./index.module.scss"
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react"
import { AppContext } from "../../contexts/AppContext"
import Form56 from "../../froms/Form56"
import FormConstruction from "../../froms/FormConstruction"
import cx from "classnames"

interface Props {}

const Nav: FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement | null>(null)

  const { menu, setMenu, formInfo, setFormInfo, setForms, a4 } =
    useContext(AppContext)

  return (
    <div className={styles.nav}>
      <Menu autoSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={
                <div
                  className={cx(styles.chevronDown, {
                    [styles.open]: isOpen,
                  })}
                />
              }
            >
              {formInfo?.label}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setFormInfo({
                    label: "收款明細單",
                    saveAsName: "",
                  })
                  setForms([Form56])
                  setMenu(
                    <>
                      <Button
                        onClick={() => {
                          const form56: FC = Form56.bind(null)
                          form56.displayName = `${
                            Form56.displayName
                          }.${Date.now()}`
                          setForms((forms) => [...forms, form56])
                        }}
                        colorScheme="blue"
                      >
                        新增收款明細單
                      </Button>
                    </>
                  )
                }}
              >
                收款明細單
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFormInfo({
                    label: "施工單",
                    saveAsName: "",
                  })
                  setForms([FormConstruction])
                  setMenu(null)
                }}
              >
                施工單
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <div className={styles.menu}>
        <Button
          onClick={(e) => {
            var element = document.createElement("a")
            let content = `
              <html>
              <head>
                ${Array.from(
                  document.querySelectorAll<HTMLLinkElement>(
                    'link[rel="stylesheet"]'
                  )
                )
                  .map(
                    (link) => `<link href="${link.href}" rel="stylesheet" />`
                  )
                  .join("")}
              </head>
              <body>
                ${a4?.outerHTML ?? "(空白表單)"}
              </body>
              </html>`
            element.setAttribute(
              "href",
              "data:text/html;charset=utf-8," + encodeURIComponent(content)
            )
            element.setAttribute(
              "download",
              `${formInfo?.label}(${formInfo?.saveAsName || "未命名"})_暫存.htm`
            )
            element.style.display = "none"
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
          }}
        >
          下載
        </Button>
        <Button onClick={() => window.print()}>列印</Button>
        <Button
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          as={IconButton}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path>
            </svg>
          }
        />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>選單</DrawerHeader>

          <DrawerBody>{menu}</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              關閉
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              完成
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Nav
