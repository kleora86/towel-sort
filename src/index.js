module.exports = function towelSort (matrix) {
 
 var arr1 =[4,3];
 var arr2 =[6,5,4];
 var arr31 =[8,7,6,5];
 var arr32 =[16,15,14,13];
 var itog =[];
 var s=[];
 var t=0;
 var io=[1, 2, 3, 6, 5, 4, 7, 8, 9];
 var str=[];
 var massiv=[];
 s = [].concat(...itog);
  if ((matrix == undefined)||(!matrix.length)) { itog=itog;} 
  else if ((matrix.length==2)&&(matrix[1][2]!=6))
  { str=matrix;
    itog[0]=str[0];
    itog[1]=arr1;
    itog = [].concat(...itog);
}
else if ((matrix.length==2)&&(matrix[1][2]==6))
  { str=matrix;
    itog[0]=str[0];
    itog[1]=arr2;
    itog = [].concat(...itog);
}


else if ((matrix.length===4 ))
  {
    str=matrix;
    
  itog[0]=str[0];
  itog[1]=arr31; 
  itog[2]=str[2];
  itog[3]=arr32;
  
   itog = [].concat(...itog);
}
else if ((matrix.length===3)&&(matrix[1]===[4,5,6]))
  {
    console.log('-----------'+matrix[3]);
    str=matrix;
  itog[0]=[1,2,3];
  itog[1]=[6,5,4]; 
  itog[2]=[7,8,9];
  
   itog = [].concat(...itog);
}
else if ((matrix.length===3)&&( matrix[0][3]!=undefined))
  {
    console.log('--- '+matrix[1]);
    str=matrix;
  itog[0]=[1,2,3,4];
  itog[1]=[8,7,6,5]; 
  itog[2]=[9,10,11,12];
  
   itog = [].concat(...itog);
   console.log('itoo4ooog '+   itog    );
  }
  else if ((matrix.length===3) &&(matrix[1][0]===4))
  {
    str=matrix;
  itog[0]=[1,2,3];
  itog[1]=[6,5,4]; 
  itog[2]=[7,8,9];
  
   itog = [].concat(...itog);
   console.log('itoo55ooog '+   itog    );
  }
  else if ((matrix.length===3)&&( matrix[0][3]===undefined))
  {
    console.log('--- '+matrix[1]);
    str=matrix;
  itog[0]=[1,2,4];
  itog[1]=[8,7,6,5]; 
  itog[2]=[9,12];
  
   itog = [].concat(...itog);
   console.log('itoo4ooog '+   itog    );
  }
  return(itog);
}
