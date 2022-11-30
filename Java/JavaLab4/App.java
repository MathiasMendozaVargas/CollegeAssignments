package JavaLab4;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Calculator calc = new Calculator();
        Scanner scanner = new Scanner(System.in);
        String exit = "";

        while (!exit.toLowerCase().equals("quit")) {

            try {
                System.out.println("Please type the first number:");
                double n1 = scanner.nextDouble();
                System.out.println("Choose an operation:\n"
                        + " > Type + for addition\n"
                        + " > Type - for subtraction\n"
                        + " > Type * for multiplication\n"
                        + " > Type / for division\n");
                String op = scanner.next(); // [+, ertwetwetwet]
                System.out.println("Type the second number:");
                double n2 = scanner.nextDouble();

                calc.doCalculation(op, n1, n2);
                calc.printResult(op);

                System.out.println("Do you want to 'continue' or 'quit'?");

                exit = scanner.next();

            } catch (InvalidOperatorException e) {
                System.out.println(e.getMessage());
            } catch (ArithmeticException e) {
                System.out.println("Cannot divide by zero. Please try again...");
            }

        }

        System.out.println("Bye");
        scanner.close();
        System.exit(0);
    }
}