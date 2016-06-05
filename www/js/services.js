angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Forms', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var forms = [{
    id: 0,
    name: 'Questionario Geografia 1',
    questions:[{
      id:0,
      question:'what is yr name?',
      options:[{
        option:'a',
        optionValue:'Thiago'
      },{
        option:'b',
        optionValue:'Vitor'
      },{
        option:'c',
        optionValue:'Gabriel'
      }],
      answer:'a'
    }]
  },{
    id: 1,
    name: 'Questionario Eng. de Software 1',
    questions:[{
      id:0,
      question:'Para que serve o design pattern Singleton',
      options:[{
        option:'a',
        optionValue:'Para criar múltiplas instâncias de uma classes'
      },{
        option:'b',
        optionValue:'Para criar uma única instância de uma classe'
      },{
        option:'c',
        optionValue:'Nda.'
      }],
      answer:'a'
    },{
      id:1,
      question:'what ds is yr name?',
      options:[{
        option:'a',
        optionValue:'Thiago'
      },{
        option:'b',
        optionValue:'Vitor'
      },{
        option:'c',
        optionValue:'Gabriel'
      }],
      answer:'a'
    },{
      id:0,
      question:'what is yr name?',
      options:[{
        option:'a',
        optionValue:'Thiago'
      },{
        option:'b',
        optionValue:'Vitor'
      },{
        option:'c',
        optionValue:'Gabriel'
      }],
      answer:'a'
    }]
  }];

  return {
    all: function() {
      return forms;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(FormId) {
      for (var i = 0; i < forms.length; i++) {
        if (forms[i].id === parseInt(FormId)) {
          return forms[i];
        }
      }
      return null;
    }
  };
});

