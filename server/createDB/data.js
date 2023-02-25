const initialData = [
    {
        userName: 'John',
        userId: 1,
        tasks: [
            {
                title: 'Walk the dog',
                completed: false,
                dueDate: '2023.02.28.',
            },
            {
                title: 'Visit granny',
                completed: true,
                dueDate: '2023.02.26.',
            },
            {
                title: 'Eat steak',
                completed: false,
                dueDate: '2023.03.02.',
            },
            {
                title: 'Drink wine',
                completed: true,
                dueDate: '2023.02.27.',
            },
        ]
    },
    {
        userName: 'Stephen',
        userId: 2,
        tasks: [
            {
                title: 'Walk granny',
                completed: true,
                dueDate: '2023.02.28.',
            },
            {
                title: 'Visit the dog',
                completed: false,
                dueDate: '2023.02.26.',
            },
            {
                title: 'Cook something to dinner',
                completed: false,
                dueDate: '2023.03.02.',
            },
            {
                title: 'Learn to fight',
                completed: true,
                dueDate: '2023.02.27.',
            },
        ]
    },
];

module.exports = initialData;