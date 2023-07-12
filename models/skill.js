const skills = [
    {id: 125223, skill: 'Making A Battleship Game', done: true},
    {id: 127904, skill: 'Making A Tic-Tac-Toe Game', done: true},
    {id: 139608, skill: 'Using HTML, CSS, and Javascript', done: true}
  ];
	
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

module.exports = {
    getAll,
    getOne
};
	