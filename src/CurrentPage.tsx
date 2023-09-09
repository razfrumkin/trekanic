import { useEffect, useState } from 'react'
import Account from './Pages/Account'
import Login from './Pages/Login'
import Page from './Models/Page'
import { isAuthenticated } from './Service'

function CurrentPage() {
    const [page, setPage] = useState<Page>(Page.Loading)

    useEffect(() => {
        isAuthenticated().then(response => {
            setPage(response ? Page.Account : Page.Login)
        })
    }, [])

    switch (page) {
        case Page.Login: return <Login setPage={setPage}/>
        case Page.Account: return <Account setPage={setPage}/>
        case Page.Loading: return <h1>Loading...</h1>
        default: return <h1>Not Found</h1>
    }
}

export default CurrentPage