import {Duck, DuckType} from "./strategy/ducks";
import {DuckFactory} from "./strategy/factories";

const wildDuck: Duck = DuckFactory.create(DuckType.Wild);
const domesticDuck: Duck = DuckFactory.create(DuckType.Domestic);
const experimentalDuck: Duck = DuckFactory.create(DuckType.Experimental);

wildDuck.sayHi();
wildDuck.fly();
wildDuck.quack();

domesticDuck.sayHi();
domesticDuck.fly();
domesticDuck.quack();

experimentalDuck.sayHi();
experimentalDuck.fly();
experimentalDuck.quack();