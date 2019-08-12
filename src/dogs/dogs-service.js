const { Queue } = require('../Queue');
const AdoptedService = require('../adopted/adopted-service')

const dogQ = new Queue();

dogQ.enqueue(
  {
    imageURL:
      'https://clipart.info/images/ccovers/150368783948-small-puppy-png-image-picture-download-dogs.png',
    imageDescription:
      `Won't eat kibbel.`,
    name: 'Amuse Bouche',
    sex: 'Female',
    age: 1,
    breed: 'Shitzu',
    story: 'Owner thought it was a cat'
  }
);

dogQ.enqueue(
  {
    imageURL:
      'http://pngimg.com/uploads/dog/dog_PNG50347.png',
    imageDescription:
      'Other dogs think he has it all.',
    name: 'Chad',
    sex: 'Male',
    age: 4,
    breed: 'Golden Retriever',
    story: 'Gave the owner an inferiority complex.'
  }
);

dogQ.enqueue(
  {
    imageURL:
      'http://pngimg.com/uploads/dog/dog_PNG50386.png',
    imageDescription:
      'Good with kids.',
    name: 'cthulhu',
    sex: 'Male',
    age: 6,
    breed: 'Golden Retriever',
    story: 'Owner convicted of horrible crime. Owner swears the dog did it, that he was planting evil thoughts in his mind for years, slowly but surely taking over control of his mind and then his body. Forcing him to do unspeakable things.'
  }
);

dogQ.enqueue(
  {
    imageURL:
      'https://www.stickpng.com/assets/images/5847f5fdcef1014c0b5e48a0.png',
    imageDescription:
      'Took my lunch money.',
    name: 'Peaches',
    sex: 'Female',
    age: 2,
    breed: 'Pit Bull',
    story: `Doesn't need an owner`
  }
);

dogQ.enqueue(
  {
    imageURL:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2acc139b-8d65-4eb7-8788-fad993edf59a/dbnvmn1-268a9bcc-6a67-4fe2-af7e-3c598b20426c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhY2MxMzliLThkNjUtNGViNy04Nzg4LWZhZDk5M2VkZjU5YVwvZGJudm1uMS0yNjhhOWJjYy02YTY3LTRmZTItYWY3ZS0zYzU5OGIyMDQyNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bMfe57dNz4n-Y0jSSdEY27plESe_900Z1VJu3nziW30',
    imageDescription:
      `Once had 2756 instagram followers before deleting social media, to quote 'focus on recenetering' `,
    name: 'Henry',
    sex: 'Male',
    age: 7,
    breed: 'Shiba',
    story: `Active on Kakao Talk`
  }
);


const DogsService = {
  dogQ,
  getDogs() {
    return dogQ;
  },
  dequeueDog() {
    AdoptedService.addAdoptedAnimal(dogQ.dequeue())
    return dogQ;
  },
};

module.exports = DogsService;