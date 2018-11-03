const url = "http://localhost:3000/employees";

const onResolve = json => {
    console.log(json);
    console.log(json[0]);
    let tabla = document.createElement('table');
    let tr1 = document.createElement('TR');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    //let audio = new Audio('D:/Home/JavaScript/WorkspacePractica/hello.mp3');
    //audio.play();

    
     
    //aud.src = 'D:/Home/JavaScript/WorkspacePractica/hello.mp3';


    thead.appendChild(tr1);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    Object.keys(json[0]).forEach( (key) => {
      let th = document.createElement('TH');
      th.appendChild(document.createTextNode(key))
      tr1.appendChild(th);
     
    });

    json.forEach(function(element) {
        let tr = document.createElement('TR');
        tbody.appendChild(tr);
        
        Object.keys(element).forEach(function(key) {
            let td = document.createElement('TD');
            td.appendChild(document.createTextNode(element[key]))
            tr.appendChild(td);
        });
        
    });
    tabla.className = "table";
    document.body.appendChild(tabla);
    Object.keys(json[0]).forEach( (key) => {
    if(key !== "id"){
      let div = document.createElement('div');
      let labelName = document.createElement('label')
      let inputName = document.createElement('input');
      div.appendChild(labelName);
      div.appendChild(inputName);
      labelName.tagName =key;
      labelName.textContent = `${key}: `;
      document.body.appendChild(div);
    }
    });
    let boton = document.createElement('button');
    boton.className = "button is-primary";
    boton.textContent = 'Agregar';

    document.body.appendChild(boton);

    let loaded = false;
    let aud = new Audio('D:/Home/JavaScript/WorkspacePractica/welcome.mp3');
    let botonUnmuted = document.getElementById("unmuted");
    //botonUnmuted.id = 'unmuted';
    //boton.textContent = 'reproducir';
    let botonMuted = document.getElementById("muted");

    botonUnmuted.addEventListener('click',() => {
      if(loaded){
        aud.play();
      }
    });
    botonMuted.addEventListener('click',() => {
      if(loaded){
        aud.pause();
      }
    });
    aud.addEventListener('loadeddata', function() 
    {
        loaded = true;
    }, false);
     
    aud.addEventListener('error' , function() 
    {
        alert('error loading audio');
    }, false);
}

let valor = fetch(url)
    .then(response => { return response.json() })
    .then(onResolve).catch((error) => {console.log(error)} );
    