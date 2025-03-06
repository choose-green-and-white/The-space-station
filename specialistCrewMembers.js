const {CrewMember} = require('./crewMember')

class Scientist extends CrewMember {
    constructor (name, experienceLevel, fieldOfStudy){
        super(name, 'Scientist', experienceLevel, null)
        this.fieldOfStudy = fieldOfStudy
    }
}

class Engineer extends CrewMember {
    constructor (name, experienceLevel, specialization){
        super(name, 'Engineer', experienceLevel, null)
        this.specialization = specialization
    }
}

class Astronaut extends CrewMember {
    constructor (name, experienceLevel, spacewalkExperience){
        super(name, 'Astronaut', experienceLevel, null)
    
        this.spacewalkExperience = spacewalkExperience
    }
}

module.exports = {Scientist, Engineer, Astronaut}
