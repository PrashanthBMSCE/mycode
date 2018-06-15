async function proceeArray(array){
	for(const item of array){
		await delayedLog(item);
	}
	console.log('Done');
}
function delay(){
	return new Promise(resolve=>setTimeout(resolve,300));
}

async function delayedLog(item){
	//await delay();
	console.log(item);
}

proceeArray([1,2,3]);

/* var students = [
  { 
    threadid : "163fcc4d8538977a",
    status: "read"
    
  },

  { threadid : "163f37e5c20cd2bb",
    status: "unread"
  },  
  { threadid : "163f3878423cde23",
    status: "read"
  },  
]


for(var i=0;i<students.length;i++){
	
console.log(students[i].status);
} */
 /*  students.forEach(myFunction);

function myFunction (item, index) {

  for( var key in item ) {
   console.log(item[key])
  }
} */
