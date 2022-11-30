package JavaLab1;

import java.util.Scanner;

public class Exercise2 {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter a ammount of cents");
            int cents = Integer.parseInt(scanner.nextLine());

            float money = convertCents(cents);
            System.out.println("%s cents is = $%s".formatted(cents, money));
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            System.out.println("Ups, wrong format!");
        }

    }

    static float convertCents(int cents) {
        float money = cents / 100.00f;
        return money;
    }
}
