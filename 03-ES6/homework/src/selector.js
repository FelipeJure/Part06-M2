var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if (matchFunc (startEl)) resultSet.push (startEl) 
  for (let i = 0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements (matchFunc,startEl.children[i]);
    resultSet = [...resultSet, ...elements]
  }
  return resultSet
    
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id'
  if (selector[0] === '.') return 'class'
  if (selector.split ('.').length > 1) return 'tag.class'
  // for (let i = 0; i<selector.length; i++){
  //   if (selector[i] === '.') return 'tag.class'
  // }
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (parametro){
      return '#' + parametro.id === selector
      // let selectorId = selector [1]
      // for (let i = 2 ; i < selector.length; i++){
      //   selectorId += selector[i]
      // }
      // if (selectorId === parametro.id) return true;
      // return false
    } 
  }
  else if (selectorType === "class") {
    matchFunction = function (parametro){
      // let selectorClass = selector [1]
      // for (let i = 2 ; i < selector.length; i++){
      //   selectorClass += selector[i]
      // }
      const array = parametro.className.split (' ')
      for (let i = 0; i < array.length; i++){
        if (selector === '.' + array[i]) return true;
      }
      return false
    }
  } 
  else if (selectorType === "tag.class") {
    matchFunction = function (parametro){
      [tag,clase] = selector.split ('.');
  //  return matchFunctionMaker (tag) (parametro) && matchFunctionMaker (`.${clase}`) (parametro)
      if (parametro.tagName.toLowerCase() === tag){
        const newArray = parametro.className.split (' ')
        for (let j = 0; j < newArray.length; j++){
          if (clase === newArray[j]) return true;
        }
      }
      return false
    }
  } 
  else if (selectorType === "tag") {
    matchFunction = function (parametro){
      return parametro.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
