import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path='/' component={} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
