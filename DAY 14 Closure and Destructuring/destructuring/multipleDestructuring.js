let options = {
    size: {
        height: 200
    },
    items: ["berger", "pizza"],
    extra: true
};

const {// destructuring assingment split in multiple line
    size: {width: w = 3000},
    items: [, item2], // assign items here
    abc = '123'

} = options;

console.log(w, item2, abc)