import React from 'react'

const Added = ({added}) => {
    if(added === null) {
        return null
        }
    return (
<div className="added">
{added}
    </div>
    )
}

export default Added