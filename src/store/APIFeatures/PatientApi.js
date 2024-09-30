
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/30
// Modified-Date: 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const patientApi = createApi({
  reducerPath: 'patientApi',

  // https://s2e.tech-glazers.com/api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['patients, patient'],
  endpoints: (builder) => ({


    // get all the patients
    getPatients: builder.query({
      query: () => {
        return {
          url: '/pokemon'

        }
      },
      providesTags: ['patients']
    }),

    // get individual patient
    getPatientByID: builder.query({
      query: (id) => `pokemon/${id}`,

      providesTags: ['patient']
    }),


    //update a patient
    updatePatient: builder.mutation({
      query: (id, data) => {
        return {
          url: `pokemon/${id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags:['patient']
    })


  }),
})


export const { useGetPatientsQuery } = patientApi