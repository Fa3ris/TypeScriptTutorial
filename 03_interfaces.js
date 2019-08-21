// Type checking focuses on shape
// refer to duck typing or structural subtyping
// EXAMPLE 1
{
    function printLabel1(labeledObj) {
        console.log(labeledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" }; // this object has a label property so it validates, no order needed
    printLabel1(myObj);
}
{
    function printLabel2(labeledObj) {
        console.log(labeledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" }; // no need to indicate that it implements interface LabeledValue
    printLabel2(myObj);
}
// EXAMPLE 2
// Optional properties
{
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
}
// EXAMPLE 3
// render immutable
{
    var p1 = { x: 10, y: 20 };
    /*
    p1.x = 5; // error, Cannot assign to 'x' because it is a read-only property.
    */
}
// immutable Array with ReadonlyArray<T>
{
    var a = [1, 2, 3, 4];
    var ro = a;
    /*
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error, The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'
    */
    a = ro; // override with type assertion
    a.length = 56;
    console.log("ro.length = " + ro.length);
}
