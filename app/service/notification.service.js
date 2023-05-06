const db = require("../model")
const Notification = db.notification;

exports.create = (data) => {

    // Create a notification
    const notification = new Notification({
        temperature: data.temp,
        humidity: data.humi,
        time: Date.now(),
        device_id: data.di,
        co_detection: data.gas_det,
        co_level: data.gas,
        flame_detection: data.flame,
        soil_moisture_level: data.sm,
        bmp_temperature: data.bp_temp,
        bmp_pressure: data.bp_pressure,
        bmp_sea_level_pressure: data.bp_slp,
        bmp_altitude: data.bp_alti,
        bmp_altitude_with_sea_level_pressure: data.bp_alti_slp,
        wind_rpm:data.rpm,
        wind_speed:data.sp,
        device_id: data.device_id,
        type: data.type,
        data_from: data.data_from
    });

    notification
        .save()
        .then(data => {
            console.log("saved " + data)
        })
        .catch(err => {
            console.log(err.message)
        })
};