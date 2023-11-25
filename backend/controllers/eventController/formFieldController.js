const mongoose = require("mongoose");

async function formFieldController(req, res) {
  try {
    const modelName = req.url.split("/")[1];

    const model = require("@/models/Events/" + modelName.charAt(0).toUpperCase() + modelName.slice(1));
    const modelSchema = model.schema.obj;

    const excludedFields = ['invitationList'];

    const extractFieldData = (field) => {
      // Check for nested fields
      if (field.type && field.type.name === 'Schema' && field.schema && field.schema.obj) {
        return Object.entries(field.schema.obj)
          .map(([nestedKey, nestedValue]) => extractFieldData({ name: nestedKey, ...nestedValue }))
          .flat();
      }

      // Skip SchemaObjectId and fields in the exclusion list
      if (field.type && field.type.name === 'SchemaObjectId') {
        return [];
      }

      // Determine the type of each field
      let typeName;

      if (field.type && field.type.name) {
        typeName = field.type.name.toLowerCase();
      } else {
        const typeString = field.type ? field.type.toString() : '';
        const matches = typeString.match(/\b(\w+)\b/);
        typeName = matches ? matches[0].toLowerCase() : 'unknown';
      }

      // Map the field types to user-friendly types
      const typeMapping = {
        string: 'text',
        number: 'number',
        boolean: 'checkbox',
        date: 'date',
      };

      // Get the user-friendly type or default to 'unknown'
      const userFriendlyType = typeMapping[typeName] || 'unknown';

      // Return an object with field name, type, and whether it's required
      return {
        name: field.name,
        type: userFriendlyType,
        required: field.required || false,
      };
    };

    const extractedData = Object.entries(modelSchema)
      .filter(([key, value]) => !excludedFields.includes(key))
      .map(([key, value]) => extractFieldData({ name: key, ...value }))
      .flat();

    // Send a successful response with the extracted data
    return res.status(200).json({
      success: true,
      result: extractedData,
      message: 'API worked successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      result: null,
      message: 'Internal server error',
    });
  }
}

module.exports = formFieldController;
