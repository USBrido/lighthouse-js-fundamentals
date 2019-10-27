// check divisibility
// print Loopy, Lighthouse, or LoopyLighthouse
for (let x = 100; x <= 200; x++) {
      // check divisibility
      if (x % 3 === 0 && x % 4 === 0){
        // print LoopyLighthouse
          console.log('LoopyLighthouse');
      } else if (x % 4 === 0) {
        //print Lighthouse
          console.log('Lighthouse');
      } else if (x % 3 === 0) {
        // print Loopy
          console.log('Loopy');
      } else {
          console.log(x);
      }
}