document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    if(text === 'delete'){
        btnDelete.removeAttribute('disabled');
    }
    else{
        btnDelete.setAttribute('disabled', true);
    }

})


document.getElementById('btn-delete').addEventListener('click', function(){
    const gitLink = document.getElementById('git-link');
    gitLink.style.display = 'none';
})