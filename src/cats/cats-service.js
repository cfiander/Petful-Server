const { Queue } = require('../Queue');
const AdoptedService = require('../adopted/adopted-service')
const catQ = new Queue();

catQ.enqueue(
    {
        imageURL:
            'http://pngimg.com/uploads/cat/cat_PNG50504.png',
        imageDescription:
            'Loves to jump.',
        name: 'Frasier',
        sex: 'Female',
        age: 4,
        breed: 'British Shorhair',
        story: 'Thrown on the street'
    }
);

catQ.enqueue(
    {
        imageURL:
            'https://i.imgur.com/cjDJeKe.jpg',
        imageDescription:
            'Thinks its a dog.',
        name: 'Bobby',
        sex: 'Male',
        age: 2,
        breed: 'Tabby',
        story: 'Owner moved to an apartment with a no pet policy'
    }
);

catQ.enqueue(
    {
        imageURL:
            'https://www.konfest.com/wp-content/uploads/2019/07/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-breeds-cute-images-pets-cat-family-kitty-kitten-meow-animals-mouse-rat-species-cartoons-33.png',
        imageDescription:
            'Knows jedi mind tricks. Favorite show is, Gossip Girl.',
        name: 'Bartholomew',
        sex: 'Male',
        age: 6,
        breed: 'Scottish Fold',
        story: 'Owner thought it was a dog'
    }
);

catQ.enqueue(
    {
        imageURL:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Brown_spotted_tabby_bengal_cat_2.png',
        imageDescription:
            'Bengal wild cat. Somewhat illegal to own',
        name: 'Unknown',
        sex: 'Male',
        age: 'Unknown',
        breed: 'Bengal Wild',
        story: 'Owner married someone allergic'
    }
);


catQ.enqueue(
    {
        imageURL:
            'http://chatteriedeslagons.wifeo.com/images/c/cal/Caly-031.png',
        imageDescription:
            `Doesn't trust white people with dreads`,
        name: 'Margie Gunderson',
        sex: 'Female',
        age: 7,
        breed: 'Birman',
        story: 'Owner tried to make Margie vegan'
    }
);

const CatsService = {
    catQ,
    getCats() {
        return catQ;
    },
    dequeueCat() {
        AdoptedService.addAdoptedAnimal(catQ.dequeue())
        return catQ;
    },
};

module.exports = CatsService;