class Unit {
	constructor() {
		this.health = 0;
	}

	damage = (amount) => (this.health -= amount);
}

class Marine extends Unit {
	constructor() {
		super();
		this.health = 100;
	}

	accept(visitor) {
		visitor.visitLight(this);
	}
}

class Marauder extends Unit {
	constructor() {
		super();
		this.health = 125;
	}
	accept(visitor) {
		visitor.visitArmored(this);
	}
}

class TankBullet {
	visitLight(unit) {
		unit.damage(21);
	}
	visitArmored(unit) {
		unit.damage(32);
	}
}

let bullet = new TankBullet();
let light = new Marine();
let armored = new Marauder();

light.accept(bullet);

console.log(light.health);

armored.accept(bullet);

console.log(armored.health);
