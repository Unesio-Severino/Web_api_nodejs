class Hero {

    constructor({ id, name, age, hobbie}) {
        this.id = Math.floor(Math.random() * 100) + Date.now()
        this.name = name
        this.age = age
        this.hobbie = hobbie
    }

    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        const amountInvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)

            return {
                valid: amountInvalid.length === 0,
                error: amountInvalid
            }   
         }
}   

module.exports = Hero

