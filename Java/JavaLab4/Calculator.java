package JavaLab4;

class InvalidOperatorException extends Exception {
    public InvalidOperatorException(String str) {
        super(str);
    }
}

public class Calculator {

    private double num1;
    private double num2;
    private double result;

    public Calculator() {
        num1 = 0;
        num2 = 0;
        result = 0;
    }

    public double doCalculation(String op, double num1, double num2)
            throws InvalidOperatorException, ArithmeticException {
        this.num1 = num1;
        this.num2 = num2;

        switch (op) {
            case "+":
                result = add();
                break;
            case "-":
                result = subtract();
                break;
            case "*":
                result = multiply();
                break;
            case "/":
                if (num2 == 0)
                    throw new ArithmeticException();
                result = divide();
                break;
            default:
                throw new InvalidOperatorException("Invalid operation entered"); // user-defined
        }

        return result;
    }

    public double add() {
        return this.num1 + this.num2;
    }

    public double subtract() {
        return this.num1 - this.num2;
    }

    public double multiply() {
        return this.num1 * this.num2;
    }

    public double divide() {
        return this.num1 / this.num2;
    }

    public void printResult(String op) {
        System.out.println(this.num1 + " " + op + " " + this.num2 + " = " + this.result);
    }
}