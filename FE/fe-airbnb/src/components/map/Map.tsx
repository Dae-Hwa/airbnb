import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { mockupAccomodationData } from './mockupCoordinates';
import { apiKey } from '../../apiKey';

function Map() {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState<any>({});
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const coordinateList = mockupAccomodationData.rooms;
  const markers = coordinateList.map((coordinate, idx) => <Marker key={idx} position={{ lat: coordinate.latitude, lng: coordinate.longitude }}/>)
  const containerStyle = {
    width: '100%',
    height: '100vh',
  }

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  useEffect(() => {
    setCenter({
      lat: coordinateList[0].latitude,
      lng: coordinateList[0].longitude,
    });
  }, []);

  return (
    <MapContainer>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8} onLoad={onLoad} onUnmount={onUnmount}>
          {markers}
        </GoogleMap>
      ) : (
        <></>
      )}
    </MapContainer>
  )
}

const MapContainer = styled.div`
  width: 100%;
  padding-left: 10px;
`

export const MapMemo = memo(Map);
