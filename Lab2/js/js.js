function refresh(){
$('input[name$="todo"]').change(function() {
    if(this.checked) {
        $(this).next().addClass("done")

       // console.log("hola3")
    }
    else{
        $(this).next().removeClass("done")
        
    }
});
}

var val=6;
$( "#bttn" ).click(function() {
    var txt = $('#newitem').val();

    let newHtml = ''
    newHtml += 
        `
            <li><input type="checkbox" name="todo" value="${val}"><span>${txt}</span></li>
        `
        $('ul').append(newHtml)
        val = val +1;
        refresh()
  });
