

// // // import React from 'react';
// // // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// // // const MapContainer = () => {
// // //   const mapStyles = {
// // //     height: '400px',
// // //     width: '100%',
// // //   };

// // //   const defaultCenter = {
// // //     lat: 10.64818,
// // //     lng: 76.06743,
// // //   };

// // //   const markerPosition = {
// // //     lat: 10.64818,
// // //     lng: 76.06743,
// // //   };

// // //   return (
// // //     <LoadScript googleMapsApiKey="AIzaSyBr3fmCOTHqTplMFfNAW7IbB7kuErkYJPs">
// // //       <GoogleMap
// // //         mapContainerStyle={mapStyles}
// // //         zoom={12}
// // //         center={defaultCenter}
// // //       >
// // //         <Marker position={markerPosition} />
// // //       </GoogleMap>
// // //     </LoadScript>
// // //   );
// // // };

// // // export default MapContainer;



// // import React from 'react';
// // import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// // const MapContainer = () => {
// //   const mapStyles = {
// //     height: '400px',
// //     width: '100%',
// //   };

// //   // Replace these coordinates with your place's coordinates
// //   const myPlaceCoordinates = {
// //     lat: 10.64818,
// //     lng: 76.06743,
// //   };

// //   const name = 'World Air Travel and Tour'; // Replace this with your place's name

// //   const [showInfoWindow, setShowInfoWindow] = React.useState(false);

// //   const toggleInfoWindow = () => {
// //     setShowInfoWindow(!showInfoWindow);
// //   };

// //   return (
//     <LoadScript googleMapsApiKey="AIzaSyBr3fmCOTHqTplMFfNAW7IbB7kuErkYJPs">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={12}
//         center={myPlaceCoordinates}
//       >
//         <Marker
//           position={myPlaceCoordinates}
//           onClick={toggleInfoWindow}
//         >
//           {showInfoWindow && (
//             <InfoWindow onCloseClick={toggleInfoWindow}>
//               <div>
//                 <h4>{name}</h4>
//               </div>
//             </InfoWindow>
//           )}
//         </Marker>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;


