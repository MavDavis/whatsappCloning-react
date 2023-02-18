const userId = 1;

export const month= [
  "January",
  "February",
  "march",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const date = [
  1,,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
]
export const year = ()=>{
  const num = []
  for (let i = 1960; i < 2024; i++) {
    num.push(i);
  }
  return(num)
}
