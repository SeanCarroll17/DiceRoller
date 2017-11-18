(function() {
	var body = document.getElementsByTagName('body')[0];
	var click = document.getElementById('roll');
	var img = document.createElement('img');
	body.appendChild(img)
	var i = 0;
	var diceNum = Math.floor(Math.random() * 6);
	click.addEventListener('click', function(){
		click.style.display = 'none';
		var p = document.createElement('p');
		var txt = document.createTextNode('The Dice Is Rolling');
		p.appendChild(txt);
		body.appendChild(p);
		if(i < 5){
			var wait = setInterval(function(){
				i++
				console.log(i)
				if(i >= 5){
					clearInterval(wait)
					if(diceNum === 1){
						console.log('you rolled a 1')
						img.setAttribute('src', 'dice_Nums/1.png')
					}
					else if(diceNum == 2 ){
						console.log('you rolled a 2')
						img.setAttribute('src', 'dice_Nums/2.png')
					}
					else if(diceNum === 3 ){
						console.log('you rolled a 3')
						img.setAttribute('src', 'dice_Nums/3.png')
					}
					else if(diceNum === 4 ){
						console.log('you rolled a 4')
						img.setAttribute('src', 'dice_Nums/4.png')
					}
					else if(diceNum === 5 ){
						console.log('you rolled a 5')
						img.setAttribute('src', 'dice_Nums/5.png')
					}
					else if(diceNum === 6){
						console.log('you rolled a 6')
						img.setAttribute('src', 'dice_Nums/6.png')
					}
				}
			}, 1000)
		}
	});
})();