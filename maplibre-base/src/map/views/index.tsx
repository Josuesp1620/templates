import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { NavigationControl } from 'react-map-gl/maplibre';
import mapLibregl from 'maplibre-gl';
import { PanelLayers } from './PanelLayers';
import { PanelLayersHelper } from './helper';
import { FullscreenControl, ScaleControl } from 'react-map-gl';

const INITIAL_POSITION = {
  latitude: -13.537871832498867,
  longitude: -71.94407742816011,
}

const ZOOM = 14;

export const MapView = () => {

    const helper = PanelLayersHelper()

    return (        
        <div className="grid grid-cols-6 bg-[#e5e7eb]">
            <div className="col-span-1 p-4">                
                <PanelLayers helper={helper}/>            
            </div>

            <div className='col-span-5'>
                <Map
                    attributionControl={false}
                    initialViewState={{longitude: INITIAL_POSITION.longitude, latitude: INITIAL_POSITION.latitude, zoom: ZOOM}}
                    mapLib={mapLibregl}  interactive={true}
                    mapStyle={helper.mapStyle.source}
                    style={{width:  '100%', height: '100vh'}}>
                        <FullscreenControl position='top-right'/>
                        <ScaleControl position='bottom-left' />
                        <NavigationControl position='bottom-right' />
                </Map>    
            </div>                    
        </div>        
    )
}