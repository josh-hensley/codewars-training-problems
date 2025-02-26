/*
        Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

        * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
        * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
        * url = "https://www.cnet.com"                -> domain name = cnet"
*/

const domainName = (url) => {
    if (url.includes('//')) {
        address = url.split('//')[1].split('.')
    }
    else {
        address = url.split('.')
    }
    if (address.includes('www')) {
        return address[1]
    }
    else {
        return address[0]
    }
}

function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

/*
        Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

        Square all numbers k (0 <= k <= n) between 0 and n.

        Count the numbers of digits d used in the writing of all the k**2.

        Implement the function taking n and d as parameters and returning this count.

        Examples:
        n = 10, d = 1 
        the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
        We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

        The function, when given n = 25 and d = 1 as argument, should return 11 since
        the k*k that contain the digit 1 are:
        1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
        So there are 11 digits 1 for the squares of numbers between 0 and 25.
        Note that 121 has twice the digit 1.
*/

function nbDig(n, d) {
    numArray = [];
    count = 0;
    for (let i = 0; i <= n; i++) {
        numArray.push(i * i)
    }
    numArray.forEach(num => {
        digitArr = num.toString().split('').filter(val => val == d)
        count += digitArr.length
    })
    return count;
}

/*
        Issue
        Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

        The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

        The pipes are correct when each pipe after the first is 1 more than the previous one.

        Task
        Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 
        1 for each index from the minimum value up to the maximum value (both included).

        Example
        Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers) {
    output = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        output.push(i)
    }
    return output;
}

/*
        Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

        Examples:

        encrypt("012345", 1)  =>  "135024"
        encrypt("012345", 2)  =>  "135024"  ->  "304152"
        encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

        encrypt("01234", 1)  =>  "13024"
        encrypt("01234", 2)  =>  "13024"  ->  "32104"
        encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
        Together with the encryption function, you should also implement a decryption function which reverses the process.

        If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    if (text === '') return '';
    else if (!text) return null;
    let encrypted = text;
    for (n; n > 0; n--) {
        let odd = '';
        let even = '';
        for (let i = 0; i < encrypted.length; i++) {
            i % 2 != 0 ? odd += encrypted[i] : even += encrypted[i];
        }
        encrypted = odd + even
    }
    return encrypted || null;
}

function decrypt(encryptedText, n) {
    if (encryptedText === '') return '';
    else if (!encryptedText) return null;
    let decrypt = encryptedText || '';
    for (n; n > 0; n--) {
        let odd = decrypt.slice(0, Math.floor(decrypt.length / 2));
        let even = decrypt.slice(Math.floor(decrypt.length / 2), decrypt.length);
        console.log('length: ', decrypt.length);
        console.log('odd: ', odd, ', ', odd.length);
        console.log('even: ', even, ', ', even.length);
        let newPass = '';
        for (let i = 0; i < odd.length; i++) {
            newPass += even[i];
            newPass += odd[i];
        }
        if (even.length > odd.length) newPass += even[even.length - 1]
        decrypt = newPass;
    }
    return decrypt;
}
/*
        The Story:
        Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
        With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough
        space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the
        passengers.

        Task Overview:
        You have to write a function that accepts three parameters:

        cap is the amount of people the bus can hold excluding the driver.
        on is the number of people on the bus excluding the driver.
        wait is the number of people waiting to get on to the bus excluding the driver.
        If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

        Usage Examples:
        cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
        cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

function enough(cap, on, wait) {
    return wait > cap - on ? Math.abs((cap - on) - wait) : 0;
}
