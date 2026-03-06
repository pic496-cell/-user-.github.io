fetch("/api/weapons")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("weaponTree")

    function createTree(weapons){

        let ul = document.createElement("ul")

        weapons.forEach(w=>{

            let li = document.createElement("li")

            li.innerText = w.name + " ("+w.type+")"

            if(w.children){
                li.appendChild(createTree(w.children))
            }

            ul.appendChild(li)

        })

        return ul
    }

    container.appendChild(createTree(data.weapons))

})