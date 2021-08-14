//Function to validate a String
function isValidString(input){
    if(input != null && input != '' && input != undefined){
       return true;
    }
    return false;
  }
  
  // This functions gets an string an split into a 2d array with a given token.
  function stringTo2dArray(string, d1, d2) {
    if(isValidString(string)){
        return string.split(d1).map(function(x){return x.split(d2)});
    }
  }
  
  // This functions gets the prices.
  function factura(arr){ 
    for(let i=0; i<arr.length; i++){
        const precio_final = PRECIOS[arr[i][1]] || DEFAULT_VALUE
        total = total + (precio_final*arr[i][0])
    }
    return total
  }
  
  //This functions should be implemented in a google spreadsheets Example   = GetTotal(A2;B2)
  function GetTotal(ROW,COLUMN){ //Funccion a utilizar en el sheet. 
    var res = stringTo2dArray((ROW,COLUMN),",", "-")
    return factura(res)
  }