export class Users {
  private readonly id: Number;
  private readonly nome: String;
  private readonly cpfCnpj: String;
  private readonly email: String;
  private readonly dataNasc: String;
  private readonly tipo: Number;

  constructor(
    id: Number,
    nome: String,
    cpfCnpj: String,
    email: String,
    dataNasc: String,
    tipo: Number
  ) {
    this.id = id;
    this.nome = nome;
    this.cpfCnpj = cpfCnpj;
    this.email = email;
    this.dataNasc = dataNasc;
    this.tipo = tipo;
  }
}

const users = new Users(
  12,
  "RUbens",
  "11.111.111/0001-11",
  "rubens@gmail.com",
  "16/03/1998",
  1
);
console.log(users);