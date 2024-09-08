const session = window.sessionStorage;
class SimpleLoginSession
{
    isSignIn(){
        if(session.getItem("user"))
         return true;
        return false;
    }

    getUser(){
        return JSON.parse(session.getItem("user"));
    }
}
export default new SimpleLoginSession();