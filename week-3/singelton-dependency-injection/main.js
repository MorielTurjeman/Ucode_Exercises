class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

