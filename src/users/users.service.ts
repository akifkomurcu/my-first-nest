import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            username: 'john',
            password: 'changeme',
            age: 22
        },
        {
            id: 2,
            username: 'chris',
            password: 'secret',
            age: 33
        },
        {
            id: 3,
            username: 'maria',
            password: 'guess',
            age: 55
        },
    ];

    findAll() {
        return this.users;
    }
    getOne(id: number) {
        return this.users.find((user: any) => {
            return user.id === id
        })
    }
}