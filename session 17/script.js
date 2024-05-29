const person = {
    name: "Mohammad reza",
    lastname: "Parsaee",
    phone: "+989393295336",
    Email: "mohamadparsa850@gmail.com",
    age: "25",
    details: {
        weight: "75",
        height: "185"
    }
}
function getname(person) {
    const fullname = person.name + " " + person.lastname;

    console.log(fullname)
}

getname(person)