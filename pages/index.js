function getUrl(done){
    const results = fetch ('https://my-json-server.typicode.com/SEBASTIANULIBARRI/DiarioDigital/posts')
    results.then(response => response.json())
    .then(data=>{
    done(data)
    });
    }
    getUrl(data=> {
    data.forEach(element => {
    
    //for (let i=0; i<2;i++){
    /*elementos para crear la tarjeta*/
    let img = document.createElement("img");
    let div = document.createElement("div");
    let a = document.createElement("a");
    let p = document.createElement("p");
    let precio = document.createElement("p");
    p.innerHTML = element.title;
    precio.innerHTML = "$" + element.id*100;
    img.classList.add("producto-img");
    img.src= element.url_img;
    //agrego las clases para que se le aplique el formato diseniado en css
    div.classList.add("producto");
    div.classList.add("p"+ element.id);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(precio);
    a.appendChild(div);
    a.href = element.url_img;
    console.log(a);//esto es para ver que tiene el a, no seria necesario.
    document.getElementById("Container").appendChild(a);
    
    // document.getElementById("HOLA").src= data[1].url_img
    //Esta seria la forrma con un for que no es foreach
    /*for (let i=0; i<2;i++){
    //elementos para crear la tarjeta
    let img = document.createElement("img");
    let div = document.createElement("div");
    let a = document.createElement("a");
    let p = document.createElement("p");
    let precio = document.createElement("p");
    p.innerHTML = data[i].title;
    precio.innerHTML = "$" + data[i].id*100;
    img.classList.add("producto-img");
    img.src= data[i].url_img;
    div.classList.add("producto");
    div.classList.add("p"+ i);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(precio);
    a.appendChild(div);
    a.href = data[i].url_img;
    console.log(a);
    document.getElementById("Container").appendChild(a);
    */
    });
    }
    );