import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Todos from './components/Todos'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}