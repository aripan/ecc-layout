//! 1st suggestion
            // console.log(Math.trunc(Number(result.replace(/,/g, "."))))  
            // let baseAmount= Math.trunc(Number(result.replace(/,/g, ".")))
            // setSuggestedAmountOne(baseAmount +1)  

            let baseAmount = Number(result.split(",")[0])
            setSuggestedAmountOne(baseAmount +1)  



            //! 2nd suggestion
            let amountOneArr=(baseAmount +1).toString().split("");
            let amountTwo;
            if(amountOneArr[amountOneArr.length-1]==="0" || amountOneArr[amountOneArr.length-1] ==="5"){

                let secondLastValue = (Number(amountOneArr[amountOneArr.length-2])+1).toString()
                let lastValue = "0"
                let newTwo =amountOneArr.splice(amountOneArr.length-2, 2, secondLastValue, lastValue)
                console.log(amountOneArr)
                // amountTwo= (Number(amountOneArr[amountOneArr.length-2])+1).toString().concat("0")
                // setSuggestedAmountTwo(amountTwo)
                    
            } 
            
            if(amountOneArr[amountOneArr.length-1]>"0" && amountOneArr[amountOneArr.length-1]<"5"){
                amountTwo=(amountOneArr[amountOneArr.length-2]).concat("5")
                setSuggestedAmountTwo(amountTwo)
                
            }
            
            
            if(amountOneArr[amountOneArr.length-1]>"5"){
                amountTwo= (Number(amountOneArr[amountOneArr.length-2])+1).toString().concat("0")
                setSuggestedAmountTwo(amountTwo)
                
            }

            // //! 3rd suggestion
            // let amountTwoArr= amountTwo.split("");
            // let amountThree;
            // if(amountTwoArr[amountTwoArr.length-2]<"5"){
            //     amountThree= "50"
            //     setSuggestedAmountThree(amountThree)
            // }
            
            
            // if(amountTwoArr[amountTwoArr.length-2]>"5"){
            //     amountThree= "100"
            //     setSuggestedAmountThree(amountThree)
            // }

            // //! 4th suggestion
            // let amountFour= Number(amountThree) * 2
            // setSuggestedAmountFour(amountFour)

            