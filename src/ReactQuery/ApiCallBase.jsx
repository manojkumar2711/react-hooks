import React from 'react'
import AdvanceApiCall from './AdvanceApiCall'
import {QueryClientProvider , QueryClient} from "@tanstack/react-query"

function ApiCallBase() {

    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

         <AdvanceApiCall/> 

    </QueryClientProvider>
  )
}

export default ApiCallBase
