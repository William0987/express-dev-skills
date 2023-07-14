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

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
  }

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updatedSkill){
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};
	