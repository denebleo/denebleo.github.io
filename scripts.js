let currentPhoto = 0;
let oldIndex = -1;
let imagesdata = [
    {
        photo: 'images/ducks_1280.jpg',
        title: 'Anyakacsa és a kicsik',
        description: 'Az anykacsa és a kicsik a parton vannak. nagyon kedves ki képecske ez. Remélem nem törtőnik semmi bajuk.'
    },
    {
        photo: 'images/ginkgo_1280.jpg',
        title: 'Levél esőcseppel',
        description: 'A levélen nagyon szépen látszanak az eső cseppjei. talán az amazonasi esőredőben készült a kép, ahol nemrég ért véget a nagy esőzés. De az is lehet, hogy köd volt a vidéken.'
    },
    {
        photo: 'images/mazarine-blue_1280.jpg',
        title: 'Kék lepke',
        description: 'Egy lepke ráült a növény virágára. Lehet, hogy elfáradt a sok repülésben vagy táplálékot keres. Ki tudja.'
    },
    {
        photo: 'images/peacock_1280.jpg',
        title: 'Páva',
        description: 'A páva éppen éles hangot ad ki. Lehet, hogy egy ragadozót akar elijeszteni.'
    },
    {
        photo: 'images/pizza_1280.jpg',
        title: 'Elkészült a pizza',
        description: 'Egy ínycsiklandozó pizza készült el épp, még meleg, tehét várni kell még a megevésével.'
    },
    {
        photo: 'images/waterfall_1280.jpg',
        title: 'Vízesés',
        description: 'Talán valahol a skót felföldön található ez a vízesés. Ahol sokszor komor, borult, ködös az időjárás.'
    },
    {
        photo: 'images/zakynthos_1280.jpg',
        title: 'Tengerpart sziklákkal',
        description: 'A vízből kiálló sziklák, valamint a kék végtelenbe vesző tenger látványa megkapó.'
    } 
]

let thumbdata = [ 'images/th_ducks_1280.jpg', 'images/th_ginkgo_1280.jpg',' images/th_mazarine-blue_1280.jpg', 'images/th_peacock_1280.jpg', 'images/th_pizza_1280.jpg', 
' images/th_waterfall_1280.jpg', ' images/th_zakynthos_1280.jpg']
 /* {
    photo: 'images/th_ducks_1280.jpg',
    //title: 'Anyakacsa és a kicsik',
    //description: 'Az anykacsa és a kicsik a parton vannak. nagyon kedves ki képecske ez. Remélem nem törtőnik semmi bajuk.'
},
{
    photo: 'images/th_ginkgo_1280.jpg',
    //title: 'Levél esőcseppel',
    //description: 'A levélen nagyon szépen látszanak az eső cseppjei. talán az amazonasi esőredőben készült a kép, ahol nemrég ért véget a nagy esőzés. De az is lehet, hogy köd volt a vidéken.'
},
{
    photo: 'images/th_mazarine-blue_1280.jpg',
    //title: 'Kék lepke',
    //description: 'Egy lepke ráült a növény virágára. Lehet, hogy elfáradt a sok repülésben vagy táplálékot keres. Ki tudja.'
}
]*/

/*let data = {
    photo: 'images/ducks_1280.jpg',
    title: 'Anyakacsa és a kicsik',
    description: 'Az anykacsa és a kicsik a parton vannak. nagyon kedves ki képecske ez. Remélem nem törtőnik semmi bajuk.'
  };

  $('#photo').attr('src', imagesdata[1].photo);
  $('#photo-title').text(imagesdata[1].title);
  $('#photo-description').text(imagesdata[1].description);
*/

thumbdata.forEach((item, index, imagesdata) => {
  $('#alsoResz').append(`<img class="kicsiKepek" id="kicsiKepek-${index}" data-index="${index}" width="100" src="${item}">`);
  $('.kicsiKepek').click((event) => {
    //let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    //let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    //$('#clicked').text(thumbdata[indexClicked]);
  });
});

imagesdata.forEach((item, index) => {
    $(`#kicsiKepek-${index}`).attr('title', `${item.title}`);
});

 function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesdata[photoNumber].photo);
    $('#photo-title').text(imagesdata[photoNumber].title);
    $('#photo-description').text(imagesdata[photoNumber].description);
    $(`#kicsiKepek-${photoNumber}`).css("background-color", "yellow");
    $(`#kicsiKepek-${photoNumber}`).css("box-shadow", "0px 20px 20px #333333");  
    if (oldIndex > -1) {
      $(`#kicsiKepek-${oldIndex}`).css("background-color", "white");
      $(`#kicsiKepek-${oldIndex}`).css("box-shadow", "0px 10px 5px black");  
    }
    oldIndex = currentPhoto;
  }
 
  loadPhoto(0);

  $('#jobbNyil').click(() => {
    if(currentPhoto < imagesdata.length - 1) { 
        currentPhoto++; 
      }
    else {
        currentPhoto = 0;  
    }
    loadPhoto(currentPhoto);
  })

  $('#balNyil').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;  
      }
    else {
        currentPhoto = imagesdata.length - 1;
    }
    loadPhoto(currentPhoto);
  })

  $('.kicsiKepek').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    currentPhoto = numberIndex;
    loadPhoto(numberIndex);
  })
  