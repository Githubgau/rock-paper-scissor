import React from 'react'

function Computer({elemen,choice}) {
    user=0
    comp=0

    if (elemen=='rock'){
        if (choice=='paper'){
            comp+=1
        }
        if(choice=='scissor'){
            user+=1
        }
    }

    if(elemen=='paper'){
        if (choice=='rock'){
            user+=1
        }
        if (choice=='scissor'){
            comp+=1
        }
    }

    if (elemen=='scissor'){
        if(choice=='paper'){
            comp+=1
        }
        if(choice=='rock'){
            user+=1
        }
    }
    return(
        <div>s</div>
    )
}

export default Computer