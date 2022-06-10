'use strict';
let g = [
	{
		title: 'Kabab:',
		// src: "../dist/img/kabab.jpg",
		src: '../src/img/kabab.jpg',
		alt: 'kabab',
		para: 'Chicken, Onion, Garlic, Chili-pepper, Egg, Salt, Garam-masala and Coriander.',
	},
	{
		title: 'Barbecue Chicken:',
		src: '../src/img/dajaj.jpg',
		alt: 'dajaj',
		para: 'spices, crushed-garlic, salt, vinegar, Soy-sauce, Black-papper and Lemon.',
	},
	{
		title: 'Barbecue Meat',
		src: '../src/img/lahmeh.jpg',
		alt: 'lahmeh',
		para: 'Rock-salt, Whole-black-peppercorns, Minced-dried-garlic,Minced-dried-onion, Fennel-seeds, Thyme, Chopped-parsley and Minced-Garlic.',
	},
	{
		title: 'Tawook:',
		src: '../src/img/tawook.jpg',
		alt: 'tawook',
		para: 'Spices, Yogurt, Lemon-Juice and Garlic.',
	},
	{
		title: 'Kaftah:',
		src: '../src/img/kaftah.jpeg',
		alt: 'kaftah',
		para: 'Ground-beef, Onions, Parsley and Spices.',
	},
	{
		title: 'Tabouleh:',
		src: '../src/img/tabouleh.jpg',
		alt: 'tabouleh',
		para: 'Bulgur, Parsley, Tomato, Onion, Bulgur-wheat, Lemon, Olive-oil, Salt, Sprin-Onion, Italian-Parsley, Mint, Black-peppera and Mint-leaves.',
	},
	{
		title: 'Fatouch:',
		src: '../src/img/fatouch.jpg',
		alt: 'fatouch',
		para: 'Tomato, Sumac, Onion, Garlic, Cucumber, Pomegranate-molasses, Lemon, Olive-oil, Parsley, Salt, Bell-pepper, Radish, Balck-pepper, Spring-onion, Mint, Romaine-lettuce, Italian-parsley and Pita-bread.',
	},
];

let m = ['img', 'strong', 'p'];

let gridItem = document.createElement('div'),
	grid = document.createElement('div');
let cont = document.getElementById('content');

export default function Menu() {
	document.body.classList.add('menu');

	g.map((g) => {
		let create;
		m.map((m) => {
			if (m == 'img') {
				create = document.createElement('img');
				create.setAttribute('src', `${g.src}`),
				create.setAttribute('alt', `${g.alt}`);
			}

			if (m == 'strong') {
				create = document.createElement('strong');
				create.textContent = g.title;
				gridItem.classList.add('grid-item');
			}

			if (m == 'p') {
				create = document.createElement('p');
				create.textContent = g.para;
			}
			gridItem.classList.add('grid-item');
			gridItem.appendChild(create);
			grid.classList.add('grid');
			grid.appendChild(gridItem);
			cont.appendChild(grid);
		});
	});
}
