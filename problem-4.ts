{

    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (form: Shape) => {
        if (form.shape === "circle") {
            return Math.PI * form.radius * form.radius;
        } else if (form.shape === "rectangle") {
            return form.height * form.width;
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(circleArea);

    console.log(rectangleArea);


}