
function solution(A) {
  const array = A;
  const result = [];
  let p, q, r;
  const len = array.length;
  for(let i=1; i<len; i++){
  	console.log('first', p,q,r)
  	if(array[i+1] == undefined){
  		r = i;
  		console.log('r2', i)
  		if(p && r){
        	console.log(1111, p,q,r)
        	pitDeeper(p, q, r);
        	p = r;
        	q = null;
        	r = null;
        }
  	} else {
        if(array[i-1] < array[i] && array[i] > array[i+1]){
        	if(!p){
        		p = i
            	console.log('p', i)
        	} else {
            	r = i;
            	console.log('r1',  i)
        	}
        } else if(array[i-1] > array[i] && array[i] < array[i+1] && p) {
            q = i;
            console.log('q', i)
        }
        if(p && r){
        	console.log(1111, p,q,r)
        	pitDeeper(p, q, r);
        	p = r;
        	q = null;
        	r = null;
        }
  	}
  }


  function pitDeeper(p, q, r){
    const temp1 = array[p] - array[q];
    const temp2 = array[r] - array[q];
    result.push(Math.min(temp1, temp2));
  }
  return Math.max(...result);
}
