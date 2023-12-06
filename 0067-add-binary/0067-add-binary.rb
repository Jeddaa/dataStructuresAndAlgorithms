# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    su = a.to_i(2) + b.to_i(2)
    return su.to_s(2)
end