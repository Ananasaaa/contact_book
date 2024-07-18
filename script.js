

const contactBook = {

    info: [{name: 'Steve', phone: '23456273', email: 'stevetest@gmail.com'}, 
           {name: 'John', phone: '23457773', email: 'johntest@gmail.com'}, 
           {name: 'Mike', phone: '20006273', email: 'miketest@gmail.com'}],

    search: function (name) {
        return this.info.filter(elem => elem.name.toLowerCase() === name.toLowerCase());
    },

    addContact: function (contact) {
        const newContact = Object.assign({}, contact);
        this.info.push(newContact);
    }

}

console.log(contactBook.search('John'));

console.log(contactBook.addContact({name: 'Kai', phone: '232311', email: 'kai@gmail.com'}));

console.log(contactBook.info)
