import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Ana', 22)
console.log(peopleAccount)
peopleAccount.deposit()
peopleAccount.withdraw()

const studentAccount: StudentAccount = new StudentAccount('Luis', 27)
console.log(studentAccount)
studentAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan()