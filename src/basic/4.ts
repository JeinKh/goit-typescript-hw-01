function showMessage(message: string): void {}
showMessage("hey");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
calc(1, 3);

function customError(): never {
  throw new Error("Error");
}
customError();
