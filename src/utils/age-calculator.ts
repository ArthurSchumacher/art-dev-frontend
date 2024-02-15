export function myAge(birthDate: Date): number {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDay = now.getDate();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  if (nowMonth < birthMonth || (nowMonth === birthMonth && nowDay < birthDay)) {
    age--;
  }

  return age;
}
