import Geolocation from '@react-native-community/geolocation';
import { Location } from '../../domain/location';

export default function useLocation(): Location  {

    Geolocation.getCurrentPosition(
        (position: any) => {
            const { latitude, longitude } = position.coords;
            return {
                latitude: {
                    title: 'GEOLOCATION.YOUR_LAT',
                    value: latitude,
                },
                longitude: {
                    title: 'GEOLOCATION.YOUR_LONG',
                    value: longitude,
                },
            };
        },
        (error) => console.log(error),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return {
        latitude: {
            title: 'GEOLOCATION.YOUR_LAT',
            value: 0,
        },
        longitude: {
            title: 'GEOLOCATION.YOUR_LONG',
            value: 0,
        },
    };}
