import { styles } from "@/map/constants/styles"
import React from "react"

export const PanelLayersHelper = () => {
    const [mapStyle, setMapStyle] = React.useState(styles[0])

    return {
        mapStyle, setMapStyle
    }
}