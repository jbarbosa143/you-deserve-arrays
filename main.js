/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(array){
  item = array[0];
  return item;
}

function getLastItemFrom(array){
  item= array.length -1;
  return array[item];
}

function getIndex3(array){
  if(array.length >=4){
    return array[3];
  }
  return array[array.length-1];
}

function isLongList(array){
  if(array.length >=10){
    return true;
  }else{
    return false;
  }
}

function firstItemIsNumber(array){
  if(typeof array[0] === "number"){
    return true;
  }else{
    return false;
  }
}

function secondCharOfThirdString(array){
  item =array[2];
  return item[1];
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
