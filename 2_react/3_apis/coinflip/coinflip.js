function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

function fiveHeads() {
        return new Promise( (resolve, reject) => {

        let headsCount = 0;
        let attempts = 0

        while(headsCount < 5 && attempts < 100){
            let result = tossCoin();
            attempts++;
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount=0;
            }
            console.log(`${result} was flipped, heads in a row: ${headsCount}, attempt: ${attempts}`);
        }

        if(headsCount === 5) {
            resolve(`It took ${attempts} tries to flip 5 heads`);
        } else {
            reject("Unable to flip 5 heads within 100 flips");
        }

        });
    }

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "This output is while coin flips are in progress" );
        