// Javascript Entry Point
import items from './items';
import $ from 'jquery';


//did not inclue hover items in this declaration

//var itemHTML = `
//	<div class="individual_item">
 // 			<div class="photo">
 // 				<img src="${items[0].image}"> 
  //			</div>
//  			<div class="item_name">${items[0].title}></div>
//  			<div class="company">< ${items[0].shop.shop_name}</div> 
//  			<div class="price">${items[0].price}</div><div class="currency">${items[0].currency_code}</div>
//
//  			<div class="disappearing_img">
//  			</div>
//  		</div>`


//var picture = `<div class="photo">
  //					<img src="${items[0].image}"> 
  	//			</div>`


//  $('main').append(picture);

//items.forEach(function(product) {
 //	$('.photo').append(picture);
// 	return picture;
//});

//FIRST REAL ATTEMPT//
var product = items.results;


product.forEach(function(thing){
	// console.log(thing);
	var imgUrl = thing.Images[0].url_170x135;
	
	var itemName = thing.Shop.title;

	var itemCurrency = thing.Shop.currency_code;

	var itemStore = thing.Shop.shop_name;

	var itemPrice = thing.price;

	var itemHTML = `<div class="individual_item">
  			<div class="photo">
  				<img src="${imgUrl}" alt="whiskey product" height="176" width="225"> 
  			</div>
  			<div class="item_name">${itemName}</div>
  			<div class="company">${itemStore}</div>
  			<div class="price">${itemPrice}</div> " "<div class="currency">${itemCurrency}</div>
  			<div class="disappearing_img">
           <img src="assets/heart.png" alt="heart" height="20" width="20">
            <img src="assets/hamburger.png" alt="hamburger" height="20" width="20">    
        </div>
  		</div>`

	$('main').append(itemHTML);
});

       

//SECOND REAL ATTEMPT

// var imgUrl = items.results[0].Images[0].url_170x135;

// var itemName = items.results[0].Shop.title;

// var itemCurrency = items.results[0].Shop.currency_code;

// var itemStore = items.results[0].Shop.shop_name;

// var itemPrice = items.results[0].price;

// function makeBox(product) {
// 	var itemHTML = `<div class="individual_item">
//   			<div class="photo">
//   				<img src="${imgUrl}" alt="whiskey product"> 
//   			</div>
//   			<div class="item_name"><${itemName}</div>
//   			<div class="company">${itemStore}</div>
//   			<div class="price">${itemPrice}</div><div class="currency">${itemCurrency}</div>
//   			<div class="disappearing_img">
//   			</div>
//   		</div>`
// }










// 