var callback = function (){
  let button = document.getElementById('keybutton');
  let keydiv = document.getElementById('keyresult');
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

        let addbook = '?op=insert&key=' + key + '&title=Karin%20in%20Wonderland&author=Alejandro%20Garcia';
        let URL2 = URL + addbook;
        req.open('GET', URL2);
        req.send();
        console.log('url is the following:' + URL2);
        req.onreadystatechange = function(event){
          if (req.readyState == 4){
            alert(req.responseText);
            let view = '?op=select&key=' + key;
            let URL3 = URL + view;
            req.open('GET', URL3);
            req.send();
            alert(req.responseText);
          }
        }
      }
    }
  });
}


window.addEventListener('load', callback);
