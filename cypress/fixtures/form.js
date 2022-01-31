let data = require('./data')
export const formFields = [
  {
    type: 'url', value: 'https://demoqa.com/webtables'
  },
  {
    type: 'button', id: 'addNewRecordButton', condition: { force: true }
  },
  {
    type: 'text', value: data.user.firstName, id: 'firstName', condition: { delay: 100 }
  },
  {
    type: 'text', value: data.user.lastName, id: 'lastName',
  },
  {
    type: 'text', value: data.user.email, id: 'userEmail',
  },
  {
    type: 'text', value: data.user.age, id: 'age',
  },
  {
    type: 'text', value: data.user.salary, id: 'salary',
  },
  {
    type: 'text', value: data.user.department, id: 'department',
  },
  {
    type: 'submit', id: 'userForm',
  }
]
