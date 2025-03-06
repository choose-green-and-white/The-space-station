class Resource {
    constructor (name, quantity, consumptionRate, storageLocation){
        if (quantity < 0) {
            throw new Error('Количество не может быть отрицательным');
        }
        if (consumptionRate < 0) {
            throw new Error('Скорость потребления не может быть отрицательной');
        }
        this.name = name
        this.quantity = quantity
        this.consumptionRate = consumptionRate
        this.storageLocation = storageLocation

    }
}

module.exports = {Resource}

