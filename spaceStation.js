const { EmergencyTask } = require("./emergencyTask");
const { Equipment } = require("./equipment");
const { Resource } = require("./resource");

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
    let canEndTaskofResources = true;
    let canEndTaskofEquipment = true;
    let notEnough = [];
    const { requiredResources, requiredEquipment } = task;
    for (const value of requiredResources) {
      const stantionResource = this.resources.find(
        (resource) =>
          resource.name === value.name &&
          resource.quantity - value.quantity >= 0
      );

      if (!stantionResource) {
        canEndTaskofResources = false;
        notEnough.push(value.name);
      }
    }

    if (!canEndTaskofResources) {
      console.log(`Недостаточно ресурсов: ${notEnough}.`);

      return;
    } else {
      notEnough = [];
    }

    for (const value of requiredEquipment) {
      const stantionEquipment = this.equipment.find(
        (equipment) =>
          equipment.name === value.name && equipment.status === value.status
      );

      if (!stantionEquipment) {
        canEndTaskofEquipment = false;
        notEnough.push(value.name);
      }
    }

    if (!canEndTaskofEquipment) {
      console.log(`Недостаточно снарежения: ${notEnough}.`);

      return;
    }

    console.log("Задача выпонима!");
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
