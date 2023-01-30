import React from 'react';
import useWindowSize from '../../Utils/useWindowSize';



function TextCard({text}) {

    const size = useWindowSize()

    let textCard = {
        height: size.height,
        width: size.width,
        backgroundColor: '#000',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }

    let fontStyle = {
        color: "#fff",
        // fontFamily: "matisse",
        fontSize: 75
    }

    return(
        <div style={textCard}>
            <h1 style={fontStyle}>{text}</h1>
        </div>
    )
}

export default TextCard