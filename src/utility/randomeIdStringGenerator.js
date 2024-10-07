 export const randomeIdStringGenerator = ( length,idResult ) =>{    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for ( let i = 0; i < length; i++ ){
      idResult += chars.charAt( Math.floor( Math.random() * chars.length ) )    
    }
    return idResult;
}
 
 