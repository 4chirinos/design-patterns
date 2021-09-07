import {Constants} from "./constants";
import {WildFly, DomesticFly, WildQuack, DomesticQuack} from "./behaviors";
import {Duck, DuckType} from "./ducks";


export class DuckFactory {

    public static create(duckType: DuckType): Duck {
        switch (duckType) {
            case DuckType.Domestic:
                return DuckFactory.createDomesticDuck();
            case DuckType.Wild:
                return DuckFactory.createWildDuck();
            case DuckType.Experimental:
                return DuckFactory.createExperimentalDuck();
        }
    }

    private static createDomesticDuck() : Duck {
        const duck: Duck = new Duck();
        duck.setBreed(Constants.Domestic);
        duck.setFlyable(new DomesticFly());
        duck.setQuackable(new DomesticQuack());
        return duck;
    }

    private static createWildDuck(): Duck {
        const duck: Duck = new Duck();
        duck.setBreed(Constants.Wild);
        duck.setFlyable(new WildFly());
        duck.setQuackable(new WildQuack());
        return duck;
    }

    private static createExperimentalDuck() {
        const duck: Duck = new Duck();
        duck.setBreed(Constants.Experimental);
        duck.setFlyable(new WildFly());
        duck.setQuackable(new DomesticQuack());
        return duck;
    }
}