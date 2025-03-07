const { EmergencyTask } = require("./emergencyTask");

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
  runTask(task) {
    // Дописать логику
  }
  generateReport() {
    console.log(
      "Экипаж:",
      this.crewMembers,
      "\n",
      "Ресурсы:",
      this.resources,
      "\n",
      "Оборудование:",
      this.equipment,
      "\n",
      "Задачи:",
      this.tasks,
      "\n"
    );
  }
  triggerEmergency(emergencyTask) {
    // Дописать логику
  }
  simulateEmergency() {
    const newEmergencyTask = new EmergencyTask(
      "Новая проблема",
      "Неизвестно",
      2
    );
    this.triggerEmergency(newEmergencyTask);
  }
}

module.exports = { SpaceStation };
