/**
 * Users controller.
 */

 module.exports = function(usersModel) {

    /**
     * Async method that returns a promise with the result or rejects with a message.
     */
    const getUsers = () => {
        return usersModel.getUsers();
    };

    const getUser = (userId) => {
        return usersModel.getUser(userId);
    };
    const createUser = (userDetails) => {
        return usersModel.createUser(userDetails);
    }

    const updateUser = (userId, userDetails) => {
        return usersModel.updateUser(userId, userDetails);
    }

    const deleteUser = (userId) => {
        return usersModel.deleteUser(userId);
    }
    return {
        getUsers: getUsers,
        getUser: getUser,
        createUser:createUser,
        updateUser:updateUser,
        deleteUser:deleteUser
    };
};