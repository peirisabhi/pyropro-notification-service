module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            temperature: String,
            humidity: String,
            time: String,
            device_id: String,
            type: String,

        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Notification = mongoose.model("notification", schema);
    return Notification;
};