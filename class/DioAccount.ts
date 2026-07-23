import promptSync from "prompt-sync";
const prompt = promptSync();
export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance;
  }
  
  deposit = (): void => {
    let value: number = 0;
    if(this.validateStatus()){
      value = parseFloat(prompt('Qual o valor do Depósito?')!)
      this.setBalance(this.getBalance() + value)
      console.log('Você Depositou: R$' + value + ' reais.')
      console.log('Saldo Atual: R$' + this.getBalance() + ' reais.')
    }
  }

  withdraw = (): void => {
    let value: number = 0;
    if(!this.validateStatus()){
      console.log('Conta Inválida!')
    } else{
      value = parseFloat(prompt('Qual o valor do Saque?')!)
        if(value > this.getBalance()){
          console.log('Saldo Insuficiente!')
        } else{
          this.setBalance(this.getBalance() - value)
          console.log('Voce Sacou: ' + value + ' reais.')
          console.log('Saldo Atual: ' + this.getBalance() + ' reais.')
        }
      } 
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
