// Check for sensor support
if ('DeviceMotionEvent' in window) {
    window.addEventListener('devicemotion', (event) => {
        const acc = event.accelerationIncludingGravity;
        document.getElementById('accelerometer-data').innerText = `Accelerometer: x=${acc.x.toFixed(2)}, y=${acc.y.toFixed(2)}, z=${acc.z.toFixed(2)}`;
    });
}

if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', (event) => {
        document.getElementById('gyroscope-data').innerText = `Gyroscope: alpha=${event.alpha.toFixed(2)}, beta=${event.beta.toFixed(2)}, gamma=${event.gamma.toFixed(2)}`;
    });
}

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude, accuracy } = position.coords;
        document.getElementById('geolocation-data').innerText = `Geolocation: lat=${latitude.toFixed(5)}, lon=${longitude.toFixed(5)}, accuracy=${accuracy.toFixed(1)}m`;
    });
} else {
    document.getElementById('geolocation-data').innerText = 'Geolocation not supported';
}

if ('AmbientLightSensor' in window) {
    try {
        const lightSensor = new AmbientLightSensor();
        lightSensor.addEventListener('reading', () => {
            document.getElementById('ambient-light-data').innerText = `Ambient Light: ${lightSensor.illuminance} lux`;
        });
        lightSensor.start();
    } catch (error) {
        document.getElementById('ambient-light-data').innerText = 'Ambient Light sensor not supported';
    }
} else {
    document.getElementById('ambient-light-data').innerText = 'Ambient Light sensor not supported';
}
