export const UserApi = {
    login: ({ userName, password }) => {
        if (userName == "admin" && password == "admin") {
            return true;
        }
        else {
            return false;
        }
    }
};