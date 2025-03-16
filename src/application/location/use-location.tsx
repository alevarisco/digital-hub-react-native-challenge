import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';

export default function useLocation()  {

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

    useEffect(() => {
      (async () => {
        Geolocation.getCurrentPosition(
            (position: any) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude: latitude,
                    longitude: longitude,
                  });
            },
            (error) => console.log(error),
              { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      })();
    }, []);

    return location || { latitude: 0, longitude: 0 };
}
