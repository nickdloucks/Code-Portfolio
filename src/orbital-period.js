function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447; // measure from center of Earth's core to sea level

    function OP(obj){
        console.log(obj.name);
        console.log(obj.avgAlt);
        let altitude = obj.avgAlt; // distance between object and the ground/sea level
        let axis = earthRadius + altitude; // radius/axis of the elipse/orbit is the object's altitude plus Earth's radius
        //-- the following is the equation for calculating an orbital period in a few steps
        let step1 = (axis ** 3) / GM; // implement formula for calculating orbital period step by step:
        let step2 = Math.sqrt(step1);
        let step3 = 2 * Math.PI * step2; 
        let orbPeriod = Math.round(step3);
        console.log(orbPeriod);
        return {name: obj.name, orbitalPeriod: orbPeriod};  
    }

    let nArr = arr.map(OP);
    console.log(nArr[0]);

    return nArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
