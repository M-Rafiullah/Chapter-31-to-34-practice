///////CHAPTER 31 TO 34///////

////// Q NO 1//////

// var Time = new Date();
// document.write(Time)

////// Q NO 2//////

// var number = new Date();
// var number1 = number.getMonth();
// document.write(number1)

////// Q NO 3//////

//  var numd = new Date().toString();
//  var num1 = numd.slice(0,3);
//  alert(num1)



////// Q NO 4//////


//  var myDate = new Date();
//  var num1 = myDate.getDay();
//  if(myDate.getDay() == 6 || myDate.getDay() == 0) 

//  alert('It’s Fun Day');
//  document.write(num1)


////// Q NO 5//////

//  var AAS = new Date();
//   var num2 = AAS.setMonth();

//   if (num2 === 15){
//       alert("First Fifteen  Days of the Month")
//   }
//   else{
//     alert("Last Days of the Month")
//   }





////// Q NO 6//////

// //  var time = new Date();
// //  document.write("current date:" + time +"<br>")

// var numb = new Date();
//  var numb2 = numb.getTime();
// var numb1 = numb.getMilliseconds()
// var numb3 = numb2+numb1
// document.write("Elapsed millisecond since 1,1970:"+numb3 +"<br>") 

// var numb = new Date();
// var numb1 = numb.getTime();
// document.write("Elapsed minutes since 1,1970:"+numb1 ) 

// ////// Q NO 7//////

//  var num = new Date();
//  var num1 = num.getTime();

//  if (num1 === "AM"){
//           alert("Its AM")
//       }
//       else{
//         alert("Its PM")
//       }


////// Q NO 8//////

// var now = new Date();
// now.setDate(29);
// now.setMonth(10)
// now.setFullYear(2021)
// document.write("Later Date :" +now)




////// Q NO 9//////

// var pass = new Date();
// var time = pass.getTime()
//     // console.log(newd)
//     var now = new Date("April 24 ,2020");
//     var tittle = now.getTime()
//     var differ = time - tittle;
//      var flor = Math.floor(differ/(1000 * 60 *60*24) )

//     document.write(flor + " Days have Past Since 1st Ramadan , 2020")

// question = 10 

// var now = new Date().getTime()
// var para = new Date("june 20 ,2015").getTime()
// var subra = now - para
// document.write("on Ref Date " +new Date() +" , <br> "+ subra + "Sec had Passed Since Beginning of 2015")


////// Q NO 12//////
// var now = new Date().getFullYear()
// var sector = new Date().getFullYear() - 100

// console.log(now + " "+sector)


////// Q NO 13//////


// var past = new Date(prompt('enter ur age like may 4 , 2000'));
// var tim = past.getTime()
//     // console.log(newd)
//     var now = new Date();
//     var ti = now.getTime()
//     var dif = ti - tim;
//      var flor = Math.floor(dif/(1000 * 60 *60*24*30*12) )

//     document.write(flor + " is your age")



////// Q NO 14//////
// var user = prompt('enter ur name ')
// var arr =["Jan" ,"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov" ,"Dec"]
// var mon = new Date ().getMonth()
// var min = arr[mon]
// var numb = 232
// var numb2 = 16  
// var Rotal = numb+numb2
// var late = Total + 70
// document.write("Customer name : " + user + + "<br>" + " Month : " + min +" <br> " + "Number of Unit :  "+ num +"<br>" + "Charges Per Unit : " + numb2  + "<br> " + "<br>" + "Net Amount payable ( " + new Date().toLocaleDateString() + "): " + Total + "<br>" + 'Gross Amount Payable after due date ( ' + new Date(11 / 21 ).toLocaleDateString(2021))   