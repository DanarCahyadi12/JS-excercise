const ChangeIdentity = () => {
    let name = "Danar"

    return ({
        SetName : (val) => {
            name = val   
        },
        GetName : () => {
            return name
        }
    })
}

let newIdentity = ChangeIdentity()
newIdentity.SetName('Rahul')
let newName = newIdentity.GetName()
newIdentity.SetName('JIka')

class Book{
    constructor(){
        this.name 
        this.price
        this.category 
    }
    SetPrice(val){
        this.price = val
    }

    SetName(val){
        this.name = val
    }

    SetCategory(val){
        this.category = val
    }


}

const Agama = new Book()

Agama.SetName('Agama hindu')
Agama.SetPrice(50000)
Agama.SetCategory('Buku Pendidikan')



class Kendaraan{
    #warna
    #tahunProduksi
    #ban
    constructor(){
        this.#warna 
        this.#tahunProduksi 
        this.#ban
    }

    SetWarna(val){
        this.#warna = val
    }
    SetTahunProduksi(val){
        this.#tahunProduksi = val
    }
    SetBan(val){
        this.#ban = ban
    }
}

const Mobil = new Kendaraan

Mobil.SetWarna('Merah')

class Person{
    #username
    #password
    constructor(name,age,gender){
        this.name  = name
        this.age = age
        this.gender = gender
    }

    SetUsername(val){
        this.#username = val
    }

    SetPassword(val){
        this.#password = val
    }

    ChangeName(val){
        if(isNaN(val)){
            this.name = val
        }else{
            alert('Username must be string')
        }
    }

    ChangeAge(val){
        if(!isNaN(val)){
            this.age = val
        }else{
            alert('Input must be a number')
        }
    }
    ChangeGender(val){
        this.gender = val
    }

    GetAllData(){
        return this.name+' '+this.age+' '+this.gender
    }
}

class Employee extends Person{

    constructor(name,age,gender,salary,level){
        super(name,age,gender)
        this.salary = salary
        this.level = level
    }

    ChangeSalary(val){
        if(isNaN(val)){
            return{
                errorMassage : "this is not a number"
            }
        }else{
            this.salary = val
        }
    }

    ChangeLevel(val){
        this.level = val
    }
}

const Em1 = new Employee('Danar',17,49999,"Junior")
Em1.SetUsername('em1120o')
Em1.SetPassword('EmUU456')

class Students extends Person{
    #NIS
    constructor(name,age,gender,Class,NIS){
        super(name,age,gender)
        this.Class = Class
        this.NIS = NIS
        this.#NIS = NIS
    }
}

const student1 = new Students('Eka',16,'male','IF1',29720)
student1.SetUsername('54590')
student1.SetPassword('2289')

