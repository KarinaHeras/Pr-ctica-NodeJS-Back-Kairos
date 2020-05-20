const db = require('../db');
const repository = require('../resources/users/repository');

db.connect()
.then(() => {
    console.log('Loading admin users from db-data/adminUsers.json');
    const users = require('../db-data/adminUsers.json');
    console.log(`${users.length} users have been loaded`);

    console.log('Creating users on database');
    repository.createUser(users)
    .then(() => {
        console.log('Users succesfully created on database');
    })
    .catch((err) => {
        console.log('There was a problem creating users in database', err.message);
    })
    .finally(() => {
        process.exit();
    });
});

