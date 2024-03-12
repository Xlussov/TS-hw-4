//! 1


interface IUser {
   name?: string,
   age: number,
}

const user1: IUser = {
   name: 'Danil',
   age: 16,
}

const user2: IUser = {
   age: 16
}


const isObject = (data: unknown): data is object=> {
   return typeof data === 'object'
}


const isName = (user: IUser): user is IUser=> {
   return 'name' in user
}

const setNewError = (error: string): void => {
   throw new Error(error)
}


const checkName = (userData: IUser): void  => {
   if(isObject(userData) && isName(userData)){
      console.log("Is ok");
   }else{
      setNewError('Is not have name')
   }
}



checkName(user1)//* Ok
checkName(user2)//! Error


//! 2 
const numberArray= [4,34,6,3,3,6,3,7,3,4,1]
const noNumberArray= [4,34,6,'3',3,6,3,'7',3]


const isNumber = (arr: unknown []): arr is number[] => {
   return arr.every(item => typeof item === 'number')
}


const checkIsNumber = (arr: unknown []): void => {
   if(isNumber(arr)){
      const sumOfNumber: number = arr.reduce((a: number, b: number) => a + b, 0);
      console.log('Сума чисел у масиві:', sumOfNumber);
   }else{
      setNewError('Is not a number array')
   }
}


console.log(checkIsNumber(numberArray)); //* OK
console.log(checkIsNumber(noNumberArray)); //! ERROR

