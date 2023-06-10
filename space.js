AFRAME.registerComponent("space",{
    schema:{
        string:{type:"string",default:"places-list"},
        selectedcard:{type:"string",default:"#card1"}
    },
    init:function(){
        this.placeContainer=this.el
        this.createCards()
    },
    createCards: function () {
        const thumbNailsRef = [
          {
            id: "star",
            title: "Stars",
            url: "./assets/stars/star.jpg",
          },
          {
            id: "Planets",
            title: "Planets",
            url: "./assets/planets.jpg",
          },
    
          {
            id: "Asteroids",
            title: "Asteroids",
            url: "./assets/ssteroids.jpg",
          },
          {
            id: "meteroites",
            title: "Meteroites",
            url: "./assets/meteroids.jpg",
          },
        ];
        let previousXPosition=-60
        for(var item of thumref)
        {
        const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      
    
    const borderEl = this.createBorder(position, item.id);

    
    const thumbNail = this.createThumbNail(item);
    borderEl.appendChild(thumbNail);

    
    const titleEl = this.createTitleEl(position, item);
    borderEl.appendChild(titleEl);

    this.placesContainer.appendChild(borderEl);
  }
},
createBorder: function (position, id) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("id", id);
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("geometry", {
    primitive: "ring",
    radiusInner: 9,
    radiusOuter: 10,
  });
  entityEl.setAttribute("position", position);
  entityEl.setAttribute("material", {
    color: "#8000ff",
    opacity: 1,
  });

  return entityEl;
},
createThumbNail: function (item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("geometry", {
    primitive: "circle",
    radius: 9,
  });
  entityEl.setAttribute("material", { src: item.url });

  return entityEl;
},
createTitleEl: function (position, item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("text", {
    font: "exo2bold",
    align: "center",
    width: 70,
    color: "#804eb1",
    value: item.title,
  });
  const elPosition = position;
  elPosition.y = -20;
  entityEl.setAttribute("position", elPosition);
  entityEl.setAttribute("visible", true);
  return entityEl;
},
});