import React from 'react';
import useWindowSize from '../../Utils/useWindowSize';

function Treeline() {
    
    const size = useWindowSize()

    let treeline = {
        height: 400,
        width: size.width,
        backgroundColor: '#779565',
        display: "flex",
        flexDirection: "column",
    }

    return(
        <div style={treeline}>
        </div>
    )
}

export default Treeline