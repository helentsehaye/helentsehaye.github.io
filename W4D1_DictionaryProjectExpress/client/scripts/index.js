$(()=>{

    $('#btn').on('click',(event)=>{
        event.preventDefault();
        //console.log($("#terms").get(0));
       // console.log(reqword);
      var reqword=document.getElementById('term').value;
       //console.log(reqword);
       $.post("http://localhost:5000/getAll",{word:reqword})
       .done((data)=>{
           showresult(data);
           console.log(data[0]['word']);
       })
       .fail((err)=>{
           console.log(err);
       });
  
    });
    // $('#form-div').submit((e)=>{
    //     e.preventDefault();
    //     var form=$('#form-div');
    //     $.ajax({
    //         type: form.attr('method'),
    //         url: form.attr('action'),
    //         data:form.serialize(),
    //         sucess:(data)=>{
    //             alert(`submitted successfully`)
    //             console.log(data);
    //         },
    //         error:(data)=>{
    //             console.log('error occured');
    //             console.log(data);
    //         }
    //     });
    // })
});

showresult=(val)=>{
    $('#displayresult').empty();
    for (let i=0;i<val.length;i++){
        $('#displayresult').append(`<li> (${val[i].wordtype})::${val[i].definition}</li>`)
    }
    
}

// var xhttp = new XMLHttpRequest();
// xhttp.open("GET","app.js",true);
// xhttp.send(reqword);