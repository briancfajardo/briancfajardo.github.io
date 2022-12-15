class AddressBook {
    constructor() {
        this.contactList = [];
    }
    addContact(contact) {
        this.contactList.push(contact);
    }
    getContact(num){
        return this.contactList[num];
    }
    deleteContact(num){
        this.contactList.splice(num,1);
    }
}
