const users =[
    {
        id:1,
        name:"Prasad",
    },
    {
        id:2,
        name:"Dhammika",
    }
];

const getUsers =(cb) =>{
    cd(users);
};


const getUserById = (id, cb) =>{
    const user = users.find(user => user.id ==id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;