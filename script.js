const btn=document.querySelector("button")
console.log(btn);
btn.addEventListener('click',function(){
    const englishN=document.querySelector("#english").value
    const mathsN=document.querySelector("#maths").value
    const chemistryN=document.querySelector("#chemistry").value
    const physicsN=document.querySelector("#physics").value
    // input feilds hold value in string 
    // converting string in to number
    const english=Number(englishN)
    const maths=Number(mathsN)
    const chemistry=Number(chemistryN)
    const physics=Number(physicsN)
    // console.log(english,maths,chemistry,physics);
    const totalMarks=english+maths+chemistry+physics
    // console.log(totalMarks);
    const percentage =totalMarks/4
    // console.log(percentage);
    // inserting marks to dom
    const box=document.querySelector(".box")
    console.log(box);
    const result=document.createElement("h3")
    result.innerHTML=`total marks are ${totalMarks} and percentage is ${percentage} %`
    box.appendChild(result)
    result.style.padding="10px"
})