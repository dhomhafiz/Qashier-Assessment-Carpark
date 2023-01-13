import React, { useState } from 'react'

function LoopArray() {
const [carPark, setCarPark] = useState();

const getCarPark = () => {
    fetch("https://api.data.gov.sg/v1/transport/carpark-availability").then((response) => 
        response.json().then((carPark)=> {
            console.log(carPark)
            setCarPark(carPark)
        })
    );
}


  return (
    <div>
        Car Park Lot Availability <br />
        <button onClick={getCarPark}>Get Data</button>
        <pre>
            {JSON.stringify(carPark, null, 2)}
        </pre>
    </div>
  )
}

export default LoopArray
