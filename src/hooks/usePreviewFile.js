 
//  on slection of file show user preview  file of what they selected
const usePreviewFile = (files) => {
   
    
    
    if ( files.length > 0 ){
       
        // create Array of files for iteration
        const arrayOfFiles = Array.from( files )
       
        // map through arrayOfFiles to return the name of the file for for     indentification for user
          var fileNames = arrayOfFiles.map( file => file.name ) 
       
        //map map through arrayOfFiles to return url
          var previewFileUrl =arrayOfFiles.map( file => URL.createObjectURL( file ) )
    }
    
    return [ previewFileUrl,fileNames ];
    
    
}

export default usePreviewFile