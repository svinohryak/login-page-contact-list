export interface IPasswordChecker {
  status: boolean;
  strength: string;
}

export function passwordStrengthChecker(
  passwordValue: string
): IPasswordChecker {
  const letterRegExp = /[a-z]/;
  const capitalLetterRegExp = /[A-Z]/;
  const numberRegExp = /[0-9]/;
  const specialCharacterRegExp = /[#?!@$%^&*-\s\=]/;

  const hasALetter = letterRegExp.test(passwordValue);
  const hasACapitalLetter = capitalLetterRegExp.test(passwordValue);
  const hasANumber = numberRegExp.test(passwordValue);
  const hasASpecialCharacter = specialCharacterRegExp.test(passwordValue);
  const hasRequiredLength = passwordValue.length >= 6;

  const strengthIndex =
    +hasALetter + +hasACapitalLetter + +hasANumber + +hasASpecialCharacter;

  const strengthLevel =
    {
      1: "weak",
      2: "ok",
      3: "good",
      4: "strong",
    }[strengthIndex] || "too short";

  return {
    status: hasRequiredLength,
    strength: strengthLevel,
  };
}
