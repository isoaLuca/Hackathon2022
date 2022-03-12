import { Response } from 'miragejs';
import { V4 as uuid } from 'uuid';
import { localSave } from './utils.mock';

export const usersDatas = (server) => {
    const usersData = localStorage.getItem('users');

    if (usersData) {
		const usersList = JSON.parse(usersData);

		usersList.forEach((user) => server.create('user', user));
	} else {
        server.create('user', {
            userID: uuid(),
            email: 'alexandre.dupon@orientation.com',
            name: 'John Doe',
            organisation: "L'Oreal",
            role: 'client',
        });
        server.create('user', {
            userID: uuid(),
            email: 'test@test.com',
            name: 'Test',
            organisation: "L'Oreal",
            role: 'client',
        });
        server.create('user', {
            userID: uuid(),
            email: 'loan.cleris@esgi.com',
            name: 'Loan Cleris',
            organisation: "Wired Beauty",
            role: 'admin',
        });
        server.create('user', {
            userID: uuid(),
            email: 'sophie.letanneur@wiredbeauty.com',
            name: 'Sophie Le Tanneur',
            organisation: "Wired Beauty",
            role: 'admin',
        });
        server.create('user', {
            userID: uuid(),
            email: 'stanislas.vandier@wiredbeauty.com',
            name: 'Stanislas Vandier',
            organisation: "Wired Beauty",
            role: 'admin',
        });
    }
};


export const userRoutes = (server) => {
    server.get('/users', (schema) => {
        return schema.users.all();
    });

    server.post('/users', (schema, request) => {
        const user = JSON.parse(request.requestBody);
        const newUser = schema.users.create(user);

        localSave(newUser);

        return newUser;
    });

    server.put('/users/:id', (schema, request) => {
        const user = JSON.parse(request.requestBody);
        const updatedUser = schema.users.find(request.params.id);

        updatedUser.update(user);

        localSave(updatedUser);

        return updatedUser;
    });

    server.delete('/users/:id', (schema, request) => {
        const user = schema.users.find(request.params.id);

        user.destroy();

        localSave(user);

        return new Response(204);
    });
}