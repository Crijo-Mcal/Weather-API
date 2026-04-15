export function validateLocation(req, res, next) {
    const { location } = req.params;
    if (typeof location !== "string") {
        res.status(400).json({
            error: "location must be string"
        });
        return;
    }
    next();
}
