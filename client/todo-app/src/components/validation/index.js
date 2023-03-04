export function validateCreate(value) {
    const errors = [];

    if (!value) {
        errors.name = 'Please provide a name!'
    } else if (value.length > 20) {
        errors.name = 'Name cannot exceed 20 characters!';
    } else if (value.length < 5) {
        errors.name = 'Name cannot be less than 5 characters!';
    }

    return errors;
};