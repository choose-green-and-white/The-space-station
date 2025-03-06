class Task {
    constructor (name, description, assignedCrewMember = null, requiredResources = [], requiredEquipment = []){
        this.name = name
        this.description = description
        this.assignedCrewMember = assignedCrewMember 
        this.requiredResources = requiredResources
        this.requiredEquipment = requiredEquipment
    }   
}

module.exports = {Task}
