import users from '../fixtures/users.json';

users.forEach((users) => {
    it(`should create user: ${users.nameScenario}`, () => {
        cy.post('POST', '/user/createWithArray', users.data);
    })

})

users.forEach((users) => {
    it(`should update user: ${users.nameScenario}`, () => {
        cy.put('PUT', `/user/${users.name}`, users.updata);
    })
})

users.forEach((users) => {
    it(`should delete user: ${users.nameScenario}`, () => {
        cy.delete('DELETE', `/user/${users.name}`);
        cy.notfound(`/user/${users.name}`);
    })
})