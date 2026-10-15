import {test , expect} from '@playwright/test'

const baseUrl= "https://reqres.in/api"

test("Test Api get request", async({request})=>{

const res= await request.get(`${baseUrl}/users?page=2`)
expect(res.status()).toBe(200)

const text= await res.text()
expect(text).toContain("Michael")
console.log(await res.json())
});

test("Test Api post request", async({request})=>{

const res= await request.post(`${baseUrl}/users`,{
    data:{
        name:"Ambani",
        job:"Business"
    }
})

    expect(res.status()).toBe(201)
    const text= await res.text()
    expect(text).toContain("Ambani")
    console.log(await res.json())
})


test("Test Api put request", async({request})=>{

const res= await request.put(`${baseUrl}/users/2`   ,{
    data:{
        //name:"Ambani",
        job:"Business Tycoon"
    }
})

expect(res.status()).toBe(200)
const text= await res.text()
expect(text).toContain("Business Tycoon")
console.log(await res.json())  
})

test("Test Api patch request", async({request})=>{

const res= await request.patch(`${baseUrl}/users/2`,{
    data:{
        //name:"Ambani",
        job:"Business failure"
    }
})

expect(res.status()).toBe(201)
const text= await res.text()
expect(text).toContain("Business failure")
console.log(await res.json())  
})

test("Test Api delete request", async({request})=>{

const res= await request.delete(`${baseUrl}/users/2`)   
expect(res.status()).toBe(204)

})