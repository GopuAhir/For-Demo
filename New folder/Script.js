var element = document.getElementById("form")
element.addEventListener("submit", function (event) {
    event.preventDefault()
})
var selectedRow = null


function onFormSubmit() {
    var getDataForm = readFormData()
    if (selectedRow === null) {
        tableInsertData(getDataForm)
    } else {
        updateRecord(getDataForm)
    }
    resetForm()
}


function readFormData() {
    var formData = {}
    formData["productCode"] = document.getElementById("productCode").value
    formData["product"] = document.getElementById("product").value
    formData["qty"] = document.getElementById("qty").value
    formData["PrePrice"] = document.getElementById("PrePrice").value
    return formData
}


function tableInsertData(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0]
    var row = table.insertRow(table.length)
    var cell0 = row.insertCell(0).innerHTML = data.productCode
    var cell1 = row.insertCell(1).innerHTML = data.product
    var cell2 = row.insertCell(2).innerHTML = data.qty
    var cell3 = row.insertCell(3).innerHTML = data.PrePrice
    var cell4 = row.insertCell(4).innerHTML = `<button onClick = "onEdit(this)">Edit</button>  <button onClick = "onDelete(this)">Delete</button>`
}


function onEdit(id) {
    selectedRow = id.parentElement.parentElement
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML
    document.getElementById("product").value = selectedRow.cells[1].innerHTML
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML
    document.getElementById("PrePrice").value = selectedRow.cells[3].innerHTML
}


function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.productCode
    selectedRow.cells[1].innerHTML = data.product
    selectedRow.cells[2].innerHTML = data.qty
    selectedRow.cells[3].innerHTML = data.PrePrice
}


function onDelete(id){
    if(confirm("Do yo want to Deleted this Record?")){
           row = id.parentElement.parentElement
           document.getElementById("storeList").deleteRow(row.rowindex)
    }
    resetForm()


}


function resetForm(){
document.getElementById("productCode").value = " "
document.getElementById("product").value = " "
document.getElementById("qty").value = " "
document.getElementById("PrePrice").value = " "
}
