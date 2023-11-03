// index.js


function distanceFromHqInBlocks(street) {
    const hq = 42; 
    return Math.abs(street - hq);
  }
 
  function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    const feetPerBlock = 264; 
    return distance * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
  
    if (feet <= 400) {
      return 0; 
    } else if (feet > 400 && feet <= 2000) {
      return (feet - 400) * 0.02; 
    } else if (feet > 2000 && feet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
