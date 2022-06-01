var mylist =document.getElementById("mylist");
function myadd(){
    var mytext = document.getElementById("mytext")
    console.log(mytext.value.length)

    if(mytext.value.length > 3){
        console.log("correct")
        var li = document.createElement("li");
        var listTxt = document.createTextNode(mytext.value);
        li.appendChild(listTxt);
        console.log(li);

        var deletebtn = document.createElement("button");
        var deleteBtnTxt = document.createTextNode('');
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        deletebtn.appendChild(deleteBtnTxt);
        deletebtn.setAttribute("onclick", "deleteList(this)");
        console.log(deletebtn);

        var editwork = document.createElement("button");
        var editBtnTxt = document.createTextNode("");
        editwork.innerHTML = '<i class="far fa-edit"></i>';
        editwork.appendChild(editBtnTxt);
        editwork.setAttribute("onclick", "editList(this)");
        console.log(editwork);
        li.appendChild(editwork);
        li.appendChild(deletebtn);

        mylist.appendChild(li);
        mytext.value = "";

    }else{
        alert("Enter Input Correct Value")
    }
}
function delall(){
    mylist.innerHTML= "";
}
function deleteList(rafi) {
    rafi.parentNode.remove();
}
function editList(e){
    var edittask = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue );
    console.log(edittask);
    e.parentNode.firstChild.nodeValue = edittask;
} 