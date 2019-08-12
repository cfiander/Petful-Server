const adopted = []

const AdoptedService = {
    adopted,
    
    addAdoptedAnimal(animal) {
        adopted.push(animal)
        return adopted
    },
    getAdoptedAnimals() {
        return adopted;
    }
}

module.exports = AdoptedService
