let userName;
let userCode;

class User {
  constructor(userInfo) {
    this.userName = userInfo.userNameValue;
    this.userCode = userInfo.userCodeValue;
  }

  saveUserInfo(newUserArr) {
    console.log(newUserArr, 1);
    let test = newUserArr.map((user) => console.log(user[0]));
  }
}

export const userInfoFunc = (inputFormValues) => {
  const newUserArr = new Array();
  const newUserInfo = new User(inputFormValues);
  newUserArr.push(newUserInfo.userName, newUserInfo.userCode);
  newUserInfo.saveUserInfo(newUserArr);
  // saveUserInfo(newUserArr);
};

// const saveUserInfo = (newUserInfo) => {
//   // console.log(newUserInfo);
// };
