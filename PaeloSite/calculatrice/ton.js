var tpcalc = parseInt(prompt('Choisissez un type de calcul à faire : ( 1=additionner / 2=soustraire / 3=multiplier / 4=diviser)'));
	
switch (tpcalc) {
	case 1:
		alert('ok cool va pour l\'addition');
		var nicks = 0,
		nick,
		fin = true;

		while (fin) {
			nick = prompt('Un nombre :');

			if (nick) {
			nicks = parseInt(nicks) + parseInt(nick)
		} else {
			fin = false;
		}
	}
	alert(nicks)
	break;

	case 2:
	alert('ok cool va pour la soustraction');
	var rep1 = prompt('Le premier nombre svp :'), nombre1;
	var rep2 = prompt('Le deuxième nombre svp :'), nombre2;
	nombre1 = parseInt(rep1);
	nombre2 = parseInt(rep2);
	var result = nombre1 - nombre2;
	alert(result);
	break;

	case 3:
	alert('ok cool va pour la multiplication');
	var rep1 = prompt('Le premier nombre svp :'), nombre1;
	var rep2 = prompt('Le deuxième nombre svp :'), nombre2;
	nombre1 = parseInt(rep1);
	nombre2 = parseInt(rep2);
	var result = nombre1 * nombre2;
	alert(result);
	break;

	case 4:
	alert('ok cool va pour la division');
	var rep1 = prompt('Le premier nombre svp :'), nombre1;
	var rep2 = prompt('Le deuxième nombre svp :'), nombre2;
	nombre1 = parseInt(rep1);
	nombre2 = parseInt(rep2);
	var result = nombre1 / nombre2;
	alert(result);
	break;

	default:
	alert('aucun de ces chiffres n\'est valide')
}