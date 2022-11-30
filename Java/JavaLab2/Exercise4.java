package JavaLab2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Exercise4 {
    public static void main(String[] args) {
        System.out.println("############################");
        System.out.println("Welcome to the Useless Program");
        System.out.println("############################\n");

        System.out.println("How many integers will be added?");
        Scanner scanner = new Scanner(System.in);
        int charNum = Integer.parseInt(scanner.nextLine());

        List<Integer> listOfNumbers = new ArrayList<Integer>();
        int x = 0;
        while (x < charNum) {
            System.out.println("Enter an integer");
            int n = Integer.parseInt(scanner.nextLine());
            listOfNumbers.add(n);
            x++;
        }

        int sum = 0;

        for (int i = 0; i < listOfNumbers.size(); i++) {
            sum += listOfNumbers.get(i);
        }

        System.out.println("\nThe sum is " + sum);

    }
}
