

// Array
{
    let array = [3, 4, 5, "da"]
    array.push("halo")
    // array.push(true) // salah
    console.log(array);
}
{
    let array: any[] = [3, 4, 5, "da"]
    array.push("halo")
    array.push(true)
    console.log(array);
}
{
    let array: number[] = [3, 4, 5]
    array.push(9)
    console.log(array);
}
{
    let array: string[] = ["ilham", "nadhif"]
    array.push("hello")
    console.log(array);
}
console.log("----------------");



// Tuples

{
    let biodata: [string, number];
    biodata = ["halo", 8]
    // biodata = ["halo", true] // Salah
    console.log(biodata);

}
