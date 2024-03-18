import React, { useState } from "react";

function Occasion() {
    const [occasion, setOccasion] = useState('')

    return (
      <>
        <div 
        label='Occasion'
        htmlFor='booking-occasion'>
            <select
            id='booking-occasion'
            onChange={e => setOccasion(e.target.value)}
            >
                {occasion}
            </select>
        </div>
      </>
    );
  }
  
  export default Occasion;