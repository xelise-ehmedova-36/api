const BASE_URL='https://api.newtimes.az/api/login'
fetch(`${BASE_URL}`)
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const form=document.querySelector('form')


form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(`${BASE_URL}/login`, {
        method:'post',
        
        body:  JSON.stringify({
email:email.value,
password:password.value

        }),
        
        
        headers:{
            "Content-Type":application/json,
        },
            })
        
})