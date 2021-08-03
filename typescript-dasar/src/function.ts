

// Tipe data pada balikan function

function getName(): string {
    return "Hello my name is Ilham"
}
console.log(getName());

function getAge(): number {
    return 16
}
console.log(getAge());

function printName(): void {
    console.log("Hello World");
}
printName()

function multiply(nama: string, value1: number, value2: number): string {
    return `${nama} : ${value1 + value2}`
}

console.log(multiply("ilham", 4, 4));

