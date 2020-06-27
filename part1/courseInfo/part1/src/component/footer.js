import React from 'react'
//inline style of footer
const Footer = () => {
    //hypen is changed to camel case, int is used for px
    const footerStyle = {
        color: 'green',
        fontSize: 16, 
        fontStyle: 'italic'
    }

    const footerMessage = ' Note app, Department of Computer Science , University of Helsinki 2020 '

    return (
        <div style={footerStyle}>
        <br />
        <em>{footerMessage}</em>
            </div>
    )
}

export default Footer