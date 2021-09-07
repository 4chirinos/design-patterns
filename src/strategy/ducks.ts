import {Quackable, Flyable} from "./interfaces";

export enum DuckType {
    Wild,
    Domestic,
    Experimental
}

export class Duck {

    private breed: string;
    private flyable: Flyable;
    private quackable: Quackable;

    public sayHi(): void {
        console.log(`Hello, I'm a ${this.breed} duck`);
    }

    public fly(): void {
        this.flyable.fly();
    }

    public quack(): void {
        this.quackable.quack();
    }

    public setBreed(breed: string) {
        this.breed = breed;
    }

    public setFlyable(flyable: Flyable) {
        this.flyable = flyable;
    }

    public setQuackable(quackable: Quackable) {
        this.quackable = quackable;
    }
}