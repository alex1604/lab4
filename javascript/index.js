var callback = function (){
  let button = document.getElementById('keybutton');
  let keydiv = document.getElementById('keyresult');
  let addbutton = document.getElementById('addbutton');
  let viewbutton = document.getElementById('viewbutton');
  let viewresult = document.getElementById('viewresult');
  let errorMsg = document.getElementById('error');
  var count = 0;

  var URL = 'https://www.forverkliga.se/JavaScript/api/crud.php';


  button.addEventListener('click', function() {
    let req = new XMLHttpRequest();
    let keyGet = '?requestKey';
    var URL1 = URL + keyGet;
    req.open('GET', URL1);
    req.send();

    req.onreadystatechange = function(event){
      if (req.readyState == 4){
        let obj = JSON.parse(req.responseText);
        var key = obj.key;
        keydiv.innerHTML = key;

        addbutton.addEventListener('click', function(){

          let title1 = document.getElementById('addTitle').value;
          var title = '';
          for (i=0;i<title1.length;i++){
            if (title1.charAt(i) == ' '){
              title += '%20';
            } else {
              title += title1.charAt(i);
            }
          }
          let author1 = document.getElementById('addAuthor').value;
          var author = '';
          for (i=0;i<author1.length;i++){

            if (author1.charAt(i) == ' '){
              author += '%20';
            } else {
              author += author1.charAt(i);
            }
          }
          let addbook = '?op=insert&key=' + key + '&title=' + title + '&author=' + author;
          let URL2 = URL + addbook;
          req.open('GET', URL2);
          req.send();
          req.onreadystatechange = function(event){
            if (req.readyState == 4){
              let response = JSON.parse(req.responseText);
              if(response.status === "success"){
                alert('Your book was SUCCESSFULLY added to your Library');
              }
              else if(response.status === "error"){
                console.log('an error ocurred');

                function tryAgain(){
                  count++;
                  errorMsg.innerHTML += `<pre>- Sorry, there's been an error. <br/>  Error nr: ${count} / Message: ${response.message} <br/></pre>`;
                  req.open('GET', URL2);
                  req.send();

                  if (req.readyState == 4){

                    if(response.status === "error" && count<20){ tryAgain();}
                  }

                }
                tryAgain();
              }
            }
          }
        });

        viewbutton.addEventListener('click', function(){

          /*

          {"status":"success","data":[{"id":15459,"title":"Karins livet","author":"Alejandro G",
          "updated":"2017-12-01 11:16:29"},{"id":15460,"title":"Alejandros livet","author":"Karin F",
          "updated":"2017-12-01 11:16:57"}]}

          */

          let view = '?op=select&key=' + key;
          let URL3 = URL + view;

          req.open('GET', URL3);
          req.send();
          req.onreadystatechange = function(event){
            if (req.readyState == 4){
              let obj = JSON.parse(req.responseText);

              //
                if(obj.status === "error"){

                function tryAgain(){
                  count++;
                  req.open('GET', URL3);
                  req.send();

                  if (req.readyState == 4){
                    if(response.status === "error" && count<20){ tryAgain();}
                  }
                }
                tryAgain();
              }
              //
              let data = obj.data;
              let array = [];
              for(x in data){
                array.push(data[x]);
              }
              for (i=0; i<array.length;i++){
                let book = 'Title: ' + array[i].title + '; Author: ' + array[i].author;
                let li = document.createElement('li');
                li.innerHTML = book;
                let list = document.getElementById('list');
                list.appendChild(li);
              }
            }
          }
        });
      }
    }
  });
}
window.addEventListener('load', callback);
