

const obj = {

    info: [{name: 'Steve', phone: '23456273', email: 'stevetest@gmail.com'}, 
           {name: 'John', phone: '23457773', email: 'johntest@gmail.com'}, 
           {name: 'Mike', phone: '20006273', email: 'miketest@gmail.com'}],

    search: function (name) {
        return this.info.filter(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    addContact: function (contact) {
        const newContact = Object.assign({}, contact);
        this.info.push(newContact);
    }



}

console.log(obj.search('John'));

console.log(obj.addContact({name: 'Kai', phone: '232311', email: 'kai@gmail.com'}));

console.log(obj.info)
