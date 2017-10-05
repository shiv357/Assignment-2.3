// login credentials to be matched
var user_name = 'sachin123';
var password = 'windows';
// class that handles the login process
var Login = /** @class */ (function () {
    function Login() {
    }
    Object.defineProperty(Login.prototype, "userName", {
        /**
         * [get userName: This function checks whether the user is valid or not]
         * no parameter
         * @return {string} [A string message is returned that states whether the user is valid or not]
         */
        get: function () {
            if (this.isValid()) {
                return "The username " + this._userName + " is a valid user";
            }
            else {
                return 'The user is not valid';
            }
        },
        /**
         * [set userName: This function sets the instance variable '_userName']
         * @param {string} userName [This is the username of the user that is assigned to instance variable '_userName']
         * no return value
         */
        set: function (userName) {
            this._userName = userName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [isValid: This function validates the user's username and password]
     * no parameters
     * @return {boolean} [true: if username and password are valid,
     *                    false: if username or password or both are not valid]
     */
    Login.prototype.isValid = function () {
        if ((this._userName == user_name) && (password == 'windows')) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());
// login and validation of first user
var user1 = new Login();
user1.userName = 'sachin123';
var result1 = user1.userName;
document.getElementById("demo1").innerHTML = result1;
// login and validation of second user
var user2 = new Login();
user2.userName = 'kushal764';
var result2 = user2.userName;
document.getElementById("demo2").innerHTML = result2;
/*

    Note: We have to use the following command for successful compilation,

    Command: tsc --target es5 getset.ts

*/
