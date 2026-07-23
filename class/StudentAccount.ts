import { DioAccount } from "./DioAccount"
import promptSync from "prompt-sync";

const prompt = promptSync();

export class StudentAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber) 
  }

  override deposit = (): void => {
    let value: number = 0;
    if(this.validateStatus()){
      value = parseFloat(prompt('Qual o valor do Depósito?')!)
      this.setBalance(this.getBalance() + value + 10)
      console.log('Você Depositou: R$' + value + ' reais.')
      console.log('Saldo Atual: R$' + this.getBalance() + ' reais.')
    }
  }
}