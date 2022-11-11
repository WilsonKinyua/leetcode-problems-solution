var countSegments = function(s) {
    return s.split(" ").filter(Boolean).length
};

console.log(countSegments("Hello, my name is John"));