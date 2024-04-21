import * as app from "../app.mjs";

class User {
  constructor(userInfo) {
    this.userName = userInfo.userNameValue;
    this.userCode = userInfo.userCodeValue;
  }

  // saveUserInfo(newUserArr) {
  //   let userName = newUserArr[0];
  //   let userCode = newUserArr[1];
  //   // console.log(this);
  //   // console.log(newUserArr);
  //   // // console.log(newUserArr, 1);
  //   // newUserArr.forEach((user) => {
  //   //   // userName = user;
  //   //   // userCode = user;
  //   //   if (userName !== null) {
  //   //     userName = user;
  //   //   } else if (userCode !== null) {
  //   //     userCode = user;
  //   //   } else {
  //   //   }
  //   // });
  //   // console.log(userName, userCode);
  // }
}

// * app.mjs에서 처음으로 실행되는 함수
export const userInfoFunc = (inputFormValues) => {
  const newUserArr = new Array();
  const newUserInfo = new User(inputFormValues);

  // * 클래스에서 가공된 데이터 배열에 푸쉬
  newUserArr.push(newUserInfo.userName, newUserInfo.userCode);
  saveUserInfo(newUserArr);
};

const saveUserInfo = (newUserArr) => {
  const resultUserObject = {
    userName: newUserArr[0],
    userCode: newUserArr[1],
  };
  // * 저장된 값들 객체화 해서 ../app.mjs - result함수에 다시 뱉어주기
  app.resultTest(resultUserObject);
};
