import './App.css'
import EnrollmentForm from './components/EnrollmentForm'
import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/LoginForm'

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <LoginForm />
            </div>
        </ChakraProvider>
    )
}

export default App
