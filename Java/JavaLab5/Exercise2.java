package JavaLab5;

import java.util.Random;
import java.util.List;
import java.util.ArrayList;

public class Exercise2 {
    public static void main(String[] args) {
        List<Integer> firstList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Random random = new Random();
            int x = random.nextInt(50);
            firstList.add(x);
        }

        List<Integer> secondList = firstList;
        System.out.println("#### BEFORE ####");
        System.out.println(firstList);
        System.out.println(secondList);

        firstList.remove(firstList.size() - 1);
        firstList.add(-5);

        System.out.println("#### AFTER ####");
        System.out.println(firstList);
        System.out.println(secondList);

    }
}
