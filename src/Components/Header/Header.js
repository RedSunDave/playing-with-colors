import React from 'react';

let appheader = {
    height: 350,
    backgroundColor: '#7FBAC4',
    display: "flex",
    flexDirection: "column",
}

function Header() {

    return(
        <header style={appheader}>
            <h1 style={{ color: "#fff", fontSize: 75 }}>不動智</h1>
        </header>
    )
}

export default Header