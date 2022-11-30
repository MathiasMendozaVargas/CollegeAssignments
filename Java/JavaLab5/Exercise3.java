package JavaLab5;

import java.util.*;

public class Exercise3 {
    public static void main(String[] args) {

        List<Car> carList = new ArrayList<>();

        carList.add(new Car("Mercedes", 2016));
        carList.add(new Car("Mazda", 2020));
        carList.add(new Car("Toyota", 2019));
        carList.add(new Car("Bugatti", 2022));
        carList.add(new Car("Lucid", 2019));

        Collections.sort(carList);

    }
}

class Car implements Comparable<Car> {
    String model;
    int year;

    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    @Override
    public int compareTo(Car o) {
        // TODO Auto-generated method stub
        return o.year - this.year;
    }

}
