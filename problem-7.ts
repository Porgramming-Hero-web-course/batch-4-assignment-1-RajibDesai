{
    
    
    class Car {
        make: string;
        model: string;
        year: number
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year
        }
    
        getCarAge(numOfYear1: number,) {
            return numOfYear1 - this.year
        }
    }
    
    const car = new Car("Honda", "Civic", 2018);
    const res = car.getCarAge(new Date().getFullYear());
    console.log(res)

    
}