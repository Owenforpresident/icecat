import React from 'react'

const Value = ({value}) => {
    return (
        <div>
            <p className="values">Value Code : {value.code} <br></br> French Value: {value.name.fr}<br></br> English Value : {value.name.en}</p>
        </div>
    )
}

export default Value
