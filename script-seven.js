
const quantities = document.querySelectorAll('.product_card');

[...quantities].forEach(function(quantity) {
  const plusButtonStock = quantity.querySelector('.buttonIncrement_stock');
  const minusButtonStock = quantity.querySelector('.buttonDecrement_stock');
  const plusButtonOrder = quantity.querySelector('.buttonIncrement_order');
  const minusButtonOrder = quantity.querySelector('.buttonDecrement_order');
  const inputFieldStock = quantity.querySelector('.num_stock_counter');
  const inputFieldOrder = quantity.querySelector('.num_order_counter');


  

  minusButtonOrder.addEventListener('click', function minusProduct() {
    const currentValueOrder = Number(inputFieldOrder.value);
    if (currentValueOrder > 0) {
      inputFieldOrder.value = currentValueOrder - 1;
    } else inputFieldOrder.value = 0;
      console.log(currentValueOrder)
  });

  plusButtonOrder.addEventListener('click', function plusProduct() {
    const currentValueOrder = Number(inputFieldOrder.value);
    inputFieldOrder.value = currentValueOrder + 1;
      console.log(currentValueOrder)
  });

  minusButtonStock.addEventListener('click', function minusProduct() {
    const currentValueStock = Number(inputFieldStock.value);
    if (currentValueStock >= 0) {
      inputFieldStock.value = currentValueStock - 1;
    } else inputFieldStock.value = -1;
      console.log(currentValueStock)
  });

  plusButtonStock.addEventListener('click', function plusProduct() {
    const currentValueStock = Number(inputFieldStock.value);
    inputFieldStock.value = currentValueStock + 1;
      console.log(currentValueStock)
  });

});



somefunction = function () { return false;}

const body = document.querySelector("body");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
   nav.classList.add("visible");
   body.classList.remove("moving");
   body.classList.add("stop");

   navExpandList.classList.remove('show-list');
   document.querySelector(".btnToNavbar").classList.remove("visiblebtnFloating");
   document.querySelector(".btnToNavbarTwo").classList.remove("visiblebtnFloating");
   document.querySelector(".options").classList.remove("hover");
   document.querySelector(".options-close").classList.remove("visible")
   document.querySelector(".configuration").classList.remove("no__Visible")
})


cerrar.addEventListener("click", () => {
   nav.classList.remove("visible");
   body.classList.remove("stop");
   body.classList.add("moving");
})

const viewportWsp = document.querySelector("#viewportWsp");
const abrirWsp = document.querySelector("#wsp-icon-btn");
const closeViewportWsp = document.querySelector("#close-wsp-viewport");

abrirWsp.addEventListener("click", () => {
  viewportWsp.classList.add("visible-viewport-wsp");
  cartProduct = document.querySelectorAll(".quantity-stock-product")

  for (let i = 0; i < cartProduct.length; i++){
	  
    stockData = document.querySelectorAll('.quantity-stock-product')[i].textContent;
    if(stockData === '-' ){
      console.log("rowProduct", "constancia");
    }
  }
  
})

closeViewportWsp.addEventListener("click", () => {
  viewportWsp.classList.remove("visible-viewport-wsp");
})


const productsList = document.querySelector(".container_products_list");
const shopListOpen = document.getElementById("list-products");
const shopListClose = document.getElementById("close-product-list");

shopListOpen.addEventListener("click", () => {
 productsList.classList.add("visible");
 body.classList.remove("moving");
 body.classList.add("stop");

 navExpandList.classList.remove('show-list');
 document.querySelector(".btnToNavbar").classList.remove("visiblebtnFloating");
 document.querySelector(".btnToNavbarTwo").classList.remove("visiblebtnFloating");
 document.querySelector(".options").classList.remove("hover");
 document.querySelector(".options-close").classList.remove("visible")
 document.querySelector(".configuration").classList.remove("no__Visible")
 
})

shopListClose.addEventListener("click", () => {
 productsList.classList.remove("visible");
 body.classList.remove("stop");
 body.classList.add("moving");
})



const btnLupa = document.getElementById("lupa");
const cartProductList = document.getElementById("open-cart-total");
btnLupa.addEventListener("click", () => {
 nav.classList.remove("visible");
 productsList.classList.add("visible");
})


cartProductList.addEventListener("click", () => {
 productsList.classList.remove("visible");
 nav.classList.add("visible");
})


function scrollToTop() {

 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 
}


function closeNav(i) {
  nav.classList.remove("visible");
  body.classList.remove("stop");
  body.classList.add("moving");

  ctnCard = document.querySelectorAll(".container_card")[i].classList.add("violet_active");

  setTimeout(function(){
   document.querySelectorAll(".container_card")[i].classList.remove('violet_active');
   console.log("HHR");
  }, 10000);
}


function closeList() {
 productsList.classList.remove("visible");
 body.classList.remove("stop");
 body.classList.add("moving");
}

const positionBtnList = document.querySelector(".menu-invertion-btns");
const ctnProductList = document.querySelectorAll(".list-products-options li");
const ctnOrderCounter = document.querySelectorAll(".container-name-counter");
const ctnStockCounter = document.querySelectorAll(".container-stock-counter");

const ctnOrderNameCounter = document.querySelectorAll(".container-name-counter p")
const ctnStockNameCounter = document.querySelectorAll(".container-stock-counter p")


for (let i = 0; i < ctnProductList.length; i++) {
positionBtnList.addEventListener('click', () => {
   ctnProductList[i].classList.toggle("inverterBtnsList");
   ctnOrderNameCounter[i].classList.toggle("inverteNamesBtnsList");
   ctnStockNameCounter[i].classList.toggle("inverteNamesBtnsList");

   let contains = {
    ctnProductList: ctnProductList[i].classList.contains("inverterBtnsList"),
   }

   console.log('contains: ', contains.ctnProductList);

   let arr = contains.ctnProductList;

   localStorage.setItem("arr", JSON.stringify(arr)); 

  })
}


const ctnCards = document.querySelectorAll(".container_card");
const btnsLocks = document.querySelectorAll(".btn_blocking");
const ctnOpacy = document.querySelectorAll(".ctn-opacy");
const btnPlusStock = document.querySelectorAll(".buttonIncrement_stock");
const lockOpen = document.querySelectorAll(".lock-open");
const lockClose = document.querySelectorAll(".lock-close");
const btnOff = document.querySelectorAll(".botton_off");

const cartelQuestionLock = document.querySelectorAll(".cartelQuestionLock"); 
const ctnCristalTextLocking = document.querySelectorAll(".ctn-cristal-text-locking"); 
const ctnLockingLocking = document.querySelectorAll(".ctn_product_locking");
const productLockingText = document.querySelectorAll(".product_locking");

const ctnQuestionDesblock = document.querySelectorAll(".ctn-question_desblock"); 
const questionDesblock = document.querySelectorAll(".question_desblock"); 



