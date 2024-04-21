import * as mkUserInfo from "./modules/mkUserInfo.js";

// * 폼 내 element들 객체화
export const aboutInputForm = {
  inputForm: document.querySelector(`.input_form`),
  userName: document.querySelector(`.input_form > input:first-child`),
  userCode: document.querySelector(`.input_form > input:nth-child(2)`),
  submitBtn: document.querySelector(`.input_form > input[type=submit]`),
};

// * 폼 서브밋 이벤트 감지
aboutInputForm.inputForm.onsubmit = (e) => {
  e.preventDefault();
  const inputFormValues = {
    userNameValue: aboutInputForm.userName.value,
    userCodeValue: aboutInputForm.userCode.value,
  };
  // * 모듈에서 임포트된 msUserInfo.js내 함수에, 인자로 인풋 벨류들 전달
  mkUserInfo.userInfoFunc(inputFormValues);
};

// * 모듈에서 처리된 후 마지막 결과 띄우기
export const resultTest = (result) => console.log(result);
