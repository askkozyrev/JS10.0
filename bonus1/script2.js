let year1, year2;
let years = [];
let final = [];
year1 = +prompt('Введите год начала отсчета', 1972);
year2 = +prompt('Введите год конца отсчета', 1995);
console.log('year1: ', year1);
console.log('year2: ', year2);
console.log('years: ', years);

while (isNaN(year1) || year1 === '' || year1 === null) {
  year1 = +prompt('Введите год начала отсчета', 1972);
}
while (isNaN(year2) || year2 === '' || year2 === null) {
  year2 = +prompt('Введите год конца отсчета', 1995);
}
while (year1 < year2 && year2 !== year1) {
  years.push(year2);
  year2--;
}
while (year1 > year2 && year1 !== year2) {
  years.push(year1);
  year1--;
}
if (year1 < year2 && year2 !== year1) {
  years.push(year1);
} else if (year1 > year2 && year1 !== year2) {
  years.push(year2);
}

for (let i = 0; i < years.length; i++) {
  if ((years[i] % 4 == 0 && years[i] % 100 != 0) || (years[i] % 400 == 0)) {
    final.push(years[i]);
  }
}
console.log('Високосные годы: ', final);