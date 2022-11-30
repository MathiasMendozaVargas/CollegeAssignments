package JavaLab2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Exercise2 {
    public static void main(String[] args) {
        System.out.println("############################");
        System.out.println("Welcome to the Useless Program");
        System.out.println("############################\n");

        System.out.println("Enter the Starting Value");
        Scanner scanner = new Scanner(System.in);
        int start_n = Integer.parseInt(scanner.nextLine());

        System.out.println("Enter the End Value");
        int end_n = Integer.parseInt(scanner.nextLine());

        List<Integer> allNumbers = new ArrayList<Integer>();

        int prev_start_n = start_n;

        while (start_n <= end_n) {
            allNumbers.add(start_n);
            start_n++;
        }

        int sum = 0;

        for (int i = 0; i < allNumbers.size(); i++) {
            sum += allNumbers.get(i);
        }

        System.out.println("\nThe sum of %s and %s is %s".formatted(prev_start_n, end_n, sum));
    }
}
