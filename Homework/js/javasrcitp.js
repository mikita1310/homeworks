"use strict";

window.onload = function () {
  info();
};

function info() {
  var name = "";
  var ageY;
  var gen;
  var ageD;
  var ageF;
  var poly;
  var ret;
  
  function fio() {
    while (!name || isFinite(parseInt(name))) {
      name = prompt("Введите ваше ФИО:");
    }
  }
  fio();
  function ageYears() {
    while (!ageY || (isFinite(ageY) && (1 <ageY) && (ageY > 100)))  {
      ageY = parseInt(prompt("Введите ваш возраст"));
    }
   
    ageD = ageY * 365;
    ageF = ageY + 5;
  }
  ageYears();

  function pol() {
    gen = confirm("Мужчина или Женщина?");
    if (gen == true) {
      poly = "Мужчина";
    } else {
      poly = "Женщина";
    }
  }
  pol();

  function retirement() {
    if (gen == true && ageY >= 65) {
      ret = "Да";
    } else if (gen == false && ageY >= 60) {
      ret = "Да";
    } else {
      ret = "Нет";
    }
  }
  retirement();

  alert(
    "Ваше ФИО: " +
      name +
      "\nВаш возраст в годах: " +
      ageY +
      "\nВаш возраст в днях: " +
      ageD +
      "\nЧерез 5 лет вам будет: " +
      ageF +
      "\nВаш пол: " +
      poly +
      "\nВы на пенсии: " +
      ret
  );
}
