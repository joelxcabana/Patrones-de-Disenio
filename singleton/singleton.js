class Singleton {

    static getIntance(){
        return Singleton.instance
    }
    constructor() {
        this.random = Math.random();

        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()
const singleton3 = Singleton.getIntance()

console.log('s1-->',singleton.random)
console.log('s2-->',singleton2.random)
console.log('s3-->',singleton3.random)