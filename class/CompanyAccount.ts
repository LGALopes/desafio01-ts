import { DioAccount } from "./DioAccount"
import promptSync from "prompt-sync";

const prompt = promptSync();

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    let value: number = 0;
    if(!this.validateStatus()){
      console.log('Conta Inválida!')
    } else{
      value = parseFloat(prompt('Qual o valor do Empréstimo?')!)
      this.setBalance(this.getBalance() + value)
    }
    console.log('Voce pegou um empréstimo de: R$' + value + ' reais.')
    console.log('Saldo Atual: R$' + this.getBalance() + ' reais.')
  }
}
