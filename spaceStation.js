class SpaceStation {
  constructor(crewMembers = [], resources = [], equipment = [], tasks = []) {
    this.crewMembers = crewMembers;
    this.resources = resources;
    this.equipment = equipment;
    this.tasks = tasks;
  }

  addCrewMembers(crewMember) {
    this.crewMembers.push(crewMember);
  }
  addResources(resource) {
    this.resources.push(resource);
  }
  addEquipment(equipment) {
    this.equipment.push(equipment);
  }
  addTasks(task) {
    this.tasks.push(task);
  }
  runTask(task) {}
}

module.exports = { SpaceStation };
