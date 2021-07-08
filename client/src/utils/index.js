export const orderBycontinente = (a,b) => {
    if (a.continente > b.continente) {
        return 1;
      }
      if (a.continente < b.continente) {
        return -1;
      }              
      return 0;
}


export const orderByAZ = (a,b) => {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
      return -1;
    }              
    return 0;
}
    
export  const orderByZA = (a,b) => {
    
    if (a.name < b.name) {
        return 1;
    }
      if (a.name > b.name) {
        return -1;
    }              
      return 0;
}
        
        
