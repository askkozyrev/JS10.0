let excerpt = function (param) {
  console.log('param: ', param);
  console.log('param: ', param.length);

  let result = '';
  if (typeof param !== 'string') {
    alert('Введите текст не менее 30 символов');
  } else if (param.length > 30 && typeof param === 'string'){
    result += param.substr(0, 29).trim();
    result += '...';
    return document.write(result);
  } else if (param.length <= 30 && typeof param === 'string') {
    result = param;
    return document.write(result);
  }
};
let argument = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
excerpt(argument);
