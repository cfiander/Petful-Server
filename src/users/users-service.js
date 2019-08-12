const {Queue} = require('../Queue');

let Users = new Queue();
Users.enqueue({name: 'Art Vandelay'});
Users.enqueue({name: 'Dr. Martin Van Nostrand.'});
Users.enqueue({name: 'Kel Varnsen'});
Users.enqueue({name: 'H.E. Pennypacker'});
Users.enqueue({name: 'Rochelle'});

const UsersService = {
  Users,
  
  getUsers() {
    return Users;
  },
  
  queueUser(name){
    Users.enqueue(name);
    return name;
  },

  dequeueUser(){
    Users.dequeue();
    return Users;
  },

  cutLine() {
      Users.removeAllButLast()
      return Users;
  }
};

module.exports = UsersService;