import ReactDOM from 'react-dom/client'
import CurrentPage from './CurrentPage'

export enum Page {
    Login,
    Account
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CurrentPage/>
)