import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user/";

class UserService{

    //post mapping
    signUpUser(user)
    {
        return axios.post(USER_API_BASE_URL+"signup",user);
    }

    //login user
    loginUser(loginInfo)
    {
        return axios.post(USER_API_BASE_URL+"login",loginInfo);
    }

    //fetching all user
    getUsers()
    {
        return axios.get(USER_API_BASE_URL);
    }
}

export default new UserService();