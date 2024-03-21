let member = [
    {
        nameM: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nameM: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        nameM: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        nameM: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        nameM: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        nameM: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }

];

for (let el of member) {
    let photo = document.querySelector(".col-8");
    let description = document.querySelector(".col-4");
    /*  let li = document.createElement("li"); */
    console.log(el.nameM, el.role);
    /* li.innerText = `Nome ${el.nameM} Role ${el.role}`; */
    photo.innerHTML += `<div><img src="img/${el.img}" class="img"></img></div>`;
    description.innerHTML += `<div class="description"> ${el.nameM} ${el.role}</div>`;
    /* let card = document.createElement("div"); */ //creo un div per ogni elemento dell'arrey
    /* let img = document.createElement("img");  */
    /*  img.setAttribute("src", "img/" + el.img); */
    /* card.appendChild(img); */
    /* let list = document.getElementById("list");
    list.appendChild(li); 
    container.appendChild(card); */
};

let newMemberName = document.getElementById("mname");
let newMemberRole = document.getElementById("role");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const nameNew = newMemberName.value;
    const secondNameNew = newMemberRole.value;
    let newMember = {
        nameM: nameNew,
        role: secondNameNew,
    }
    member.push(newMember);
    let description = document.querySelector(".col-4");
    description.innerHTML +=`<div class="description"> ${newMember.nameM} ${newMember.role}</div>`;;
    /* description.appendChild(newMember.nameM) */
})