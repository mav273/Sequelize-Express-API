function foo() {
    if (document.getElementById("fname").value = 'admin' && document.getElementById("lname").value){
        location.href='content.html'
    }
    else{
        alert("Erro ao fazer login")
    }
}     

function mostrar(){
    if (document.getElementById("crud").value = 'Criar'){
        alert(document.getElementById("crud").value)
        var cri = document.getElementById("opccriar")
        var rea = document.getElementById("opcconsultar")
        var upd = document.getElementById("opcatualizar")
        var del = document.getElementById("opcdeletar")
        if (cri.style.visibility=="visible")
        cri.style.visibility = "hidden"
        else
        cri.style.visibility = "visible"
    }
    if (document.getElementById("crud").value = 'Consultar'){
        alert('crira1')
        var cri = document.getElementById("opccriar")
        var rea = document.getElementById("opcconsultar")
        var upd = document.getElementById("opcatualizar")
        var del = document.getElementById("opcdeletar")
        cri.style.visibility=="hidden"
        rea.style.visibility=="visible"
        upd.style.visibility=="hidden"
        del.style.visibility=="hidden"
    }
    if (document.getElementById("crud").value = 'Atualizar'){
        var cri = document.getElementById("opccriar")
        var rea = document.getElementById("opcconsultar")
        var upd = document.getElementById("opcatualizar")
        var del = document.getElementById("opcdeletar")
        cri.style.visibility=="hidden"
        rea.style.visibility=="hidden"
        upd.style.visibility=="visible"
        del.style.visibility=="hidden"
    }
    if (document.getElementById("crud").value = 'Deletar'){
        var cri = document.getElementById("opccriar")
        var rea = document.getElementById("opcconsultar")
        var upd = document.getElementById("opcatualizar")
        var del = document.getElementById("opcdeletar")
        cri.style.visibility=="hidden"
        rea.style.visibility=="hidden"
        upd.style.visibility=="hidden"
        del.style.visibility=="visible"
    }
}