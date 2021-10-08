const apiCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      resolve({
        lat: coords.latitude,
        lon: coords.longitude
      })
    }, (err) => {
      reject(err)
    })
  })
}

const apiWatchCoords = (accuracy = false) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(({ coords }) => {
      resolve({
        lat: coords.latitude,
        lon: coords.longitude
      })
    }, (err) => {
      reject(err)
    }, {
      enableHighAccuracy: accuracy
    })
  })
}

export { apiCoords, apiWatchCoords }
