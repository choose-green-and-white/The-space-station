class Task {
  constructor(
    name,
    description,
    assignedCrewMember = null,
    requiredResources = [],
    requiredEquipment = []
  ) {
    this.name = name;
    this.description = description;
    this.assignedCrewMember = assignedCrewMember;
    this.requiredResources = requiredResources;
    this.requiredEquipment = requiredEquipment;
  }

  assignCrewMember(crewMember) {
    this.assignedCrewMember = crewMember;
  }
  addRequiredResource(resource) {
    this.requiredResources.push(resource);
  }
  addRequiredAction() {}
  addRequiredEquipment(equipment) {
    this.requiredEquipment.push(equipment);
  }
}

module.exports = { Task };
