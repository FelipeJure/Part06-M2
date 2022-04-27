let showFriends = function (){
    $.get('http://localhost:5000/amigos', function (data) {
    //    let lista = $('#lista')[0]
    //     if (!document.querySelector('.friendList')){
    //     data.forEach(element => {
    //         let name = document.createElement ('li')
    //         name.id = element.id
    //         name.className = 'friendList'
    //         name.innerText = element.name
    //         lista.appendChild (name)
        $('#lista').empty ()
        data.forEach(e => {
            $('#lista').append(`<li id='${e.id}' class='friendList'> ${e.name} </li>`)
        })
    })
}
$('#boton').click(showFriends)



$('#search').click(function (){
  //  $.get('http://localhost:5000/amigos', function (data) {
        let idPerson = $('#input')[0].value //  let idPerson = document.getElementById ('input').value
        if (idPerson) {
//            data.forEach (el => {
                // if (el.id == idPerson.value) {
                //     document.querySelector('#amigo').innerText = el.name
                //     idPerson.value = ''
            $.get(`http://localhost:5000/amigos/${idPerson}`, function (friend) {
                $('#amigo').text (friend.name)
            })
        }
        $('#input')[0].value = ''
//        })
//    })
})


$('#delete').click(function (){
    let idPerson = $('#inputDelete')[0].value
    let msj = $('#sucess')[0]
    if (idPerson){
        // $.get('http://localhost:5000/amigos', function (data) {
        //     data.forEach (el => {
        //         if (el.id == idPerson.value) {
        //             setTimeout(() => {
        //                 msj.innerText = `${el.name} fue eliminado con exito`
        //             }, 0)
        //             setTimeout(() => {
        //                 msj.innerText = ''
        //             }, 1000);
        //         } 
        //     })
        // $(`#${idPerson.value}`).remove ();
        // idPerson.value = ''
        let deleteFriend
        $.get(`http://localhost:5000/amigos/${idPerson}`, function (friend){
            deleteFriend = friend.name
        })
        $.ajax({
            url: `http://localhost:5000/amigos/${idPerson}`,
            type: 'DELETE',
            success: function(){
                msj.innerText = `${deleteFriend} fue eliminado con exito`;
                $('#inputDelete')[0].value = '';
                showFriends();
            }
        })
    }
})