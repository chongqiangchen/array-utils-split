var splitArray = function splitArray(arr) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var len = arr.length;
  var temp = [];

  if (len <= flag) {
    return [arr].filter(function (item) {
      return item && item.length !== 0;
    });
  }

  var count = Math.ceil(len / flag);

  for (var i = 0; i < count; i++) {
    temp.push(arr.slice(flag * i, flag * (1 + i)));
  }

  return temp.filter(function (item) {
    return item && item.length !== 0;
  });
};

export { splitArray as default };
