package JavaLab5;

import java.util.Random;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Exercise1 {
    public static void main(String[] args) {
        List<Integer> myList = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            Random random = new Random();
            int x = random.nextInt(50);
            myList.add(x);

        }

        System.out.println("#######################################");
        System.out.println("       Guesing Number Program          ");
        System.out.println("#######################################");

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Guess a number");
            int guess = Integer.parseInt(scanner.nextLine());
            boolean isNumber = false;

            for (int i = 0; i < myList.size(); i++) {
                if (myList.get(i) == guess) {
                    isNumber = true;
                }
            }
            if (isNumber) {
                System.out.println("Yeah, that number is on the list, great job!");
            } else {
                System.out.println("Nope, that number is not on the liss.");
            }
        } catch (NumberFormatException e) {
            System.out.println("Ups, wrong number format!");
            e.printStackTrace();
        }

    }
}
