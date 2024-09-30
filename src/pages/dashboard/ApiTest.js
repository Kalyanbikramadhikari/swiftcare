import React from 'react'
import { useGetPatientsQuery } from '../../store/APIFeatures/PatientApi'


const ApiTest = () => {
    const {data, isLoading, error} = useGetPatientsQuery()
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        {data.results.map((item, index)=><div key={index}>
            {item.name}
            {item.url}
        </div>)}
          {/* <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
        </>
      ) : null}
    </div>
  )
}

export default ApiTest