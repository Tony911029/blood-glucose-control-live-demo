import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../pages/NotFound/NotFound.jsx'
import { ROOT } from './CONSTANTS.jsx'

const Home = lazy(() =>
  import(/* webpackChunkName: "HOME" */ '../pages/Home')
)

export function RouterConfig() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROOT} element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}