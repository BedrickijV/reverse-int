module.exports = function reverse (n) {
    if (n > 0 ) {
        let i = n.toString().split('').reverse().join('');
        return Number(i)
    } else {
        let j = n.toString().split('');
        j.shift();
        return Number(j.reverse().join(''));
    }
};
