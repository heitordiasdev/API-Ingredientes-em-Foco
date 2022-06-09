export class Alimento {
  private readonly id_alim: Number;
  private readonly nome_alim: String;
  private readonly fabricante: String;
  private readonly inf_nutricionais: Inf_nutricional[] = [];
  private readonly ingrediente: String;

  constructor(id_alim: Number, nome_alim: String, fabricante: String, ingrediente: String) {
    this.id_alim = id_alim;
    this.nome_alim = nome_alim;
    this.fabricante = fabricante;
    this.ingrediente = ingrediente;
  }

  addInf_nutricionais(inf_nutricional: Inf_nutricional): void {
    this.inf_nutricionais.push(inf_nutricional);
  }
}

export class Inf_nutricional {
  constructor (
    public readonly val_energetico: String,
    public readonly carboidratos: String,
    public readonly proteinas: String,
    public readonly gorduras_totais: String,
    public readonly gorduras_saturadas: String,
    public readonly gorduras_trans: String,
    public readonly fibra_alim: String,
    public readonly sodio: String,
    public readonly calcio: String
  ) {}
} 

const alimento = new Alimento(1, 'massa de bolo', 'richester', 'massa em geral');
const inf_nutricional1 = new Inf_nutricional('74g', '10g', '6.4g', '0.8g', '0.5g', '0g', '0g', '130mg', '334mg');
// const inf_nutricional2 = new Inf_nutricional('74g', '10g', '6.4g', '0.8g', '0.5g', '0g', '0g', '130mg', '334mg');
// const inf_nutricional3 = new Inf_nutricional('74g', '10g', '6.4g', '0.8g', '0.5g', '0g', '0g', '130mg', '334mg');

alimento.addInf_nutricionais(inf_nutricional1);
// alimento.addInf_nutricionais(inf_nutricional2);
// alimento.addInf_nutricionais(inf_nutricional3);

console.log(alimento)
