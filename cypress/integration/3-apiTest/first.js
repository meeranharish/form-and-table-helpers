describe('is API test good in cypress', () => {
    let name
    let changeName
    it('GET REQUEST', () => {
        cy.request('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.data[0].employee_name).to.equal('Tiger Nixon')
            name = response.body.data[0].employee_name
            name === 'Tiger Nixon'? changeName = true : changeName = false
            if(changeName === true){
                cy.request({
                    url: 'http://dummy.restapiexample.com/api/v1/update/21',
                    method:'PUT',
                    body:{employee_name: 'Lion'}
                }).then((response)=>{
                    expect(response.status).to.equal(200)     
                })
            }
            else{
                cy.request({
                    url: 'http://dummy.restapiexample.com/api/v1/update/21',
                    method:'PUT',
                    body:{id: 100}
                }).then((response)=>{
                    expect(response.status).to.equal(200)     
                })
            }
        })
        cy.request('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            expect(response.body).to.exist
            expect(response.status).to.equal(200)
        })
    })
    // it('POST request',()=>{
    //     cy.request({
    //         url: "http://dummy.restapiexample.com/api/v1/create",
    //         method: "POST",
    //         body:  {"name":"test","salary":"123","age":"23"}
    //     }).then((response)=>{
    //         expect(response.body.status).to.equal('success')
    //         expect(response.body.data.salary).to.equal('123')
    //         expect(response.status).to.equal(200)
    //     })
    // })
    // it('Delete request',()=>{
    //     cy.request({
    //         url: "http://dummy.restapiexample.com/api/v1/delete/2",
    //         method: "DELETE",
    //     }).then((response)=>{
    //         expect(response.body.status).to.equal('success')
    //         expect(response.status).to.equal(200)
    //     })
    // })
})