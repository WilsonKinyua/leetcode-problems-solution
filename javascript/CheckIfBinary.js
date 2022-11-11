var checkOnesSegment = function (s) {
  //   if (s.toString().indexOf("01") < 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // return s.toString().indexOf("01")

  return s.toString().indexOf("11") < 0 ? false : true;
};

console.log(checkOnesSegment(1011));
