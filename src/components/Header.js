import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Stuff todo</h1>
        </header>
    )
}

const headerStyle={
    background:'#364d69',
    color:'#e0e0e0',
    padding: '10px',
    textAlign: 'center',
    // fontWeight: 'lighter'
}
export default Header;