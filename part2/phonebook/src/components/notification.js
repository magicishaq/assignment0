import React from 'react'

const Notification = ({mess}) => {
    if(mess === null) {
        return null
    }

    return (
        <div className="error">
            {mess}
        </div>
    )
}

export default Notification