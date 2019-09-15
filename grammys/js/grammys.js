
$.ajax({
    url :  'https://diegonavarro96.github.io/WebDevelopment/grammys/data/grammys.json',
    type: 'GET',
    dataType : 'json',
    success : function(data){
        console.log(data)
        let newHtml = ''
        for(let i=0;i<data.fields.length;i++){
            newHtml += 
            `
                <option value="${data.fields[i].field_id}"> 
                ${data.fields[i].field}
                </option>
            `
            
        }
        $('#category_types').append(newHtml)
        loadGrammys()
        console.log("hola 1")
        
        
    },
    error : function(errorMsg){
        console.log(errorMsg)
    }
})





function loadGrammys(){
    $.ajax({
        url :  'https://diegonavarro96.github.io/WebDevelopment/grammys/data/grammys.json',
        type: 'GET',
        dataType : 'json',
        success : function(data){
            $('#category_types').on('change',function(event){

                $('#nominees_section').html('');

                let id = $(this).val()
                let newHtml = ''
                for(let i=0;i<data.fields.length;i++){
                    if(id == data.fields[i].field_id){
                    newHtml += 
                    `
                        <h2>
                            ${data.fields[i].field}
                        </h2>
                        <p>
                            ${data.fields[i].description}
                        </p>
                        

                    `
                    
                    for(let y=0;y<data.fields[i].categories.length;y++){
                        newHtml +=
                        `
                            <h3>
                            ${data.fields[i].categories[y].category_name}
                            </h3>
                        `
                    for(let z=0;z<data.fields[i].categories[y].nominees.length;z++){
                        if(data.fields[i].categories[y].winner_id == z){
                            newHtml +=
                        `
                            <ul>
                                <li class="winner">
                                    ${data.fields[i].categories[y].nominees[z].nominee}
                                    <span class="winnerColor">Winner!</span>
                                </li>
                                <p>${data.fields[i].categories[y].nominees[z].artist}</p>
                                <p>${data.fields[i].categories[y].nominees[z].info}</p>
                            </ul>

                        `
                        }
                        else{
                        newHtml +=
                        `
                            <ul>
                                <li>
                                    ${data.fields[i].categories[y].nominees[z].nominee}
                                </li>
                                <p>${data.fields[i].categories[y].nominees[z].artist}</p>
                                <p>${data.fields[i].categories[y].nominees[z].info}</p>
                            </ul>

                        `
                        }
                    }
                       
                    }

                    }


                }

                $('#nominees_section').append(newHtml)

                console.log("ALGO")
            })
           
        },
        error : function(errorMsg){
            console.log(errorMsg)
        }
    })
    }
    