<!--  Gra Papier, Kamień, Nozyce, Jaszczurka, Spock  -->

var gra = ['kamien' , 'spock' , 'papier', 'jaszczurka', 'nożyce'];

var ja = prompt('Wprowadz 0 dla kamien, 1 dla spock, 2 dla papier, 3 dla jaszczurka, 4 dla nożyce');
var komputer = Math.floor((Math.random() * 5) + 0);

var wynik = ((ja - komputer) +5 ) % 5;

if (wynik === 4 || wynik === 3){
  console.log('Komputer '+ gra[komputer] + ',  Ty ' + gra[ja] + ' - Przegrałes!');
}
else if (wynik === 1 || wynik === 2){
  console.log('Komputer '+ gra[komputer] + ',  Ty ' + gra[ja] + ' - Wygrałes!');

}
else if (wynik === 0){
  console.log('Komputer '+ gra[komputer] + ',  Ty ' + gra[ja] + ' - Remis!');
}

else{
  console.log('Cos poszło nie tak');
}
