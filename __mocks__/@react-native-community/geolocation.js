module.exports = {
    getCurrentPosition: jest.fn((success, error, options) => {
      success({
        coords: {
          latitude: 37.78825,
          longitude: -122.4324,
          altitude: null,
          accuracy: 5,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      });
    }),
  };