import React from 'react';
import useWindowSize from '../../Utils/useWindowSize';

function Gate() {
    const size = useWindowSize()

    let gate = {
        width: size.width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    let wallSectionLeft = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    }

    let wallSectionRight = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }

    let wallPanelThick = {
        width: 400,
        height: 180,
        background: "linear-gradient(#606139, #606139 .99%, #656640 1%, #656640 2.99%, #98988B 3%, #98988B 19.99%, #E6E5EA 20%, #E6E5EA 39.99%, #F4F4F4 40%)"
    }

    let wallPanelThin = {
        width: 400,
        height: 30,
        background: "linear-gradient(#606139, #606139 5.99%, #656640 6%, #656640 19.99%, #98988B 20%, #98988B)"
    }

    let thicccBoard = {
        background: "linear-gradient(70deg, #242021, #312927)",
        width: 80,
        height: 120,
    }

    let thinBoard = {
        background: "linear-gradient(70deg, #242021, #312927)",
        width: 30,
        height: 387,
        borderStyle: "hidden solid solid hidden",
    }
    
    let horizontalThinBoard = {
        background: "linear-gradient(70deg, #242021, #312927)",
        width: 400,
        height: 30,
    }

    let shingle = {
        width: 30,
        height: 60,
        background: "linear-gradient( 90deg, #13140F, #13140F 5.99%, #1B1B1B 6%, #1B1B1B 14.99%, #312C32 15%, #312C32 39.99%, #6B615F 40%, #6B615F 44.99%, #D3CFDB 45%, #D3CFDB 49.99%, #F3F2F6 50%, #F3F2F6 53.99%, #D3CFDB 54%, #D3CFDB 58.99%, #6B615F 59%, #6B615F 79.99%, #312C32 80%, #312C32 85.99%, #1B1B1B 86%, #1B1B1B 92.99%, #13140F 93%, #13140F)"
    }

    const Board = ({style}) => (
        <div style={style}>
        </div>
        
    )

    const WallSectionLeft = () => (
        <React.Fragment>
            <div style={wallSectionLeft}>
                {
                    Array.apply(null, {length: 15}).map((e, i) => {
                        return(
                            <Board style={shingle} />
                        )
                    })
                    
                }
            </div>
            <div style={wallSectionLeft}>
                <div>
                    <Board style={wallPanelThin} />
                    <Board style={horizontalThinBoard}/>
                    <Board style={wallPanelThick} />
                    <div style={wallSectionLeft}>
                        {
                            Array.apply(null, {length: 5}).map((e, i) => {
                                return(
                                    <Board style={thicccBoard} />
                                )
                            })
                            
                        }
                    </div>
                    <Board style={horizontalThinBoard}/>
                </div>
                <Board style={thinBoard} />
            </div>
        </React.Fragment>
    )

    const WallSectionRight = () => (
        <React.Fragment>
            <div style={wallSectionRight}>
                {
                    Array.apply(null, {length: 15}).map((e, i) => {
                        return(
                            <Board style={shingle} />
                        )
                    })
                    
                }
            </div>
            <div style={wallSectionRight}>
                <Board style={thinBoard} />
                <div>
                    <Board style={wallPanelThin} />
                    <Board style={horizontalThinBoard}/>
                    <Board style={wallPanelThick} />
                    <div style={wallSectionRight}>
                        {
                            Array.apply(null, {length: 5}).map((e, i) => {
                                return(
                                    <Board style={thicccBoard} />
                                )
                            })
                            
                        }
                    </div>
                    <Board style={horizontalThinBoard}/>
                </div>
            </div>
        </React.Fragment>
    )

    return(
        <div style={gate}>
            <div style={{}}>
                <WallSectionLeft />
            </div>
            <div style={{}}>
                <WallSectionRight />
            </div>
        </div>
    )
}

export default Gate