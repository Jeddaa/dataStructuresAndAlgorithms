# @param {Integer[]} num
# @param {Integer} k
# @return {Integer[]}
def add_to_array_form(num, k)
    newNum = (num.join()).to_i
    return (newNum + k).digits.reverse
end