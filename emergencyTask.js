const { Task } = require("./task");

class EmergencyTask extends Task {
  constructor(name, description, emergencyProtocol) {
    super(name, description, null, [], []);
    this.emergencyProtocol = emergencyProtocol;
  }
}

module.exports = { EmergencyTask };
