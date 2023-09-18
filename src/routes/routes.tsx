import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAutCtx } from '../context/Auth'
import Home from '../pages/home/Home'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'
import Contacts from '../components/contacts/Contact'

//precisa de tipagem em Item?
const Private = ({ Item }) => {
    const { signed } = useAutCtx()

    return signed ? <Item/> : <Signin/>
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Private Item={Home} />}></Route>
                <Route path="/" element={<Signin/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/crud" element={<Private Item={Contacts} />}></Route>
                <Route path="*" element={<Signin/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp