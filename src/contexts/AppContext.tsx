import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react"

type ContextValue = {
  menu: ReactNode
  setMenu: React.Dispatch<React.SetStateAction<ReactNode>>
  formInfo: FormInfo | undefined
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo | undefined>>
  forms: FC[]
  setForms: React.Dispatch<React.SetStateAction<FC<{}>[]>>
  a4: HTMLDivElement | null | undefined
  setA4: React.Dispatch<React.SetStateAction<HTMLDivElement | null | undefined>>
}

export const AppContext = createContext<ContextValue>({} as any)

type FormInfo = {
  label: string
  saveAsName: string
}

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [menu, setMenu] = useState<ReactNode>(null)
  const [formInfo, setFormInfo] = useState<FormInfo>()
  const [forms, setForms] = useState<FC[]>([])
  const [a4, setA4] = useState<HTMLDivElement | null>()

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        formInfo,
        setFormInfo,
        forms,
        setForms,
        a4,
        setA4,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
