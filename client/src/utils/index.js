export const orderBycontinente = (setfilterContinente, array, continente) => {
  let papa = array?.filter(c => c.continente === continente)
  setfilterContinente(papa)
}

export const orderByActivities = (array, activity) => {
  array = array.filter(c => c.activities === activity)
  
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
    
export const orderByZA = (a,b) => {
    
    if (a.name < b.name) {
        return 1;
    }
      if (a.name > b.name) {
        return -1;
    }              
      return 0;
}

export const orderPopulation = (a,b) => {
    
    if (a.poblacion < b.poblacion) {
        return 1;
    }
      if (a.poblacion > b.poblacion) {
        return -1;
    }              
      return 0;
}
        
        
