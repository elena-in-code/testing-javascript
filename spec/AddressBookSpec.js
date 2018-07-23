describe('Address Book', function() {
    var addressBook,
        thisContact;

    beforeEach(function() {
        addressBook = new AddressBook(),
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it('should be able to remove a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

//Async function
describe('Async Adress Book', function() {
    var addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});


/* More redundant code:
describe('Address Book', function() {
    it('should be able to add a contact', function() {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it('should be able to remove a contact', function() {
        var addressBook = new AddressBook(),
        thisContact = new Contact();
        
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
*/