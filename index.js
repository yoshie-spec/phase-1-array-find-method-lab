// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

  function superbowlWin(record) {
    const win = record.find(year => year.result === "W");
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}



// /it('returns a year the Denver Broncos won the superbowl', function () {
//     expect(superbowlWin(record)).to.equal('2015');
//       });
    
//       it('returns undefined if the record has no win objects', function() {
//         const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
//         expect(superbowlWin(sadReality)).to.equal(undefined)
//       });
//     });
// /    