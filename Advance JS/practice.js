// let myPromise = new Promise(function(myResolve, myReject) {
// 	// "Producing Code" (May take some time)
// 		console.log('a');
// 		console.log('b');
// 	  myResolve(); // when successful
// 	  myReject();  // when error
// 	});
	
// 	// "Consuming Code" (Must wait for a fulfilled Promise)
// 	myPromise.then(
// 	  function(value) { 
// 			setTimeOut(() => console.log('c'), 3000);
// 			setTimeOut(() => console.log('d'), 0);
// 			console.log('e')},
// 	  function(error) {console.log(error)}
// 	);

function a() {
    b();
}

function b() {
}

function c() {
    setTimeout(console.log('c'), 3000);
    d();
}

function d() {
    setTimeout(console.log('d'), 0);
}

function e() {
    console.log('e');
}

async function display() {
    console.log('a');
    console.log('b');
    await myPromise

    var myPromise = new Promise( ( resolve, reject ) => {
        resolve();
        reject( 'Nothing' );
      } );
      myPromise
      .then( c() )
      .catch( )
      .finally( e() );
    
}

display()



