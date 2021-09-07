import {Quackable, Flyable} from "./interfaces";

export class WildQuack implements Quackable {
    quack(): void {
        console.log("Quacking like a wild duck");
    }
}

export class DomesticQuack implements Quackable {
    quack(): void {
        console.log("Quacking like a domestic duck");
    }
}

export class WildFly implements Flyable {
    fly(): void {
        console.log("Flying like a wild duck");
    }
}

export class DomesticFly implements Flyable {
    fly(): void {
        console.log("Flying like a domestic duck");
    }
}