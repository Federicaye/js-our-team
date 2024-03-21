let member = [
    {
        nameM : "Wayne Barnett",
        role : "Founder & CEO",
        img : "wayne-barnett-founder-ceo.jpg"
    },

    {
        nameM : "Angela Caroll",
        role : "Chief Editor",
        img : "angela-caroll-chief-editor.jpg"
    },

    {
        nameM : "Walter Gordon",
        role : "Office Manager",
        img : "walter-gordon-office-manager.jpg"
    },

    {
        nameM : "Angela Lopez",
        role : "Social Media Manager",
        img : "angela-lopez-social-media-manager.jpg"
    },

    {
        nameM : "Scott Estrada",
        role : "Developer",
        img : "scott-estrada-developer.jpg"
    },

    {
        nameM : "Barbara Ramos",
        role : "Graphic Designer",
        img : "barbara-ramos-graphic-designer.jpg"
    }

];

for (let el of member) {
    let li = document.createElement("li");
    console.log(el.nameM)
    li.innerHTML = `Nome ${el.nameM} Role ${el.role}`
    let img = document.createElement("img");
    img.setAttribute("src", "img" + el.img);
    let list = document.getElementById("list");
    list.appendChild(li);
};