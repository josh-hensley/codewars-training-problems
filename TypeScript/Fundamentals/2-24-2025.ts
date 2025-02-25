/*
    Count the number of divisors of a positive integer n.

    Random tests go up to n = 500000, but fixed tests go higher.

    Examples (input --> output)
    4 --> 3 // we have 3 divisors - 1, 2 and 4
    5 --> 2 // we have 2 divisors - 1 and 5
    12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
    30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
    Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers 
    are counted in each case.
*/

export function divisors(n: number) {
    let count: number = 0;
    for (let i = n; i > 0; i--){
      if (n % i == 0) count++; 
    };
    return count;
  }

/*
    Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept 
    in the bank in order for it to amount to a desired sum of money 'D'.

    The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

    Note to Tax: not the invested principal is taxed, but only the year's accrued interest

    Example:

      Let P be the Principal = 1000.00      
      Let I be the Interest Rate = 0.05      
      Let T be the Tax Rate = 0.18      
      Let D be the Desired Sum = 1100.00


    After 1st Year -->
      P = 1041.00
    After 2nd Year -->
      P = 1083.86
    After 3rd Year -->
      P = 1128.30
    Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

    Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

    Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration 
    that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

export function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
  let y = 0;
  while(principal < desired){
    const capitalGains = principal * interest;
    const taxes = capitalGains * tax;
    const gainsAfterTaxes = capitalGains - taxes;
    principal += gainsAfterTaxes;
    y++
  }
  return y;
}

/*
    Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, 
    employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

    The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to 
    set an alarm). It should return false otherwise. Examples:

    employed | vacation 
    true     | true     => false
    true     | false    => true
    false    | true     => false
    false    | false    => false
*/

export const setAlarm = (employed: boolean, vacation: boolean) =>  employed && !vacation;

/*
    Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

    Examples
    "Hi!"     ---> "Hi"
    "Hi!!!"   ---> "Hi!!"
    "!Hi"     ---> "!Hi"
    "!Hi!"    ---> "!Hi"
    "Hi! Hi!" ---> "Hi! Hi"
    "Hi"      ---> "Hi"
*/

export const remove = (s: string): string => s[s.length - 1] === "!" ? s.split('').slice(0,-1).join('') : s;

/*
    In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0,
     representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

    For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

    Your function will be tested with pre-made examples as well as random ones.

    If you can, try writing it in one line of code.
*/

export const findDifference = (a: [number, number, number], b: [number, number, number]): number => 
  Math.abs(
    (a.reduce((prev, curr)=> prev * curr, 1)) - 
    (b.reduce((prev, curr)=> prev * curr, 1))
  );
