// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
let numDatabase = [];
//factory function to pump out PAequors. Takes any integer for specimen num, dnaArray uses mockUpStrand list
const pAequorFactory = (num, dnaArray) => {

  if (numDatabase.includes(num)) {
    num = Math.floor(Math.random() * 1000);
    while (numDatabase.includes(num)) {
      num = Math.floor(Math.random() * 1000);
    }
    numDatabase.push(num);
  } else {
    numDatabase.push(num);
  }
  return {
    specimenNum: num,
    dnaArray: (dnaArray),
//adds a method to mutate the DNA if you want to
    mutate() {
      let mutatedNum = Math.floor(Math.random() * this.dnaArray.length);
      let dnaToMutate = returnRandBase();
      while (this.dnaArray[mutatedNum] === dnaToMutate) {
        dnaToMutate = returnRandBase();
      }
      this.dnaArray[mutatedNum] = dnaToMutate;
      return this.dnaArray;

    },
//allows you to compare samples
    compareDNA(pAequorName) {

      let sameDnaCount = 0;
      for (let i = 0; i < this.dnaArray.length; i++) {
        if (this.dnaArray[i] === pAequorName.dnaArray[i]) {
          sameDnaCount++;
        }
      }
      console.log(`pAequor ${this.specimenNum} has the following DNA:\n ${this.dnaArray}.\n pAequor ${pAequorName.specimenNum} has the following DNA:\n ${pAequorName.dnaArray}.\n ${((sameDnaCount / dnaArray.length) * 100).toFixed(2)}% of bases are similar.`)
    },
    willLikelySurvive() {
      let CandGCounter = 0;
      for (let i = 0; i < this.dnaArray.length; i++) {
        if (this.dnaArray[i] === 'C' || this.dnaArray[i] === 'G') {
          CandGCounter++;
        }
      }
      let probability = (CandGCounter / this.dnaArray.length) * 100
      return probability >= 60;
    }
  };
}

let germ = pAequorFactory(1, mockUpStrand());
let germ2 = pAequorFactory(1, mockUpStrand());
console.log('Original ' + germ.dnaArray)
console.log('Original ' + germ.dnaArray)
germ.mutate();
germ.compareDNA(germ2);
console.log('Mutated! ' + germ.dnaArray)
console.log(germ.willLikelySurvive());


// function returns 30 viable DNA pAequorInstances
let sampleGroup = []
pAequorInstances = () => {
  while (sampleGroup.length < 30) {
    let sampleInstance = pAequorFactory(1, mockUpStrand());
    if (sampleInstance.willLikelySurvive()) {
      sampleGroup.push(sampleInstance);
    }
  }
  return sampleGroup
}

// creates the 30 viable DNA pAequorInstances
pAequorInstances() 
//displays them - cannot use `` for objects
sampleGroup.forEach((instance, index) => {
  console.log(`Instance ${index + 1}:`);
  console.log("Specimen Number:", instance.specimenNum);
  console.log("DNA:", instance.dnaArray);
  
});








