export const orderByAZ = (a,b) => {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
      return -1;
    }              
    return 0;
}
    
export const orderByZA = (a,b) => {
    
    if (a.name < b.name) {
        return 1;
    }
      if (a.name > b.name) {
        return -1;
    }              
      return 0;
}

export const orderMenorMayor = (a,b) => {
    
    if (a.poblacion < b.poblacion) {
        return 1;
    }
      if (a.poblacion > b.poblacion) {
        return -1;
    }              
      return 0;
}

export const orderMayorMenor = (a,b) => {
    
    if (a.poblacion < b.poblacion) {
        return -1;
    }
      if (a.poblacion > b.poblacion) {
        return +1;
    }              
      return 0;
}
        
        
