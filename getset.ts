// login credentials to be matched
let user_name: string = 'sachin123'
let password: string = 'windows'

// class that handles the login process
class Login {

    private _userName: string;

    /**
     * [set userName: This function sets the instance variable '_userName']
     * @param {string} userName [This is the username of the user that is assigned to instance variable '_userName']
     * no return value
     */
    set userName ( userName: string ) {

        this._userName = userName;

    }

    /**
     * [get userName: This function checks whether the user is valid or not]
     * no parameter
     * @return {string} [A string message is returned that states whether the user is valid or not]
     */
    get userName(): string {

        if ( this.isValid() ) {

            return `The username ${this._userName} is a valid user`;

        } else {

            return 'The user is not valid';

        }

    }

    /**
     * [isValid: This function validates the user's username and password]
     * no parameters
     * @return {boolean} [true: if username and password are valid,
     *                    false: if username or password or both are not valid]
     */
    private isValid(): boolean {

        if ( (this._userName == user_name) && (password == 'windows') ) {
            
            return true;
        
        } else {
        
            return false;
        
        }

    }

}

// login and validation of first user
let user1 = new Login();
user1.userName = 'sachin123';
let result1: string = user1.userName;
document.getElementById("demo1").innerHTML = result1;

// login and validation of second user
let user2 = new Login();
user2.userName = 'kushal764';
let result2: string = user2.userName;
document.getElementById("demo2").innerHTML = result2;

/*

    Note: We have to use the following command for successful compilation,

    Command: tsc --target es5 getset.ts

*/
