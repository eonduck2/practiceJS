import * as mkUserInfo from "./modules/mkUserInfo.js";

export const aboutInputForm = {
  inputForm: document.querySelector(`.input_form`),
  userName: document.querySelector(`.input_form > input:first-child`),
  userCode: document.querySelector(`.input_form > input:nth-child(2)`),
  submitBtn: document.querySelector(`.input_form > input:nth-child(3)`),
};

aboutInputForm.inputForm.onsubmit = (e) => {
  e.preventDefault();
  const inputFormValues = {
    userNameValue: aboutInputForm.userName.value,
    userCodeValue: aboutInputForm.userCode.value,
  };
  mkUserInfo.userInfoFunc(inputFormValues);
};
