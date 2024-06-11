import { openStreetMap, arcgis_hybrid, google_streets, google_satelite, positron, darkMatter, voyager, google_satelite_hybrid } from './sources'

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
      label: 'Google Streets', 
      source: google_streets,      
    },
    { 
      label: 'Google Satelite', 
      source: google_satelite,      
    },
    { 
      label: 'Google Satelite Hybrid', 
      source: google_satelite_hybrid,      
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