import React from 'react'

interface ILogoWB {
    height: string
    width: string
}

const LogoWB = ({height, width}: ILogoWB) => {

    const [colors] = React.useState({
        color1: '#dcdcdb',
        color2: '#a7d6d7'
    })

    return (
        <svg xmlns= "http://www.w3.org/2000/svg" viewBox = "0 0 97.57 68.33" width={width} height={height}> <defs></defs > <polygon fill={colors.color1} points = "29.58 12.14 11.98 49.23 18.27 60.75 41.53 12.14 29.58 12.14" /> <polygon fill={colors.color1} points = "3.18 12.35 11.77 27.02 19.94 12.14 3.18 12.35" /> <polygon fill={colors.color1} points = "50.96 12.14 33.35 50.48 39.22 61.17 62.27 12.14 50.96 12.14" /> <path fill={colors.color1} d = "M73.76,35.19l-.06-.71s12.45-2.84,11.61-12.91-14.77-9.49-14.77-9.49l-10,.06c.12.16.24.32.35.49a5.81,5.81,0,0,1,2.15,0c5.34,1.07,8.08,6.83,7.87,11.31-.12,2.66.22,8.91-13.9,10.52l0,.69S72.7,33.62,73,46.62,61.53,59.77,56.75,59.77v.7l15.53-.12s16.07.84,17.36-11.55S73.76,35.19,73.76,35.19Z" /> <circle fill={colors.color2} cx = "93.04" cy = "58.12" r = "2.07" /> </svg>
    )
}

export default LogoWB
