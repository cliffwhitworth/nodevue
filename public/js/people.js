class Person {
  constructor() {
    this.avatar = '';
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.description = faker.lorem.sentence();
  }
}

const People = {  
    delimiters: ['${', '}'],
    data() {
      return {
        peopleArray: []
      };
    },
    computed: {      
      dateCreated() {
        var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
        return 'Created on ' + [year, month, day].join('-');
      }
    },
    methods: {  
      addPerson() {
        fetch('https://source.unsplash.com/random').then((response) => {
          let person = new Person();
          person.avatar = response.url;
          this.peopleArray.push(person);
        })
      },
      deleteMe(idx) {
        console.log(idx);
        this.peopleArray.splice(idx, 1);
      },
      deleteAll() {
        while(this.peopleArray.length > 0) {
          this.peopleArray.pop();
        }
      }
    },
};

Vue.createApp(People).mount('#people');