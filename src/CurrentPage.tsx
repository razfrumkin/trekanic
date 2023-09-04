import { useState } from 'react'
import Account from './Pages/Account'
import Login from './Pages/Login'
import { Page } from './Router'

function CurrentPage() {
    const [page, setPage] = useState<Page>(Page.Login)

    switch (page) {
        case Page.Login: return <Login setPage={setPage}/>
        case Page.Account: return <Account setPage={setPage}/>
        default: return <h1>Not Found</h1>
    }
}

export default CurrentPage