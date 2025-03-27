def position(letter):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    return f'Position of alphabet: {alpha.find(letter) + 1}'
import codewars_test as test
from solution import position
​
@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(position("a"), "Position of alphabet: 1")
        test.assert_equals(position("z"), "Position of alphabet: 26")
        test.assert_equals(position("e"), "Position of alphabet: 5")
​