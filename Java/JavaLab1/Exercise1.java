package JavaLab1;

import java.lang.Math;

public class Exercise1 {
    public static void main(String[] args) {
        double r = 28;
        double area = findCircleArea(r);
        System.out.println("The area of %s is: %s".formatted(r, area));
    }

    static double findCircleArea(double r) {
        double area = r * r * Math.PI;
        return area;
    }
}