const read = async (Model, req, res) => {
    try {
        const result = await Model.findOne({ _id: req.params.id });
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No document found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result: result,
                message: 'we found this document by this id: ' + req.params.id,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
};

module.exports = read;
