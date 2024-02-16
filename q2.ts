// ************************q2****************************
// let firstName:string ="Eric";
// console.log(firstName);

// let firstName:string = "Eric"
// console.log(`Hello${firstName},"would you like to learn some python today?" `)
// let num:number=12345
// console.log(`Hello${num},"ye mera number he?"`)

// ************************q3***************************
// name cases:store aperson,s name in a variable,and then print that personalbar,s 
//                name in lowercase ,uppercase,and titlecase.

// let firstName:string="sami ullah";
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(5).toUpperCase()+firstName.slice(2))
// let firstName:string= "sami ullah";
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase());
// console.log(firstName.charAt(2).toUpperCase()+firstName.slice(2))

// let firstName:string[]=["apple","orange","mango","banana"];
// console.log(firstName.slice(1))

// *****************************Q4****************************
                        //  quotation//  
    // let name1:string=("maher sami said")
    // console.log(`${name1}"pakistan zindabad"`)     
    // ************************q5******************************
            //    famous_person
// let famous_person:string="quaid e azaz"
// let massage:string= "pakistan zindabad"
// console.log(`${famous_person} once said " ${massage}"`)

// ******************************q6********************************
                        //  space
                        // console.log("samiullahmaher")
                        // console.log("sami\tullah\tmaher")
                        // console.log("my\ndaughter\nis\naqsasami")
// **************************slice***********************************

        // let arr:string[]=["sunday","monday","tuseday","wednesday","friday"];
        // console.log(arr.slice(1,4))
//    *************************splice*********************************

// let arr: string[]=["sami","ali","khan","asad","owais"]
// console.log(arr.splice(1,3))
// ********************************q7************************************
                           // addition
// let a:number=10
// let b:number=5
// console.log(a+b)

                         //subtraction
// let a:number=10
// let b:number=5
// console.log(a-b)
 
                        //multification
//   let a:number=10
//   let b:number=5
//   console.log(a*b)                      

//    let a:number=10
//    let b:number=5
//    console.log(a+b)     
//    console.log(a-b)     
//    console.log(a*b)     
//    console.log(a/b)  

// *************************************q8*************************
//       your output should simply  number (8)
// console.log(5+3)
// console.log(15-7)
// console.log(2*4)
// console.log(16/2)

// ************************************q9*****************************
                        // favorite number print
        // let num:number=129129
        // console.log(`my favorite num ${num}`)

//   ********************************q10********************************
                        // adding comment
// let a:number=10
// let b:number=20
// // addition
// console.log(`${a}+${b}=${a+b}`)
// //subtraction
// console.log(`${a}-${b}=${a-b}`)
// //multification
// console.log(`${a}*${b}=${a*b}`)

// console.log(`${a}/${b}=${a/b}`)
// console.log(`${a}/${b}=${b/a}`)
// let a:number=1
// let b:number= 20
// console.log(`${a}+${b}=${a+b}`)
// console.log(`${a}-${b}=${a-b}`)
// console.log(`${a}*${b}=${a*b}`)
// console.log(`${a}/${b}=${b/a}`)

// *********************************q11*************************
                                // Array


// let names:string[] =["sami","ali","khan","asad"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

// *****************************q12***************************

// let names:string[]=["sami","ali","khan","asad"]
// let message:string="how are you dear"
// console.log(names[0]+" "+message)
// console.log(names[1]+" "+message)
// console.log(names[2]+" "+message)
// console.log(names[3]+" "+" "+message)

// ******************************q13************************
// let vehichles:string[]=["honda motercycle","honda city","hilux","audi"]
// console.log("i would like to own a"+" "+vehichles[0])
// vehichles.map((items)=>console.log(`i would like to own a ${items}`))

// *******************************q14**********************
                         //guest list
// let guestArr:string[]=["sami","ali","khan","owais"]
// guestArr.map((item)=>(
        // console.log(`Dear ${item},you are invited to dinner`)
// ))

// ********************************q15**************************
                            //changing guest
    let guestArr:string[]=["sami","ali","khan","asad"]
    let canNotAttend:string="ali"
    console.log(canNotAttend+" "+"can not make it, for dinner")

    let newguest:string="owais"
    guestArr[guestArr.indexOf(canNotAttend)]=newguest;
//     console.log(guestArr)
    guestArr.map((item)=>
    console.log(`Dear ${item},you are cordinally invited to a Dinner`))
