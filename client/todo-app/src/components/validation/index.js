export function validateCreate(value) {
    const currentDate = new Date();
    const dateValue = new Date(value.due_date);
    const errors = [];

    if (value.username !== undefined) {
        !value.username && (errors.name = 'Please provide a name!');
        value.username.length > 15 && (errors.name = 'Name cannot exceed 15 characters!');
        value.username.length < 5 && (errors.name = 'Name cannot be less than 5 characters!');
    };

    if (value.due_date !== undefined) {
        dateValue < currentDate && (errors.date = 'Please pick a date in the future!');
    };

    if (value.title !== undefined) {
        !value.title && (errors.title = 'Please provide a title!');
        value.title.length > 25 && (errors.title = 'Title cannot exceed 25 characters!');
        value.title.length < 4 && (errors.title = 'Title cannot be less than 4 characters!');
    };

    return errors;
};