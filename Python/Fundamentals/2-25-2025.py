'''
        Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

'''
def problem(a):
    return 'Error' if type(a) is str else a * 50 + 6

'''
        Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

        When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

        Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

        S is misinterpreted as 5
        O is misinterpreted as 0
        I is misinterpreted as 1
        The test cases contain numbers only by mistake.
'''
def correct(s):
    return s.replace('5', 'S').replace('0', 'O').replace('1', 'I')

'''
        Write a function to split a string and convert it into an array of words.

        Examples (Input ==> Output):
        "Robin Singh" ==> ["Robin", "Singh"]

        "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
'''

def string_to_array(s):
    return s.split(' ')

'''
        Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

        "I love you"
        "a little"
        "a lot"
        "passionately"
        "madly"
        "not at all"
        If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

        When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

        Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
'''

def how_much_i_love_you(nb_petals):
    sayings = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return sayings[(nb_petals % 6) - 1]

'''
        Write a function which takes a number and returns the corresponding ASCII char for that value.

        Example:

        65 --> 'A'
        97 --> 'a'
        48 --> '0
        For ASCII table, you can refer to http://www.asciitable.com/
'''

def get_char(c):
    return chr(c)