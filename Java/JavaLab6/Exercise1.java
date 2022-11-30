package JavaLab6;

import java.util.Arrays;

public class Exercise1 {
    public static void main(String[] args) {
        // Input 1
        Integer arr_i[] = { 2, 5, 12, 3, 2, 4, 10 };
        System.out.println("#########################################");
        System.out.println("First Array size = " + arrLength(arr_i));
        System.out.println("Max value in First Array is: " + maximum(arr_i));
        System.out.println("#########################################");
        System.out.println("#########################################");

        // Input 2
        Double arr_d[] = { 1.2, 4.3, 5.1, 1.6, 19.2, 3.4 };
        System.out.println("Second Array size = " + arrLength(arr_d));
        System.out.println("Max value in 'arr_i' is: " + maximum(arr_d));
        System.out.println("#########################################");
    }

    public static <T extends Comparable<T>> T maximum(T[] x) {
        Object maxNum = null;
        Arrays.sort(x);
        maxNum = x[x.length - 1];
        return (T) maxNum;
    }

    public static <T extends Comparable<T>> int arrLength(T[] x) {
        int len = x.length;
        return len;
    }
}