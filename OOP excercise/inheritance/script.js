class Binatang{
    constructor(nama,warna,kaki,suara){
        this.nama = nama
        this.warna = warna
        this.kaki= kaki
        this.suara = suara

    }

    GetInformation() {
        return `${this.nama} ${this.warna} ${this.kaki} ${this.suara}`
    }

    GetSuara() {
        console.log(this.suara)
    }
}

class Mamalia extends Binatang{
    constructor(nama,warna,kaki,suara,ekor){
        super(nama,warna,kaki,suara)
        this.ekor= ekor
    }
}

class Omnivora extends Binatang{
    constructor(nama,warna,kaki,suara,makanan,jinak){
        super(nama,warna,kaki,suara)
        this.makanan = makanan
        this.jinak = jinak
    }

    GetJinakOrNot() {
        return `Apakah jinak${this.jinak}`
    }
}

class Herbivora extends Omnivora{

}

class Liar extends Binatang{
    
}

const Monyet = new Mamalia("Hanuman","chocolate",2,"uuUUUu AaaaAA","panjang")
const Singa = new Omnivora("Leo","oranye",4,"Rawerhhrhhr","Daging",false)
const Sapi = new Herbivora("sappy","Putih",4,"Mooooo","Rumput",true)
const Kambing = new Herbivora("Kambings","Putih",4,"mbeekk","Rumput",true)
const Anjing = new Liar("Konyong","Hitam",4,"auuuuu")