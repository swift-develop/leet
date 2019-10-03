"use strict";

const print = console.log


/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    
    if ( strs.length === 0 ) {
        return ""
    }

    let longestString = ""

    let firsWord = strs.pop()

    for ( let c of firsWord ) {
        longestString += c

        for ( let word of strs ) {
            print( word) 
            if ( word.startsWith(longestString) === false ) {
                return longestString.slice(0,-1)
            }
        }

    }

    return longestString
};


let input = []

let r = longestCommonPrefix(input)

print( 'result = ', r )