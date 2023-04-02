import { ChakraProvider } from "@chakra-ui/react"
import { AppContextProvider } from "./contexts/AppContext"
import Layout from "./components/Layout"

function App() {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </ChakraProvider>
  )
}

export default App
