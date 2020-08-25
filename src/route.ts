import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld (request: Request, response: Response) {
  const user = createUser({
    email: 'nome@server.dn',
    password: '123456',
    techs: [
      'Node.js',
      'MariaDB',
      'React Native',
      { title: 'Javascript', experience: 100},
      { title: 'Delphi', experience: 100},
    ]
  });

  return response.json( { message: 'AAHello World '});
}