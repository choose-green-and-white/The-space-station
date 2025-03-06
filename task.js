class Task {
    constructor (name, description, assignedCrewMember, requiredResources, requiredEquipment){
        this.name = name
        this.description = description
        this.assignedCrewMember = assignedCrewMember
        this.requiredResources = requiredResources
        this.requiredEquipment = requiredEquipment
    }   
}

module.exports = {Task}
