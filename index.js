let localItems = JSON.parse(localStorage.getItem("localItem"))

if (localItems === null) {
    let doList = {}
} else {
    doList = localItems
}


function memoryCall() {
    let doListValue = Object.values(doList)
    let doListKeys = Object.keys(doList)

    for (let i = 0; i < doListValue.length; i++) {
            
        let newList = document.createElement("li")

        if (doListValue[i][1]) {
            newList.innerHTML = `<p id="${doListKeys[i]}" onclick="did(${doListKeys[i]})">${doListValue[i][0]}</p><span onclick="remove(${doListKeys[i]})" class="remove">&cross;</span>`

        } else {
            newList.innerHTML = `<p class="did" id="${doListKeys[i]}" onclick="did(${doListKeys[i]})">${doListValue[i][0]}</p><span onclick="remove(${doListKeys[i]})" class="remove">&cross;</span>`
        }
    
        document.getElementById("doList").appendChild(newList)

    }

}



function addDo() {
    
    let tempId = Number(localStorage.getItem("tempId"))

    if (tempId === null) {
        tempId = 0
    }

    
    let newDo = document.getElementById("newDo")
    let newList = document.createElement("li")

    newList.innerHTML = `<p id="${tempId}" onclick="did(${tempId})">${newDo.value}</p><span onclick="remove(${tempId})" class="remove">&cross;</span>`
    
    document.getElementById("doList").appendChild(newList)

    doList[tempId] = [newDo.value, true]

    tempId += 1

    localStorage.setItem("localItem", JSON.stringify(doList))
    localStorage.setItem("tempId", tempId)

    newDo.value = " "
}



function did(id) {
    let didDo = document.getElementById(`${id}`)
    didDo.classList.toggle("did")

    if (doList[id][1] == true) {
        doList[id][1] = false
    } else {
        doList[id][1] = true
    }

    
    localStorage.setItem("localItem", JSON.stringify(doList))
}



function remove(id) {
    let oldDo = document.getElementById(`${id}`).parentElement
    oldDo.remove()
    delete doList[id]
    localStorage.setItem("localItem", JSON.stringify(doList))
}