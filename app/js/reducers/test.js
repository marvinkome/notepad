let i = {
    n: [
        { 
            title: 'Re', 
            id: 1, 
            date: '12' 
        }
    ]
}

let j = { 
    title: 'React Redux Tutorial for Beginners', 
    id: 2, 
    date: '12-6-09' 
};

const tmp = i.n.find( obj => obj.id == 1)

tmp.title = 'teia';
tmp.date = '13-6-18';

console.log(i)