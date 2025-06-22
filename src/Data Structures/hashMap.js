 
 
// eslint-disable-next-line no-unused-vars
class HashMap {
    constructor() {
        this.loadfactor = 0.75
        this.capacity = 16
        this.hashAddresses =  new Array(this.capacity).fill(null).map(() => [] )
    }

    hash(key) {
        let hashCode = 0
        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
        }
    
        return hashCode;
    } 

    resize(){
        this.capacity = this.capacity * 2
    }

    rehash(){
        const backupPairs = this.entries()
        this.hashAddresses =  new Array(this.capacity).fill(null).map(() => [] )

        backupPairs.forEach(pair => this.set(pair.key, pair.value))
    }

    set(key,value){
        if (this.entries().length + 1 > this.capacity * this.loadfactor && (!this.has(key))){   //resize & rehash if entries nº reach 75% of capacity
            this.resize()
            this.rehash()
        }

        const hash= this.hash(key)
        let newKey = true
        for (const keyValuePair of this.hashAddresses[hash]){
            if (keyValuePair.key == key){                           //update value if key already exists
                keyValuePair.value = value
                newKey = false
                return
            }
        }


        if (newKey == true){                                        //push new pair 
            this.hashAddresses[hash].push({                             
                key: key,
                value: value
            })
        }
    }

    get(key){
        const hash = this.hash(key)
        let value = false

        for (const keyValuePair of this.hashAddresses[hash]){
            if (keyValuePair.key == key){                           
                value = keyValuePair.value
            }
        }
        return value
    }

    has(key){
        const hash = this.hash(key)
        let value = false

        for (const keyValuePair of this.hashAddresses[hash]){
            if (keyValuePair.key == key){                           
                value = true
            }
        }

        return value
    }

    remove(key){
        const hash = this.hash(key)
        let hasRemoved = false
        if (this.has(key)){
            this.hashAddresses[hash]= this.hashAddresses[hash].filter(pair => pair.key != key)
            hasRemoved = true
        }

        return (hasRemoved)
    }

    length(){
        let count = 0
        this.hashAddresses.forEach(address => (count = count + address.length))
        return count
    }

    clear(){
        this.capacity = 16
        this.hashAddresses =  new Array(this.capacity).fill(null).map(() => [] )
    }

    keys(){
        const array = []
        this.hashAddresses.forEach(address =>
             address.forEach(pair => array.push(pair.key))
        )
        return array
    }

    values(){
        const array = []
        this.hashAddresses.forEach(address =>
             address.forEach(pair => array.push(pair.value))
        )
        return array
    }

    entries(){
        const array = []
        this.hashAddresses.forEach(address =>
             address.forEach(pair => array.push(pair))
        )
        return array
    }

}