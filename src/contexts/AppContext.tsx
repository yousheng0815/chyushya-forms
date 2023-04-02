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
  forms: FC[]
  setForms: React.Dispatch<React.SetStateAction<FC<{}>[]>>
}

export const AppContext = createContext<ContextValue>({} as any)

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [menu, setMenu] = useState<ReactNode>(null)
  const [forms, setForms] = useState<FC[]>([])

  return (
    <AppContext.Provider value={{ menu, setMenu, forms, setForms }}>
      {children}
    </AppContext.Provider>
  )
}
