let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
// console.log(countEl)

let count = 0
// console.log(count)

function increment() {
    count += 1
    countEl.innerText = count  // document.getElementById("count-el").innerHTML = count
    // console.log(count)

}

function save(){
    let ans = count + " - "
    saveEl.textContent += ans
    console.log(count)
    count = 0
    countEl.textContent = 0
    
}
