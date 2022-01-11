/**
 * This is the users Model logic.
 *
 *
 * @param config is the config object
 * @param database is a database representation
 */

 module.exports = function (database) {

    /**
     * Get all users
     */
    let getUsers = () => {
        return database.getAll();
    };

    // Get a single user
    let getUser = (userId) => {
        return database.getOne(userId);
    }

    /**
     * Create a user
     *
     * @param userDetails details of users to be created
     */
     let createUser = (userDetails) => {
        return database.insert(userDetails);
    };

    /**
     * Update a user's Record
     *
     * @param userId the key for the ToDo entity to update
     * @param userDetails The updated record to put in the database
     */
     let updateUser = (userId, userDetails) => {
        return database.update(userId, userDetails)
    };

    /**
     * Soft Delete User
     */
     let deleteUser = (userId) => {
        return database.delete(userId)
    }

    return {
        getUsers: getUsers,
        getUser: getUser,
        createUser:createUser,
        updateUser:updateUser,
        deleteUser:deleteUser
    };
};
