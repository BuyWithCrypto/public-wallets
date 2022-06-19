/*
Copyright 2021 BuyWithCrypto
Website: https://www.buywithcrypto.fr/
Github: https://github.com/BuyWithCrypto/
*/

var bitcoin = "3PiezSn5mbbXXutqpe2dRj8hkKQVvQFzHM"
var ethereum = "0xCBfEeAb49A2301D703278e5C6e3e275360aB6aeC"
var cardano = "Ae2tdPwUPEYwXvb2xSuis7KJHPVmpWjyZ8yrk8HEV9awUyfUop5Vq8HY1Dv"

function showWallets() {
  document.getElementById("wbitcoin").innerHTML = bitcoin.substr(0,30) + " . . ."
  document.getElementById("wethereum").innerHTML = ethereum.substr(0,30) + " . . ."
  document.getElementById("wcardano").innerHTML = cardano.substr(0,30) + " . . ."
}

showWallets()
