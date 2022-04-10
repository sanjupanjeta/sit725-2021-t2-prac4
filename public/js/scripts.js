const cardList = [
    {
        title: "Adder",
        image: "images/add.jpg",
        link: "http://localhost:3000/adder?num1=1&num2=2",
        desciption: "localhost:3000/adder?num1=[number]&num2=[number]"
    },
    {
        title: "Subtractor",
        image: "images/minus.jpg",
        link: "http://localhost:3000/subtractor?num1=10&num2=3",
        desciption: "localhost:3000/subtractor?num1=[number]&num2=[number]"
    },
    {
        title: "Multiplier",
        image: "images/mul.jpg",
        link: "http://localhost:3000/multiplier?num1=1&num2=2",
        desciption: "localhost:3000/multiplier?num1=[number]&num2=[number]"
    },
    {
        title: "Divisor",
        image: "images/divide.jpg",
        link: "http://localhost:3000/divisor?num1=1&num2=2",
        desciption: "localhost:3000/divisor?num1=[number]&num2=[number]"
    }
]

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href='+item.link+'>'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function(){
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
  });
