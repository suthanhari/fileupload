fetch("https://restcountries.com/v3.1/all")

    .then(function (data) {
        return data.json();
    })


    .then(function (dataObj) {
        let mainDiv = document.createElement("div")
        let row = document.createElement("div");
        row.setAttribute('class', 'row');


        mainDiv.appendChild(row);

        dataObj.forEach(element => {
            let col = document.createElement("div");
            let card = document.createElement("div")
            col.setAttribute('class', 'column');
            card.setAttribute('class', 'card')
            let img = document.createElement("img");
            let name = document.createElement("p");
            let code = document.createElement("p");
           
            card.style.boxShadow = " 8px 10px 10px 8px rgba(0,0,0,0.2)";
            card.style.padding = "20px";

            card.style.textAlign = "center";
            card.style.backgroundColor = "#faf6f6fb";
            card.style.height = "310px"
            card.style.width = "310px"
            card.style.borderRadius = "10px"

            img.src = element.flags.png
            name.innerText = "Name : " + element.name.common
            code.innerText = "Code : " + element.cca2

            col.style.display = "flex"
            col.style.float = "left"
            // col.style.justifyContent = "space-around"
            col.style.padding = "10 20px"
            col.style.marginLeft = "80px"
            col.style.marginTop = "25px"

            mainDiv.appendChild(row)
            row.appendChild(col);
            col.appendChild(card)
            card.appendChild(img);
            card.appendChild(name)
            card.appendChild(code)
          

        })
        document.body.appendChild(mainDiv)
    })
    .catch(function (err) {
        console.log(err);
    })





















