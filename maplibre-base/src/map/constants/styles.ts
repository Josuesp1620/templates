import { openStreetMap, arcgis_hybrid, positron, darkMatter, voyager } from './sources'

export const styles = [  
    { 
      label: 'OpenStreetMap', 
      source: openStreetMap,      
    },
    { 
      label: 'ArcGIS Hybrid', 
      source: arcgis_hybrid,      
    },
    { 
      label: 'Positron', 
      source: positron ,      
    },
    { 
      label: 'Dark Matter', 
      source: darkMatter,      
    },
    { 
      label: 'Voyager', 
      source: voyager ,      
    },
];