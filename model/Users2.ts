export class Person {
  private readonly usuarios: Usuario[] = [];

  addUsuarios(usuario: Usuario): void { 
    this.usuarios.push(usuario);
  }
}

export class Usuario {
  constructor (
    public readonly id: Number,
    public readonly nome: String,
    public readonly cpfCnpj: String,
    public readonly email: String,
    public readonly dataNasc: String,
    public readonly tipo: Number,
  ) {}
}
const person = new Person();
const usuario1 = new Usuario(1, 'Rubens', '11-111-111/0001-11', 'rubens@gmail.com', '16-03-1998', 1);
const usuario2 = new Usuario(2, 'Rizia', '11-111-111/0001-11', 'rubens@gmail.com', '16-03-1998', 1);
const usuario3 = new Usuario(3, 'Rafa', '11-111-111/0001-11', 'rubens@gmail.com', '16-03-1998', 1);

person.addUsuarios(usuario1);
person.addUsuarios(usuario2);
person.addUsuarios(usuario3);

console.log(person)