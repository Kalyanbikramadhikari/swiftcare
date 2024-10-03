// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/30
// Modified-Date: 



import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { patientApi } from './APIFeatures/PatientApi'
import { rtkQueryErrorLogger } from './middleware/errorHandlingMiddleware'
import PatientSlice from './reducerSlices/PatientSlice'
import { staffApi } from './APIFeatures/StaffApi'
import StaffSlice from './reducerSlices/StaffSlice'



export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [patientApi.reducerPath]: patientApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer,
    patientSlice:PatientSlice,
    staffSlice:StaffSlice 
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)