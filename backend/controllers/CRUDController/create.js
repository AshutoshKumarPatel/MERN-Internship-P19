const create = async (Model, req, res) => {
    try {
        const data = await Model.create(req.body);
        return res.status(201).json({
            success: true,
            result: data,
            message: 'Successfully Created the document in Model ',
        });
    }
    catch (error) {
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } 
        else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }
};

module.exports = create;