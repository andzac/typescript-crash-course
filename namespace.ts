namespace myOldNamespace {
    export const textNS = 'I am inside a ts NS';

    //I need to export the function to use it outside the namespace..
    export function displayDataNS(){
        return textNS;
    }
}

console.log(myOldNamespace.displayDataNS());