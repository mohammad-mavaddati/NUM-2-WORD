"use strict";
function num2word(input) {
  let dic1 = {
    1: "یک",
    2: "دو",
    3: "سه",
    4: "چهار",
    5: "پنج",
    6: "شش",
    7: "هفت",
    8: "هشت",
    9: "نه",
  };
  let dic2 = {
    10: "ده",
    11: "یازده",
    12: "دوازده",
    13: "سیزده",
    14: "چهارده",
    15: "پانزده",
    16: "شانزده",
    17: "هفتده",
    18: "هجده",
    19: "نوزده",
    2: "بیست",
    3: "سی",
    4: "چهل",
    5: "پنجاه",
    6: "شصت",
    7: "هفتاد",
    8: "هشتاد",
    9: "نود",
  };
  let dic3 = {
    1: "صد",
    2: "دویست",
    3: "سیصد",
    4: "چهارصد",
    5: "پانصد",
    6: "ششصد",
    7: "هفتصد",
    8: "هشتصد",
    9: "نهصد",
  };

  let vahed = {
    4: "هزار",
    7: "میلیون",
    10: "میلیارد",
    13: "تریلیون",
    16: "کوادریلیون",
    19: "کوینتیلیون",
    22: "سیکستیلون",
    25: "سپتیلیون",
    28: "اکتیلیون",
    31: "نونیلیون",
    34: "دسیلیون",
    37: "آندسیلیون",
    40: "دودسیلیون",
    43: "تریدسیلیون",
    46: "کواتردسیلیون",
    49: "کویندسیلیون",
    52: "سیکسدسیلیون",
    55: "سپتندسیلیون",
    58: "اکتودسیلیوم",
    61: "نومدسیلیون",
  };
  let vahed_turn = 1;
  let dic_list = ["none", dic1, dic2, dic3];
  let dic_turn = 1;

  let output = [];
  let i = 1;
  while (i <= input.length) {
    if (dic_turn == 4) {
      dic_turn = 1;
      if (input.slice(input.length - i - 2, input.length - i + 1) > 0 || input.slice(input.length - i - 1, input.length - i + 1) > 0 || input.slice(input.length - i, input.length - i + 1) > 0) {
        output.push(vahed[i]);
      }
    }
    if (dic_turn == 1 && input.slice(input.length - i - 1, input.length - i + 1) > 9 && 20 > input.slice(input.length - i - 1, input.length - i + 1)) {
      output.push(dic2[input.slice(input.length - i - 1, input.length - i + 1)]);
      i += 2;
      dic_turn += 2;
      continue;
    }
    if (input[input.length - i] == 0) {
      dic_turn++;
      i++;
      continue;
    }

    output.push(dic_list[dic_turn][input[input.length - i]]);
    dic_turn++;
    i++;
  }

  let output2 = [];

  for (let i = 0; i < output.length; i++) {
    output2.push(output[i]);
    if (i + 1 != output.length && Object.values(vahed).includes(output[i]) && Object.values(vahed).includes(output[i + 1])) {
      output2.push("و");
    } else if (i + 1 != output.length && !Object.values(vahed).includes(output[i])) {
      output2.push("و");
    }
  }

  return output2.reverse().join(" ");
}

function do_it() {
  const reg = /^\d+$/;
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let error = document.getElementById("error");
  let is_true = reg.test(input.value);

  if (is_true) {
    if (input.value.length > 63) {
      output.textContent = "out of range";
    } else {
      error.classList.add("invisible");
      output.textContent = num2word(input.value);
    }
  } else {
    if(input.value.length > 0){
      error.classList.remove("invisible");
    }else{
      error.classList.add("invisible");
      output.textContent = ""
    }
    input.value = input.value.slice(0, -1);
  }
}