for (let i = 0; i < ctnCards.length; i++) {
  btnsLocks[i].addEventListener('click', () => {

    let allOrder = parseInt(document.querySelectorAll(".num_order_counter")[i].value);
    let allStock = parseInt(document.querySelectorAll(".num_stock_counter")[i].value);

    ctnOpacy[i].classList.toggle("btns-blocking");
    btnPlusStock[i].classList.toggle("noTouch");
    lockOpen[i].classList.toggle("hidden");
    lockClose[i].classList.toggle("visible");
    console.log('holis ', btnOff[i].toggleAttribute("disabled"));
    console.log('btnsLocks card: ', [i])

    document.querySelectorAll(".ctn-cristal-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
    document.querySelectorAll(".cartel-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
    document.querySelectorAll(".cartel-question_yes_no")[i].classList.remove('questionVisible');
    document.querySelectorAll(".ctn_of_btn_confirmation")[i].classList.remove('btnVisible');
    document.querySelectorAll(".yes_confirmation")[i].classList.remove('activo');
    document.querySelectorAll(".no_confirmation")[i].classList.remove('activo');

    if( allOrder === 0 &&  allStock >= 0 ) {
      ctnLockingLocking[i].classList.add("yellow");
    } if( allOrder > 0 && allStock >= 0 ) {
      ctnLockingLocking[i].classList.add("green");
    }

    productLockingText[i].classList.add("visible");
    ctnCristalTextLocking[i].classList.add("cartelConfirmationActivo");
    btnsLocks[i].classList.add("btnRed");  // btnGOLD
    // ctnQuestionDesblock.classList.add("visible"); 

    if (lockOpen[i].classList.contains("hidden") === false){

      cartelQuestionLock[i].classList.remove("cartelVisible");
      ctnLockingLocking[i].classList.remove("visible");
      productLockingText[i].classList.remove("visible");
      ctnCristalTextLocking[i].classList.remove("cartelConfirmationActivo");
      ctnQuestionDesblock[i].classList.remove("visible"); 
      questionDesblock[i].classList.remove("visible"); 
      btnsLocks[i].classList.remove("btnRed"); 
      btnsLocks[i].classList.remove("pulseEffect_gold"); 
      ctnLockingLocking[i].classList.remove("yellow");
      ctnLockingLocking[i].classList.remove("green");

    }

  })
}


for (let i = 0; i < ctnCards.length; i++) {
  ctnOpacy[i].addEventListener('click', () => {

    hola = ctnOpacy[i].classList.contains("btns-blocking")
    if(hola === true){
      cartelQuestionLock[i].classList.add("cartelVisible");
      ctnQuestionDesblock[i].classList.add("visible"); 
      btnsLocks[i].classList.add("pulseEffect_gold"); 
      questionDesblock[i].classList.add("visible");
    } 
    console.log('ctnOpacy: ', hola)
  })
}


const allBtnOff = document.querySelectorAll('.botton_off');

for (let i = 0; i < allBtnOff.length; i++) {
   allBtnOff[i].addEventListener('click', function() {
      console.log('soy allBtnOff: ' + allBtnOff[i].classList.contains('btn_off_red'));

      let btnContainRed = allBtnOff[i].classList.contains('btn_off_red');
      const cartelQuestion = document.querySelectorAll('.cartel-off_question')[i].classList.contains('visibleCartel_btnOff');


     if ( btnContainRed === true && cartelQuestion === false && ctnOpacy[i].classList.contains("btns-blocking") === false ){
      document.querySelectorAll(".ctn-cristal-off-confirmation")[i].classList.add('cartelConfirmationActivo');
      document.querySelectorAll(".cartel-off-confirmation")[i].classList.add('cartelConfirmationActivo');
      document.querySelectorAll(".cartel-question_yes_no")[i].classList.add('questionVisible');
      document.querySelectorAll(".ctn_of_btn_confirmation")[i].classList.add('btnVisible');
      document.querySelectorAll(".yes_confirmation")[i].classList.add('activo');
      document.querySelectorAll(".no_confirmation")[i].classList.add('activo');
    } if ( btnContainRed === true && cartelQuestion === true && ctnOpacy[i].classList.contains("btns-blocking") === false ) {
      document.querySelectorAll(".ctn-off-confirmation_10")[i].classList.add('cartelVisible');
      document.querySelectorAll(".off-confirmation_cartel")[i].classList.add('cartelConfirmationActivo'); 
      document.querySelectorAll(".ctn_btn_confirmation")[i].classList.add('btnVisible'); 
      document.querySelectorAll(".question_yes_no")[i].classList.add('questionVisible'); 
      document.querySelectorAll(".yes_reset")[i].classList.add('activo');
      document.querySelectorAll(".no_reset")[i].classList.add('activo');
    }
    
  })
}

// Variable de arreglos de Productos
let allProducts = [];


function yesResetCard(i) {

  const cartelOff = document.querySelectorAll('.cartel-off_question')[i].classList.contains('visibleCartel_btnOff');
  
      ctnLockingLocking[i].classList.remove("yellow");
      ctnCristalTextLocking[i].classList.remove("cartelConfirmationActivo");
      btnsLocks[i].classList.remove("btnRed")
      productLockingText[i].classList.remove("visible");
      ctnLockingLocking[i].classList.remove("green");
      ctnOpacy[i].classList.remove("btns-blocking"); // toggle
      lockOpen[i].classList.remove("hidden"); //  toggle
      lockClose[i].classList.remove("visible");  //  toggle


  console.log('cartelOff ', cartelOff)

  document.querySelectorAll(".container_product_stock")[i].classList.remove('noComplete');

  document.querySelectorAll(".styleBtnList")[i].classList.remove('active_red_list');    
  document.querySelectorAll(".cartel-falta-completar")[i].classList.remove('visibleCartel');
  document.querySelectorAll(".falta-completar")[i].classList.remove('textProximity');
  document.querySelectorAll(".num_stock_counter")[i].classList.remove('visibleCounter');
  document.querySelectorAll(".name_img_price")[i].classList.remove('activo_red_card'); 
  document.querySelectorAll(".ctn-title-btn")[i].classList.remove('red_active');
  document.querySelectorAll(".product_price")[i].classList.remove('active-red');
  document.querySelectorAll(".ctn-name_stock")[i].classList.remove('red_active');   //// STOCK NAME

  document.querySelectorAll(".num_stock_counter")[i].classList.remove('visibleCounter');
  allStock = document.querySelectorAll(".num_stock_counter")[i].value = -1;
  allOrder = document.querySelectorAll(".num_order_counter")[i].value = 0;
  document.querySelectorAll(".num_stock_clon")[i].value = allStock === -1 ? "-" : allStock;
  document.querySelectorAll(".num_order_clon")[i].value = allOrder;

  document.querySelectorAll(".name_img_price")[i].classList.remove('activo_green_card');
  document.querySelectorAll(".styleBtnList")[i].classList.remove('active_green_list');
  document.querySelectorAll(".container_card")[i].classList.remove('background-green');
  document.querySelectorAll(".cartel-stock-order")[i].classList.remove('cartelGreen');
  document.querySelectorAll(".ctn-title-btn")[i].classList.remove('green_active');
  document.querySelectorAll(".product_price")[i].classList.remove('active-green');
  document.querySelectorAll(".ctn-name_stock")[i].classList.remove('green_active');   //// STOCK NAME
  document.querySelectorAll(".ctn-name_order")[i].classList.remove('order_green_active');   //// ORDER NAME
  
  document.querySelectorAll(".styleBtnList")[i].classList.remove('active_yellow_list');
  document.querySelectorAll(".name_img_price")[i].classList.remove('activo_yellow_card');
  document.querySelectorAll(".container_card")[i].classList.remove('background-yellow');
  document.querySelectorAll(".solo-stock")[i].classList.remove('cartelYellow')
  document.querySelectorAll(".product_price")[i].classList.remove('active-yellow');
  document.querySelectorAll(".ctn-title-btn")[i].classList.remove('yellow_active');
  document.querySelectorAll(".ctn-name_stock")[i].classList.remove('yellow_active');   //// STOCK NAME

  document.querySelectorAll(".name_img_price")[i].classList.remove('shadow_desactive'); ///////////////////

  document.querySelectorAll(".buttonIncrement_stock")[i].classList.remove('noTransformationButtonPlus'); // botton GREEN PLUS
  document.querySelectorAll(".on_button_stock")[i].classList.remove('noVisibleOn'); // botton ON INCREMENT STOCK           //////////////
  document.querySelectorAll(".plus_button")[i].classList.remove('simbol_plus_visible'); // botton ON INCREMENT STOCK   ////////////

  document.querySelectorAll(".botton_off")[i].classList.remove('btn_off_red'); // BOTTON RED OFF   ////////////
  document.querySelectorAll(".cartel-start")[i].classList.remove('on_start');   //////// ON START

  document.querySelectorAll(".ctn-cristal-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
  document.querySelectorAll(".cartel-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
  document.querySelectorAll(".cartel-question_yes_no")[i].classList.remove('questionVisible');
  document.querySelectorAll(".ctn_of_btn_confirmation")[i].classList.remove('btnVisible');
  document.querySelectorAll(".yes_confirmation")[i].classList.remove('activo');
  document.querySelectorAll(".no_confirmation")[i].classList.remove('activo');
  document.querySelectorAll(".yes_reset")[i].classList.remove('activo');
  document.querySelectorAll(".no_reset")[i].classList.remove('activo');

  if( cartelOff === true ) {
    document.querySelectorAll(".cartel-plus_green")[i].classList.remove('visibleCartel_btnPlus');    /// triangulo rojo button GREEN
    document.querySelectorAll(".cartel-question_green")[i].classList.remove('textCartelQuestionVisible');    /// triangulo rojo button GREEN  
    document.querySelectorAll(".cartel-off_question")[i].classList.remove('visibleCartel_btnOff');    /// triangulo rojo button GREEN
    document.querySelectorAll(".cartel-question_red")[i].classList.remove('textCartelQuestionVisible');    /// triangulo rojo button GREEN
    document.querySelectorAll(".father_ctn-order")[i].classList.remove('contentBetween');    /// SEGUNDA MITAD CONTENT BETWEEN
    document.querySelectorAll("#emoji-confused")[i].classList.remove('simbolVisible');    /// Emoji face simbol
    document.querySelectorAll(".ctn-buttonPlusGreen")[i].classList.remove('opacyPlusActive');    /// opacyPlusActive 
    document.querySelectorAll(".ctn-segunda-mitad")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
    document.querySelectorAll(".container_product_order")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
    document.querySelectorAll(".container_product_stock")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
    document.querySelectorAll(".botton_off")[i].classList.remove('opacyActive');    /// .botton_off opacyActive
    document.querySelectorAll(".botton_off")[i].classList.remove('pulseEffect');    /// triangulo rojo button GREEN
    document.querySelectorAll(".buttonIncrement_stock")[i].classList.remove('pulseEffect_green');    /// triangulo rojo button GREEN

    document.querySelectorAll(".ctn-off-confirmation_10")[i].classList.remove('cartelVisible');
    document.querySelectorAll(".off-confirmation_cartel")[i].classList.remove('cartelConfirmationActivo'); 
    document.querySelectorAll(".ctn_btn_confirmation")[i].classList.remove('btnVisible'); 
    document.querySelectorAll(".question_yes_no")[i].classList.remove('questionVisible'); 
    document.querySelectorAll(".ctn-tittle-rotate")[i].classList.remove('falta-completar-stock');    /// Rotacion de Name Product
    document.querySelectorAll(".title-falta-completar")[i].classList.remove('titleVisible');    /// Elevation de Name Product
  }  

 

  productName = document.querySelectorAll('.product_name')[i].textContent;

  console.log('productName ',  productName);

    console.log('cartProduct', allProducts);
  

  if (allProducts.length === 0) {
    totalOfProducts = 0;
    document.querySelector(".total-pagar").innerHTML = "$" + totalOfProducts;
    document.querySelector(".total-pagar_inNav").innerHTML = "$" + totalOfProducts;
  }
 
  
      document.querySelectorAll(".ctn-blocking-card").forEach(obj=>obj.classList.remove("active"));
      document.querySelectorAll(".ctn-cartel-aviso").forEach(obj=>obj.classList.add("noActive"));

  countProducts.innerHTML = allProducts.length;
  countProductFooter.innerHTML = allProducts.length;

  countStock.innerHTML = allProducts.filter(a => a.order === 0 ).length;
  countOrder.innerHTML = allProducts.filter(a => a.order > 0 ).length;

  showHTML();
}




function closeCartel(i) {
  const cartelOff = document.querySelectorAll('.cartel-off_question')[i].classList.contains('visibleCartel_btnOff');

  document.querySelectorAll(".ctn-cristal-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
  document.querySelectorAll(".cartel-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
  document.querySelectorAll(".cartel-question_yes_no")[i].classList.remove('questionVisible');
  document.querySelectorAll(".ctn_of_btn_confirmation")[i].classList.remove('btnVisible');
  document.querySelectorAll(".yes_confirmation")[i].classList.remove('activo');
  document.querySelectorAll(".no_confirmation")[i].classList.remove('activo');
  document.querySelectorAll(".yes_reset")[i].classList.remove('activo');
  document.querySelectorAll(".no_reset")[i].classList.remove('activo');

  if( cartelOff === true ) {
    document.querySelectorAll(".ctn-off-confirmation_10")[i].classList.remove('cartelVisible');
    document.querySelectorAll(".off-confirmation_cartel")[i].classList.remove('cartelConfirmationActivo'); 
    document.querySelectorAll(".ctn_btn_confirmation")[i].classList.remove('btnVisible'); 
    document.querySelectorAll(".question_yes_no")[i].classList.remove('questionVisible'); 
   
  }
}


const allCards = document.querySelectorAll(".product_card");
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", function() {
    console.log('Item numero ' + i + ' del array');
      
    let allOrder = parseInt(document.querySelectorAll(".num_order_counter")[i].value);
    let allStock = parseInt(document.querySelectorAll(".num_stock_counter")[i].value);
    allOrderClon =  document.querySelectorAll(".num_order_clon")[i].value = allOrder;
    allStockClon =  document.querySelectorAll(".num_stock_clon")[i].value = allStock === -1 ? "-" : allStock;

    const cartelStart = document.querySelectorAll('.cartel-start')[i].classList.contains('on_start');

    if ( allOrder === 0 &&  allStock >= 0 ) { // active mode YELLOW
      document.querySelectorAll(".name_img_price")[i].classList.remove('activo_green_card');
      document.querySelectorAll(".styleBtnList")[i].classList.remove('active_green_list');
      document.querySelectorAll(".container_card")[i].classList.remove('background-green');
      document.querySelectorAll(".cartel-stock-order")[i].classList.remove('cartelGreen');
      document.querySelectorAll(".ctn-title-btn")[i].classList.remove('green_active');
      document.querySelectorAll(".product_price")[i].classList.remove('active-green');
      document.querySelectorAll(".ctn-name_stock")[i].classList.remove('green_active');   //// STOCK NAME
      document.querySelectorAll(".ctn-name_order")[i].classList.remove('order_green_active');   //// ORDER NAME

      document.querySelectorAll(".name_img_price")[i].classList.add('activo_yellow_card');
      document.querySelectorAll(".styleBtnList")[i].classList.add('active_yellow_list');
      document.querySelectorAll(".container_card")[i].classList.add('background-yellow');
      document.querySelectorAll(".solo-stock")[i].classList.add('cartelYellow');
      document.querySelectorAll(".product_price")[i].classList.add('active-yellow');
      document.querySelectorAll(".ctn-title-btn")[i].classList.add('yellow_active');
      document.querySelectorAll(".ctn-name_stock")[i].classList.add('yellow_active'); //// STOCK NAME
  
      document.querySelectorAll(".name_img_price")[i].classList.add('shadow_desactive');
      document.querySelectorAll(".on_button_stock")[i].classList.add('noVisibleOn'); // botton ON INCREMENT STOCK
      document.querySelectorAll(".buttonIncrement_stock")[i].classList.add('noTransformationButtonPlus');
      document.querySelectorAll(".plus_button")[i].classList.add('simbol_plus_visible'); // botton ON INCREMENT STOCK
  
    
      document.querySelectorAll(".botton_off")[i].classList.add('btn_off_red'); // BOTTON RED OFF   ////////////
      document.querySelectorAll(".cartel-start")[i].classList.add('on_start'); //////// ON START
  
      document.querySelectorAll(".num_stock_counter")[i].classList.add('visibleCounter');

    } if( allOrder > 0 && allStock >= 0 ) { // active mode GREEN
      document.querySelectorAll(".cartel-start")[i].classList.add('on_start'); //////// ON START
      document.querySelectorAll(".plus_button")[i].classList.add('simbol_plus_visible'); // botton ON INCREMENT STOCK


      document.querySelectorAll(".name_img_price")[i].classList.add('activo_green_card');
      document.querySelectorAll(".styleBtnList")[i].classList.add('active_green_list');
      document.querySelectorAll(".container_card")[i].classList.add('background-green'); /* recien */
      document.querySelectorAll(".cartel-stock-order")[i].classList.add('cartelGreen');
      document.querySelectorAll(".ctn-title-btn")[i].classList.add('green_active');
      document.querySelectorAll(".product_price")[i].classList.add('active-green');
      document.querySelectorAll(".ctn-name_stock")[i].classList.add('green_active');   //// STOCK NAME
      document.querySelectorAll(".ctn-name_order")[i].classList.add('order_green_active');   //// ORDER NAME

      document.querySelectorAll(".styleBtnList")[i].classList.remove('active_yellow_list');
      document.querySelectorAll(".name_img_price")[i].classList.remove('activo_yellow_card');
      document.querySelectorAll(".container_card")[i].classList.remove('background-yellow');
      document.querySelectorAll(".solo-stock")[i].classList.remove('cartelYellow');
      document.querySelectorAll(".product_price")[i].classList.remove('active-yellow');
      document.querySelectorAll(".ctn-title-btn")[i].classList.remove('yellow_active');
      document.querySelectorAll(".ctn-name_stock")[i].classList.remove('yellow_active');   //// STOCK NAME

    } if( allOrder >= 0 && allStock >= 0 ) {   // desactive carteles con btn green plus 
      document.querySelectorAll(".name_img_price")[i].classList.add('shadow_desactive');
      document.querySelectorAll(".styleBtnList")[i].classList.remove('active_red_list');
      document.querySelectorAll(".ctn-title-btn")[i].classList.remove('red_active');
      document.querySelectorAll(".product_price")[i].classList.remove('active-red');
      document.querySelectorAll(".ctn-name_stock")[i].classList.remove('red_active');   //// STOCK NAME
      document.querySelectorAll(".container_product_stock")[i].classList.remove('noComplete')
      document.querySelectorAll(".cartel-falta-completar")[i].classList.remove('visibleCartel');
      document.querySelectorAll(".falta-completar")[i].classList.remove('textProximity');
      document.querySelectorAll(".name_img_price")[i].classList.remove('activo_red_card');
     
      document.querySelectorAll(".buttonIncrement_stock")[i].classList.add('noTransformationButtonPlus'); // botton GREEN PLUS
     
      document.querySelectorAll(".cartel-plus_green")[i].classList.remove('visibleCartel_btnPlus');    /// triangulo rojo button GREEN
      document.querySelectorAll(".cartel-question_green")[i].classList.remove('textCartelQuestionVisible');    /// triangulo rojo button GREEN
       
      document.querySelectorAll("#emoji-confused")[i].classList.remove('simbolVisible');    /// Emoji face simbol
     
      document.querySelectorAll(".cartel-off_question")[i].classList.remove('visibleCartel_btnOff');    /// triangulo rojo button GREEN
      document.querySelectorAll(".cartel-question_red")[i].classList.remove('textCartelQuestionVisible');    /// triangulo rojo button GREEN
     
      document.querySelectorAll(".ctn-tittle-rotate")[i].classList.remove('falta-completar-stock');    /// Rotacion de Name Product
      document.querySelectorAll(".title-falta-completar")[i].classList.remove('titleVisible');    /// Elevation de Name Product
        
     
      document.querySelectorAll(".botton_off")[i].classList.remove('pulseEffect');    /// triangulo rojo button GREEN
      document.querySelectorAll(".buttonIncrement_stock")[i].classList.remove('pulseEffect_green');    /// triangulo rojo button GREEN
       
     
      document.querySelectorAll(".father_ctn-order")[i].classList.remove('contentBetween');    /// SEGUNDA MITAD CONTENT BETWEEN
  
      document.querySelectorAll(".ctn-buttonPlusGreen")[i].classList.remove('opacyPlusActive');    /// opacyPlusActive 
      document.querySelectorAll(".ctn-segunda-mitad")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
      document.querySelectorAll(".container_product_order")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
      document.querySelectorAll(".container_product_stock")[i].classList.remove('opacyActive');    /// .ctn-segunda-mitad opacyActive 
      document.querySelectorAll(".botton_off")[i].classList.remove('opacyActive');    /// .botton_off opacyActive
       
      document.querySelectorAll(".name_img_price")[i].classList.add('shadow_desactive');
     
      document.querySelectorAll(".plus_button")[i].classList.remove('simbol_plus_invisible'); // botton ON INCREMENT STOCK
      document.querySelectorAll(".on_button_stock")[i].classList.add('noVisibleOn'); // botton ON INCREMENT STOCK
      document.querySelectorAll(".buttonIncrement_stock")[i].classList.add('noTransformationButtonPlus');
     
      document.querySelectorAll(".botton_off")[i].classList.add('btn_off_red'); // BOTTON RED OFF   //////////// 
      document.querySelectorAll(".num_stock_counter")[i].classList.add('visibleCounter');

      document.querySelectorAll(".ctn-off-confirmation_10")[i].classList.remove('cartelVisible');
      document.querySelectorAll(".off-confirmation_cartel")[i].classList.remove('cartelConfirmationActivo'); 
      document.querySelectorAll(".ctn_btn_confirmation")[i].classList.remove('btnVisible'); 
      document.querySelectorAll(".question_yes_no")[i].classList.remove('questionVisible'); 
      document.querySelectorAll(".yes_reset")[i].classList.remove('activo');
      document.querySelectorAll(".no_reset")[i].classList.remove('activo');      


        btnGreenPlus = document.querySelectorAll(".buttonIncrement_stock")[i];

        btnGreenPlus.addEventListener("click", function() {
            document.querySelectorAll(".ctn-blocking-card").forEach(obj=>obj.classList.remove("active"));
            document.querySelectorAll(".ctn-cartel-aviso").forEach(obj=>obj.classList.add("noActive"));
        })


    } if( allOrder >= 0  &&  allStock === -1  && cartelStart === true ) {  // active CARTELES FALTA COMPLETAR STOCK 
        document.querySelectorAll(".container_product_stock")[i].classList.add('noComplete');
        document.querySelectorAll(".cartel-falta-completar")[i].classList.add('visibleCartel');
        document.querySelectorAll(".falta-completar")[i].classList.add('textProximity');
        document.querySelectorAll(".name_img_price")[i].classList.add('activo_red_card');               
        document.querySelectorAll(".styleBtnList")[i].classList.add('active_red_list');   
        document.querySelectorAll(".ctn-title-btn")[i].classList.add('red_active');
        document.querySelectorAll(".product_price")[i].classList.add('active-red');
        document.querySelectorAll(".ctn-name_stock")[i].classList.add('red_active');   //// STOCK NAME
        document.querySelectorAll(".ctn-name_stock")[i].classList.remove('yellow_active');   //// STOCK NAME
     
        document.querySelectorAll(".cartel-plus_green")[i].classList.add('visibleCartel_btnPlus');    /// triangulo rojo button GREEN
        document.querySelectorAll(".cartel-question_green")[i].classList.add('textCartelQuestionVisible');    /// triangulo rojo button GREEN
     
        document.querySelectorAll("#emoji-confused")[i].classList.add('simbolVisible');    /// Emoji face simbol
     
        document.querySelectorAll(".num_stock_counter")[i].classList.remove('visibleCounter');
        document.querySelectorAll(".num_stock_counter")[i].value = -1;
      
        document.querySelectorAll(".cartel-off_question")[i].classList.add('visibleCartel_btnOff');    /// triangulo rojo button GREEN
        document.querySelectorAll(".cartel-question_red")[i].classList.add('textCartelQuestionVisible');    /// triangulo rojo button GREEN
     
        document.querySelectorAll(".ctn-tittle-rotate")[i].classList.add('falta-completar-stock');    /// Rotacion de Name Product
        document.querySelectorAll(".title-falta-completar")[i].classList.add('titleVisible');    /// Elevation de Name Product
       
        document.querySelectorAll(".botton_off")[i].classList.add('pulseEffect');    /// triangulo rojo button GREEN
        document.querySelectorAll(".buttonIncrement_stock")[i].classList.add('pulseEffect_green');    /// triangulo rojo button GREEN
     
        document.querySelectorAll(".father_ctn-order")[i].classList.add('contentBetween');    /// SEGUNDA MITAD CONTENT BETWEEN
     
        document.querySelectorAll(".ctn-buttonPlusGreen")[i].classList.add('opacyPlusActive');    /// opacyPlusActive 
        document.querySelectorAll(".ctn-segunda-mitad")[i].classList.add('opacyActive');    /// .ctn-segunda-mitad opacyActive 
        document.querySelectorAll(".container_product_order")[i].classList.add('opacyActive');    /// .ctn-segunda-mitad opacyActive 
        document.querySelectorAll(".container_product_stock")[i].classList.add('opacyActive');    /// .ctn-segunda-mitad opacyActive
        document.querySelectorAll(".botton_off")[i].classList.add('opacyActive');    /// .botton_off opacyActive
     
        document.querySelectorAll(".cartel-start")[i].classList.add('on_start');   //////// ON START DESAPARECE
      
        document.querySelectorAll(".cartel-falta-completar")[i].classList.add('visibleCartel');

        document.querySelectorAll(".ctn-cristal-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
        document.querySelectorAll(".cartel-off-confirmation")[i].classList.remove('cartelConfirmationActivo');
        document.querySelectorAll(".cartel-question_yes_no")[i].classList.remove('questionVisible');
        document.querySelectorAll(".ctn_of_btn_confirmation")[i].classList.remove('btnVisible');
        document.querySelectorAll(".yes_confirmation")[i].classList.remove('activo');
        document.querySelectorAll(".no_confirmation")[i].classList.remove('activo');
     
        document.querySelectorAll(".name_img_price")[i].classList.remove('activo_green_card'); 
        document.querySelectorAll(".styleBtnList")[i].classList.remove('active_green_list');   
        document.querySelectorAll(".container_card")[i].classList.remove('background-green');
        document.querySelectorAll(".cartel-stock-order")[i].classList.remove('cartelGreen');
        document.querySelectorAll(".ctn-title-btn")[i].classList.remove('green_active');
        document.querySelectorAll(".product_price")[i].classList.remove('active-green');
        document.querySelectorAll(".ctn-name_stock")[i].classList.remove('green_active');   //// STOCK NAME
        document.querySelectorAll(".ctn-name_order")[i].classList.remove('order_green_active');   //// ORDER NAME

        document.querySelectorAll(".name_img_price")[i].classList.remove('activo_yellow_card');
        document.querySelectorAll(".styleBtnList")[i].classList.remove('active_yellow_list');
        document.querySelectorAll(".container_card")[i].classList.remove('background-yellow');
        document.querySelectorAll(".solo-stock")[i].classList.remove('cartelYellow');
        document.querySelectorAll(".ctn-title-btn")[i].classList.remove('yellow_active');
        document.querySelectorAll(".product_price")[i].classList.remove('active-yellow');
        document.querySelectorAll(".ctn-name_stock")[i].classList.remove('yellow_active'); //// STOCK NAME
     
        document.querySelectorAll(".name_img_price")[i].classList.remove('shadow_desactive');               
     
        document.querySelectorAll(".buttonIncrement_stock")[i].classList.remove('noTransformationButtonPlus'); // botton GREEN PLUS
        document.querySelectorAll(".on_button_stock")[i].classList.add('noVisibleOn'); // botton ON INCREMENT STOCK
        document.querySelectorAll(".plus_button")[i].classList.add('simbol_plus_visible'); // botton ON INCREMENT STOCK
     
        document.querySelectorAll(".botton_off")[i].classList.add('btn_off_red'); // BOTTON RED OFF   ////////////
      
        document.querySelectorAll(".name_img_price")[i].classList.remove('activo_yellow_card');
        document.querySelectorAll(".name_img_price")[i].classList.add('activo_red_card'); 


        let nameProduct = document.querySelectorAll(".product_name")[i].textContent;
        let priceProduct = document.querySelectorAll(".price")[i].textContent;

        console.log('priceProduct ', priceProduct)
        
        let cardId = document.querySelectorAll(".product_card")[i].id;         
        
        const infoProduct = {
          card: cardId,
          order: allOrder,
          stock: allStock,
          title: nameProduct,
          price: priceProduct,
          // total: 0,
          // position: [i],
        }

        const exits  = allProducts.some(product => product.title === infoProduct.title)

        console.log('Que tengo ', exits);

        if (exits ) {

          const products = allProducts.map(product => {

            if (product.title === infoProduct.title) {
              product.order = infoProduct.order;
              product.stock =	infoProduct.stock;
              return product;
            } else {
              return product;
            }
          });
          
          allProducts = [...products];
        } else {
          allProducts = [...allProducts, infoProduct];
          
        }        
  
        countProducts.innerHTML = allProducts.length;


        console.log("allProducts ", allProducts)

      showHTML(infoProduct) 

    }


    green = document.querySelectorAll(".name_img_price")[i].classList.contains('activo_green_card');
    red = document.querySelectorAll(".name_img_price")[i].classList.contains('activo_red_card');
    yellow = document.querySelectorAll(".name_img_price")[i].classList.contains('activo_yellow_card');


    if( green  === false && red === false  && yellow === false ) {

      console.log('estoy apagado')

      productName = document.querySelectorAll('.product_name')[i].textContent;

      console.log('productName ',  productName);

        console.log('cartProduct', allProducts);
      

      allProducts = allProducts.filter(
        product =>  product.title !== productName,
      )

        countProducts.innerHTML = allProducts.length;

        countStock.innerHTML = allProducts.filter(a => a.order === 0 ).length;
        countOrder.innerHTML = allProducts.filter(a => a.order > 0 ).length;
      
      showHTML();
    }


    let cartEmpty = document.querySelector(".ctn-cartel-cart-empty").classList.contains("hidden");
      

    if (allProducts.length === 0) {
      totalOfProducts = 0;
      document.querySelector(".total-pagar").innerHTML = "$" + totalOfProducts;
      document.querySelector(".total-pagar_inNav").innerHTML = "$" + totalOfProducts;

      document.querySelector("#count-product").innerHTML =  allProducts.length;
      
     
      showHTML();
    } else {
      document.querySelector("#count-product").innerHTML =  allProducts.length;
      showHTML();
    }

  })
}


const rowProduct = document.querySelector('.row-product');
const cartInfo = document.querySelector('.cart-product');

const converWsp = document.querySelector('.converMessage')

const converMessageWsp = document.querySelector('.converMessageWsp')


// Lista de todos los contenedores de productos
let productsLista = document.querySelector(".container_cards");


let valorTotal = parseInt(document.querySelector('.total-pagar').textContent);

let countProducts = document.querySelector('#contador-productos');
let countStock = document.querySelector('#btnArrowDown');
let countOrder = document.querySelector('#btnArrowUp');

let countProductFooter = document.querySelector('#count-product');


for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", function() {

    red = document.querySelectorAll(".name_img_price")[i].classList.contains('activo_red_card')

    if (allCards[i].querySelector(".num_stock_counter").value >= 0 ) { 

        console.log('soy target ', allCards[i]);
        const products = allCards[i];

        let nameProduct = document.querySelectorAll(".product_name")[i].textContent;
        let priceProduct = document.querySelectorAll(".price")[i].textContent;

        let allOrder = parseInt(document.querySelectorAll(".num_order_counter")[i].value);
        let allStock = parseInt(document.querySelectorAll(".num_stock_counter")[i].value);
        let yellowNameProduct = "ctn-name-product-and-close";
        let greenNameProduct = "ctn-name-product-and-close_green";
        let redNameProduct = "ctn-name-product-and-close_red";

        let borrarAndModifiedYellow = "ctn-btns-borrar-and-modified_yellow";
        let borrarAndModifiedGreen = "ctn-btns-borrar-and-modified_green";
        let borrarAndModifiedRed = "ctn-btns-borrar-and-modified_red";

        let namesProductsBlack = "name-product";
        let namesProductsWhite = "name-product-white";
    
        let cardId = document.querySelectorAll(".product_card")[i].id;   
        

          console.log( 'hp ', typeof priceProduct )
          console.log( 'totalPagar ', typeof valorTotal, valorTotal )
    
        
        const infoProduct = {
          quantity: 1,
          card: cardId,
          order: allOrder,
          stock: allStock,
          title: nameProduct,
          colorTitleBlack: namesProductsBlack,
          colorTitleWhite: namesProductsWhite,
          price: priceProduct,
          nameYellow: yellowNameProduct,
          nameGreen: greenNameProduct,
          nameRed: redNameProduct,

          ctnBtnsYellow: borrarAndModifiedYellow,
          ctnBtnsGreen: borrarAndModifiedGreen,
          ctnBtnsRed: borrarAndModifiedRed,

          totalOfProducts: valorTotal,
          total: 0,
          position: [i],
        }

        console.log(infoProduct.order, infoProduct.stock)

        console.log('infoProduct.totalOfProducts ', infoProduct.totalOfProducts)
      
        const exits  = allProducts.some(product => product.title === infoProduct.title)

        console.log('Que tengo ', exits);

        if (exits ) {

          const products = allProducts.map(product => {

            if (product.title === infoProduct.title) {
              product.quantity++,
              product.order = infoProduct.order;
              product.stock =	infoProduct.stock;
              return product;
            } else {
              return product;
            }
          });
          
          allProducts = [...products];
        } else {
          allProducts = [...allProducts, infoProduct];
          
        }

        countProducts.innerHTML = allProducts.length;
        countProductFooter.innerHTML = allProducts.length;

        console.log("allProducts ", allProducts)

        console.log("allProducts.ORDER ", allProducts.map(product => { return product.order }));

        console.log("allProducts.ORDER FILTER", allProducts.filter(a => a.order === 0 ).length)

        countStock.innerHTML = allProducts.filter(a => a.order === 0 ).length;
        countOrder.innerHTML = allProducts.filter(a => a.order > 0 ).length;

        console.log("totalPagar ", typeof valorTotal, valorTotal)

        showHTML(infoProduct);
      
      console.log('Soy allProducts ', allProducts);

    }  if( red === true) {

      if( !document.querySelector(".ctn-blocking-card").classList.contains('active')){

          console.log(document.querySelectorAll(".product_name")[i].textContent);
          nameProductError = document.querySelectorAll(".product_name")[i].textContent;
          idProduct = document.querySelectorAll(".product_card")[i].id;

          console.log('ids', document.querySelectorAll(".product_card")[i].id);
          for (var x = 0; x < allCards.length ; x++) {
            if (x == i) {
                continue;
            } else {
                document.querySelectorAll(".ctn-blocking-card")[x].classList.add('active');

                document.querySelectorAll(".ctn-blocking-card")[x].innerHTML +=  `
          
                <div class="ctn-cartel-aviso">
                  <div class="cartel-aviso">
                    Falta reportar cantidad de STOCK en el producto: <br> 
                    <span class="name-product-error">${nameProductError}</span>
                  </div>
                  <a class="btn-to-product-error" href="#${idProduct}">Ir al PRODUCTO</a>
                </div>
              `

            }              
		  
          }
         
      }

           // console.log("allProducts.STOCK ", allProducts.map(product => { return product.stock, product.position }));
          console.log("allProducts.STOCK ", allProducts.map((function (product) { if(product.stock === -1){ return product.position }})));

    }    
  })
}




function funcion2(i) {


    if(document.querySelectorAll('.cart-product')[i]) {


      cartProduct = document.querySelectorAll('.cart-product')[i].querySelector("a").getAttribute("href").slice(1);


        allProducts = allProducts.filter(
            product =>  product.card !== cartProduct,
        )
        

        console.log(allProducts);
        countProducts.innerHTML = allProducts.length;
        countProductFooter.innerHTML = allProducts.length;

        countStock.innerHTML = allProducts.filter(a => a.order === 0 ).length;
        countOrder.innerHTML = allProducts.filter(a => a.order > 0 ).length;

        if (allProducts.length === 0) {
          totalOfProducts = 0;

          document.querySelector(".total-pagar").innerHTML = "$" + totalOfProducts;
          document.querySelector(".total-pagar_inNav").innerHTML = "$" + totalOfProducts;
        }
      
        showHTML();
    }

     console.log('soy position ', i);
}

function yesDeleteInfoCard(i, e) {
  console.log('Objetooo', i, e);
  yesResetCard(i); 
  funcion2(e);
  document.querySelector(".ctn-delete-info__card").classList.remove("visible");
}


function formatNumber(num) {
  if ( num !== 0 ) {
  document.querySelector(".total-pagar_inNav").classList.add('addPadding');
  } if ( num === 0 ) {
    document.querySelector(".total-pagar_inNav").classList.remove('addPadding');
  }
  return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}



const yesDeleteInfoCardInNav = document.querySelector(".yes_delete_info_cards_inNav");
const deleteInfoCard = document.querySelector('.delete-info__card');
const ctnQuestionDeleteCard = document.createElement('div');
deleteInfoCard.innerHTML = '';

  function deleteCard(ubicationCardBody, positionInNav) {
    ctnQuestionDeleteCard.classList.add("cartel-off-cristal-delete_inNav");


    document.querySelector(".ctn-delete-info__card").classList.add('visible')

    nameActually = document.querySelectorAll(".name-products")[positionInNav].innerText;

    // console.log("44", nameActually)
    ctnQuestionDeleteCard.innerHTML =  `
    
          <div class="cartel-off-or-not">
              <div class="cartel-question_inNav">
                ¿Desea quitar del carrito de compras, y eliminar los valores actuales del producto: <br/> <span class="ctn-name_Actually">${nameActually}</span>&nbsp?
              </div> 
          </div>
          <div class="ctn_of_btn_delete_inNav">
              <button class="yes_delete_info_cards_inNav" onclick="yesDeleteInfoCard(${ubicationCardBody}, ${positionInNav})">SI</button>
              <button class="no_delete_ctn_question_inNav" onclick="noDeleteInfoCard()">NO</button>
          </div> 
     
    `
  }

  deleteInfoCard.append(ctnQuestionDeleteCard);


function noDeleteInfoCard() {
  document.querySelector(".ctn-delete-info__card").classList.remove("visible");
}


totalOfProducts = 0;

// Funcion para mostrar HTML

const showHTML = () => {

  let counter = document.querySelector(".count-products");
  let cartEmpty = document.querySelector(".ctn-cartel-cart-empty");
  let ctnMessageWsp = document.querySelector(".ctn-messages");

  if (!allProducts.length) {
    counter.classList.add('hidden');
    cartEmpty.classList.remove('no_Visible');
    rowProduct.classList.remove('no__Visible');
    ctnMessageWsp.classList.add('hidden');
  } else {
    counter.classList.remove('hidden');
    cartEmpty.classList.add('no_Visible');
    ctnMessageWsp.classList.remove('hidden');
  }
  
  // Limpiar HTML
  rowProduct.innerHTML = '';

  converWsp.innerHTML = '';

  converMessageWsp.innerHTML = '';

  
  total = 0;
  position = 0;
  numOfProduct = 1;
  totalOfProducts = 0;
  

    allProducts.forEach(data => {

        const containerProduct = document.createElement('div');
        containerProduct.classList.add("cart-product");
        namesProductsBlack = "name-product";
        nameProductWhite = "name-product-white";

        data.total = total + parseInt(data.order * data.price);
        console.log(data.totalOfProducts = totalOfProducts + data.total)
        
        numero = data.stock === -1 ? "-" : data.stock;

        ctnNameColor = data.nameYellow; if( data.order > 0 && data.stock >= 0 ) { ctnNameColor = data.nameGreen; } if ( data.order >= 0  &&  data.stock === -1 ) {ctnNameColor = data.nameRed; }
        ctnBtnsColor = data.ctnBtnsYellow; if( data.order > 0 && data.stock >= 0 ) { ctnBtnsColor = data.ctnBtnsGreen; } if ( data.order >= 0  &&  data.stock === -1 ) { ctnBtnsColor = data.ctnBtnsRed; }
        namesOfProducts = namesProductsBlack; if(data.stock === -1) {namesOfProducts = nameProductWhite;}

          containerProduct.innerHTML = `
                      
                      <div class="${ctnNameColor}">

                          <div class="ctn-num-product" data-for="${numOfProduct}"> 
                            <div class="container">${numOfProduct}</div>
                          </div>

                          <span class="${namesOfProducts} name-products" data-for="${data.position}">${data.title}</span>
  
                        <div class="ctn-icon-close"> 
                            <div class="container">
                              <div class="bar1"></div>
                              <div class="bar2"></div>
                              <div class="bar3"></div>
                            </div>
                        </div>
                      </div>

                      <div class="ctn-rotate-info">

                        <div class="info default-info">

                            <div class="info-cart-product">

                                <div class="ctn-price-product">
                                  <span class="price-product">Precio</span>
                                  <p class="price-product-cart">${formatNumber(data.price)}</p>
                                </div>
                              
                                <div class="ctn-order-product">
                                  <span class="order-product">Comprar</span>
                                  <span class="quantity-order-product">${data.order}</span>
                                </div>

                                <div class="ctn-stock-product">
                                  <span class="stock-product">Stock</span>
                                  <p class="quantity-stock-product">${numero}</p>
                                </div>

                                <div class="ctn-total-product">
                                  <span class="total-product">Total</span>
                                  <p class="price-total-product">${formatNumber(data.total)}</p>
                                </div>
                                
                            </div>

                        </div>  

                        <div class="info-btn hover-info">

                            <div class="${ctnBtnsColor}">
                              <button  class="borrar" onclick="deleteCard(${data.position}, ${position})">Borrar
                              
                              <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" fill="currentColor"
                                class="bi bi-trash" viewBox="0 0 16 16">

                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                              
                              </svg>
                            
                              </button>
                              <a  class="modified" href="#${data.card}" onclick="closeNav(${data.position})">
                              Modificar
                              
                              <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" 
                                fill="currentColor" 
                                class="bi bi-pen" 
                                viewBox="0 0 16 16">

                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>

                              </svg>

                              </a>   
                            </div>

                        </div>

                      </div>

        `

        totalOfProducts = totalOfProducts + data.order * data.price;
        
        const ctnProductWsp = document.createElement('div');
        ctnProductWsp.classList.add("messages");

        cantidadOrder = "unidad";      
        if ( data.order === 1 ) { cantidadOrder = "unidad"} if ( data.order > 1 || data.order === 0 ) { cantidadOrder = "unidades"}
    

        if( data.order > 0 && data.stock >= 0 ) {
        
        ctnProductWsp.innerHTML =  `
          <div class="test">
              Producto: &nbsp ${numOfProduct} <br/>
              <br/>
              &nbsp [ &nbsp ${(data.title).toUpperCase()} &nbsp ] <br/>
              <br/>
              &nbsp &nbsp* Comprar: &nbsp ${data.order} <br/>
              &nbsp &nbsp* Stock: &nbsp ${numero} <br/>
              <br/>
              • Precio por unidad: &nbsp ${formatNumber(data.price)} <br/>
              -> Total por (&nbsp${data.order}&nbsp) ${cantidadOrder}: &nbsp ${formatNumber(data.total)} <- <br/>
              <br/>
              """""""""""""""""""""""""""""""""""""" <br/>
          </div>
          
          `

        } if( data.order === 0 && data.stock >= 0 ) {
        
          ctnProductWsp.innerHTML =  `
            <div class="test">
              Producto: &nbsp ${numOfProduct} <br/>
              <br/>
              &nbsp [ &nbsp ${(data.title).toUpperCase()} &nbsp ] <br/>
              <br/>
              &nbsp &nbsp* Comprar: &nbsp ${data.order} <br/>
              &nbsp &nbsp* Stock: &nbsp ${numero} <br/>
              <br/>
              """""""""""""""""""""""""""""""""""""" <br/>
          </div>
          
          `

        } if( data.order >= 0 && data.stock >= 0 && position + 1 === allProducts.length ) {

          console.log('position ', position + 1)

          ctnProductWsp.innerHTML =  `
            <div class="test">
                Producto: &nbsp ${numOfProduct} <br/>
                <br/>
                &nbsp [ &nbsp ${(data.title).toUpperCase()} &nbsp ] <br/>
                <br/>
                &nbsp &nbsp* Comprar: &nbsp ${data.order} <br/>
                &nbsp &nbsp* Stock: &nbsp ${numero} <br/>
                <br/>
                • Precio por unidad: &nbsp ${formatNumber(data.price)} <br/>
                -> Total por (&nbsp${data.order}&nbsp) ${cantidadOrder}: &nbsp ${formatNumber(data.total)} <- <br/>
                <br/>
                """""""""""""""""""""""""""""""""""""" <br/>
                <br/>
                <span class="total-wsp"> (&nbsp Total por toda la compra: &nbsp ${formatNumber(totalOfProducts)} &nbsp) </span> <br/>
                <br/>
            </div>
            
            `		

        } 

        const productWsp = document.createElement('div');
        productWsp.classList.add("messagesWsp");


        if( data.order > 0 && data.stock >= 0 ) {

          productWsp.innerHTML = `<div class="test">Producto: &nbsp ${(numOfProduct)} %0A %0A  [ &nbsp ${(data.title).toUpperCase()} &nbsp ] %0A %0A   * Comprar: &nbsp ${data.order} %0A   * Stock: &nbsp ${numero} %0A %0A • Precio por unidad: ${formatNumber(data.price)}  %0A -> Total por (&nbsp${data.order}&nbsp) ${cantidadOrder}: ${formatNumber(data.total)} <- %0A %0A <strong>""""""""""""""""""""""""""""""""""""""</strong> %0A%0A</div>`

        } if( data.order === 0 && data.stock >= 0 ) {
        
           productWsp.innerHTML = `<div class="test">Producto: &nbsp ${(numOfProduct)} %0A %0A  [ &nbsp ${(data.title).toUpperCase()} &nbsp ] %0A %0A   * Comprar: &nbsp ${data.order}</strong> %0A   * Stock: &nbsp ${numero} %0A %0A <strong>""""""""""""""""""""""""""""""""""""""</strong>%0A%0A</div>`

        } if( data.order >= 0 && data.stock >= 0 && position + 1 === allProducts.length ) {

           productWsp.innerHTML = `<div class="test">Producto: &nbsp ${(numOfProduct)} %0A %0A  [ &nbsp ${(data.title).toUpperCase()} &nbsp ] %0A %0A   * Comprar: &nbsp ${data.order} %0A   * Stock: &nbsp ${numero} %0A %0A • Precio por unidad: ${formatNumber(data.price)}  %0A -> Total por (&nbsp${data.order}&nbsp) ${cantidadOrder}: ${formatNumber(data.total)} <- %0A %0A <strong>""""""""""""""""""""""""""""""""""""""</strong> %0A %0A <span class="total-wsp">(&nbsp Total por toda la compra: ${formatNumber(totalOfProducts)} &nbsp) </span> %0A%0A</div>`

        } 

          rowProduct.append(containerProduct);

          converWsp.append(ctnProductWsp);
          converMessageWsp.append(productWsp);

          console.log('data.totalOfProducts ', data.totalOfProducts = totalOfProducts + data.total)

          // function format (n) {
          //   return n.toFixed(2).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
          //     return '.' + s
          //   })
          // }

          // calculations = [totalOfProducts];

          // console.log('calculations ', calculations.map(format))

          
          console.log('calculations ', formatNumber(totalOfProducts))
          
          document.querySelector(".total-pagar").innerHTML = formatNumber(totalOfProducts);
          document.querySelector(".total-pagar_inNav").innerHTML = formatNumber(totalOfProducts);  

        position++
        numOfProduct++

    });


    localStorage.setItem("allProducts", JSON.stringify(allProducts));   // Guardando en localStorage


  let tester = document.querySelector(".test");

  console.log('ctnMessageWsp ', ctnMessageWsp.textContent,  ctnMessageWsp.textContent.length)
  
  // console.log('k ', isNaN(tester.length)) 
  let contain = document.getElementsByClassName('test').length;

  console.log('contain.legth ', contain, 'type contain.legth ', typeof contain)

  
    if ( contain >= 1 ) {
      
      console.log('tester ', tester.textContent,  tester.textContent.length)

    } if ( contain === 0 ) {

      console.log('tester ', tester = 0)

    }


    const ctnBtn = document.querySelectorAll(".ctn-icon-close");

    for (let i = 0; i < ctnBtn.length; i++) {
      ctnBtn[i].addEventListener("click", function() {
      
        document.querySelectorAll(".bar1")[i].classList.toggle("change");
        document.querySelectorAll(".bar2")[i].classList.toggle("change");
        document.querySelectorAll(".bar3")[i].classList.toggle("change");
      
        document.querySelectorAll(".ctn-rotate-info")[i].classList.toggle("btnsVisible")

      }
    )}
  
}


$(".ctn-btn-message").click(function(){

  let tester = document.querySelector(".test");

  let testWsp = document.querySelector(".testWsp");
  
   let ctnMessageWsp = document.querySelector(".converMessageWsp");
	
   console.log('ctnMessageWsp ', ctnMessageWsp)
	
  let contain = document.getElementsByClassName('test').length;

  console.log('contain.legth ', contain, 'type contain.legth ', typeof contain)

  
    if ( contain >= 1 ) {
      
      console.log('tester ', tester.textContent,  tester.textContent.length)

      document.querySelector(".preloader").classList.toggle("hidden");

      window.addEventListener("blur", () => {
      document.querySelector(".preloader").classList.add("hidden");
      })

	    
    } if ( contain === 0 ) {

      console.log('tester ', tester = 0);

    }

  if( contain >= 1 ){
      var phone = "+5491150649933";
      if (phone){
          window.location = "https://api.whatsapp.com/send?phone="+phone+"&text="+ctnMessageWsp.textContent;
      }
  }  

})



let ctnBtnLimpiarCards = document.querySelector(".ctn-btn-limpiar-cards");

var scrollTimer = -1;

function bodyScroll() {
  
  document.querySelector(".ctn-btn-limpiar-cards").classList.add('noVisible');

  if (scrollTimer != -1)
    clearTimeout(scrollTimer);

  scrollTimer = window.setTimeout("scrollFinished()", 100);
}

function scrollFinished() {
  document.querySelector(".ctn-btn-limpiar-cards").classList.remove('noVisible');
}


const btnToTop = document.querySelector(".btnToNavbar");
const btnOptionMenu = document.querySelector(".options"); 

btnToTop.addEventListener('click', () => {
  document.querySelector(".ctn-btn-limpiar-cards").classList.toggle("btnFloating");
  document.querySelector(".limpiar-cards").classList.toggle("btnInNavbar");
  document.querySelector(".options").classList.toggle("visibleInNavbar");  
  document.querySelector(".btnToNavbar").classList.toggle("visiblebtnFloating");
  document.querySelector(".btnToNav").classList.toggle("visiblebtnFloating");
  document.querySelector("#btnArrowUp").classList.toggle("visiblebtnFloating");
  document.querySelector("#btnArrowDown").classList.toggle("visiblebtnFloating");
  document.querySelector(".delete-info-btn").classList.toggle("btnFloating");
  document.querySelector(".total-pagar_inNav").classList.toggle("visibleFloating");

  document.querySelector(".ctn-btn-limpiar-cards").classList.add("visibility");

  document.querySelector(".footer_section").classList.add("menuFloating");
  document.querySelector(".menu-floating-footer").classList.add("visible");
  document.querySelector(".ctn-text-and-btn-contact").classList.add("menuFloatingVisible");

  let contains = {
    btnsOptionInBottom: true,
  }

   console.log('contains: ', contains.btnsOptionInBottom);

   let btnOption = contains.btnsOptionInBottom;

   localStorage.setItem("btnOptionMenuArr", JSON.stringify(btnOption)); 
})



/*=============== EXPANDED LIST ===============*/
const navExpand = document.getElementById('nav-expand');
const navExpandList = document.getElementById('nav-expand-list');
      navExpandIcon = document.getElementById('nav-expand-icon');
      // deleteInfoAllCards = document.getElementById('delete_info-cards');
      // deleteInfo = document.querySelector(".btnToNavbarTwo");
      deleteCtnQuestion = document.querySelector(".no_delete_ctn_question");
      yesDeleteInfoCards = document.querySelector(".yes_delete_info_cards");
      

btnOptionMenu.addEventListener('click', () => {
   // Expand list
  navExpandList.classList.toggle('show-list');

  document.querySelector(".btnToNavbar").classList.toggle("visiblebtnFloating");
  document.querySelector(".btnToNavbarTwo").classList.toggle("visiblebtnFloating");

  document.querySelector(".options").classList.toggle('hover');
  document.querySelector(".configuration").classList.toggle('no__Visible');
  document.querySelector(".options-close").classList.toggle('visible');
 
})


const btnToNav = document.querySelector(".btnToNav");

btnToNav.addEventListener('click', () => {
  document.querySelector(".ctn-btn-limpiar-cards").classList.remove("btnFloating");
  document.querySelector(".limpiar-cards").classList.remove("btnInNavbar");
  document.querySelector(".options").classList.remove("visibleInNavbar");
  document.querySelector(".btnToNavbar").classList.remove("visiblebtnFloating");
  document.querySelector(".btnToNav").classList.remove("visiblebtnFloating");
  document.querySelector(".delete-info-btn").classList.remove("btnFloating");
  document.querySelector("#btnArrowUp").classList.remove("visiblebtnFloating");
  document.querySelector("#btnArrowDown").classList.remove("visiblebtnFloating");
  document.querySelector(".total-pagar_inNav").classList.remove("visibleFloating");

  document.querySelector(".ctn-btn-limpiar-cards").classList.remove("visibility");
  
  document.querySelector(".footer_section").classList.remove("menuFloating");
  document.querySelector(".menu-floating-footer").classList.remove("visible");
  document.querySelector(".ctn-text-and-btn-contact").classList.remove("menuFloatingVisible");

  let contains = {
    btnsOptionInBottom: false,
  }

   console.log('contains: ', contains.btnsOptionInBottom);

   let btnOption = contains.btnsOptionInBottom;

   localStorage.setItem("btnOptionMenuArr", JSON.stringify(btnOption)); 
})


// allCards

function dataToTrashcan() {

  document.querySelector(".ctn-delete-info-all-cards").classList.add("visible");
  body.classList.remove("moving");
  body.classList.add("stop");

  if ( allProducts.length === 0 ){

    document.querySelector(".cartel-question_").classList.add("noVisible");
    document.querySelector(".yes_delete_info_cards").classList.add("noVisible")
    document.querySelector(".no_delete_ctn_question").classList.add("noVisible")
    document.querySelector(".cards_noValues").classList.remove("noVisible");
    document.querySelector(".btn-cards_noValues").classList.remove("noVisible");

  } if ( allProducts.length > 0 ){
    
    document.querySelector(".cartel-question_").classList.remove("noVisible");
    document.querySelector(".yes_delete_info_cards").classList.remove("noVisible");
    document.querySelector(".no_delete_ctn_question").classList.remove("noVisible");
    document.querySelector(".cards_noValues").classList.add("noVisible");
    document.querySelector(".btn-cards_noValues").classList.add("noVisible");

  }

}

btnCardsNoValues = document.querySelector(".btn-cards_noValues");

btnCardsNoValues.addEventListener('click', () => {
  document.querySelector(".ctn-delete-info-all-cards").classList.remove("visible");
  body.classList.remove("stop");
  body.classList.add("moving");
})


yesDeleteInfoCards.addEventListener('click', () => {

    for (let i = 0; i < allCards.length; i++) { 
    
     	yesResetCard(i)

        allProducts = allProducts.filter(
    	  product =>  product.title !== productName,
        )




        countProducts.innerHTML = allProducts.length;
        countProductFooter.innerHTML = allProducts.length;

        countStock.innerHTML = allProducts.filter(a => a.order === 0 ).length;
        countOrder.innerHTML = allProducts.filter(a => a.order > 0 ).length;

        if (allProducts.length === 0) {
          totalOfProducts = 0;

          document.querySelector(".total-pagar").innerHTML = "$" + totalOfProducts;
          document.querySelector(".total-pagar_inNav").innerHTML = "$" + totalOfProducts;
          // document.querySelector(".total-pagar_footer").innerHTML = "$" + totalOfProducts;
        }
    }

    document.querySelector(".ctn-delete-info-all-cards").classList.remove("visible");
    body.classList.remove("stop");
    body.classList.add("moving");

    showHTML()
})


deleteCtnQuestion.addEventListener('click', () => {
  document.querySelector(".ctn-delete-info-all-cards").classList.remove("visible");
  body.classList.remove("stop");
  body.classList.add("moving");
})


document.addEventListener("DOMContentLoaded", function() {
  // Titulo
    
    console.log('allProducts ', JSON.parse(localStorage.getItem("allProducts")) ); // Devolviendo en localStorage


      todosLasCards = JSON.parse(localStorage.getItem("allProducts"));

      console.log('todosLasCards ', todosLasCards)
    
    if (todosLasCards !== null ) {

      for (let j = 0; j < todosLasCards.length; j++){

        console.log('allProducts.position ', todosLasCards[j].position);
        positionCard = todosLasCards[j].position;
        valueStockCards = todosLasCards[j].stock;
        valueOrderCards = todosLasCards[j].order;

        document.querySelectorAll('.product_card')[positionCard].querySelector('.num_order_counter').value = valueOrderCards

        document.querySelectorAll('.product_card')[positionCard].querySelector('.num_stock_counter').value = valueStockCards
          
        allCards[positionCard].click();

      }

    }

    btnOption = JSON.parse(localStorage.getItem("btnOptionMenuArr"));

    if (btnOption === true) {
      btnOptionMenu.click();
      btnToTop.click();
    }



    test = JSON.parse(localStorage.getItem("arr"));

    if (test === true) {
        positionBtnList.click();
    }


    scrollToTop()
})


let productListBtn = document.querySelectorAll(".ctn-btn-list");


for (let i = 0; i < productListBtn.length; i++) {
  productListBtn[i].addEventListener('click', function() {
    console.log('click en', productListBtn[i].querySelector("a").getAttribute("href").slice(1))
    cartName = productListBtn[i].querySelector("a").getAttribute("href").slice(1);

    ctnCard = document.querySelectorAll(".container_card")[i].classList.add("violet_active");
    
    setTimeout(function(){
      document.querySelectorAll(".container_card")[i].classList.remove('violet_active');
    
      console.log("holis");
    }, 10000);
    
  }
)}



const header = document.querySelector("header");
const footer = document.querySelector("footer");

const sectionOptions = {
    root: null
};

const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
  const headerEntry = entries.find(entry => entry.target.tagName === 'HEADER');
  const footerEntry = entries.find(entry => entry.target.tagName === 'FOOTER');
  if (headerEntry && headerEntry.isIntersecting) {
    console.log('jazz')
	  
  } else if(footerEntry && footerEntry.isIntersecting) {
    console.log('rock')
    document.querySelector(".ctn-btn-limpiar-cards").classList.add('displayNone');

  } else {
	  
    console.log('urbano')
    document.querySelector(".ctn-btn-limpiar-cards").classList.remove('displayNone');

  }
}, sectionOptions);


sectionObserver.observe(header);
sectionObserver.observe(footer);
