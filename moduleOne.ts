namespace myNamespace {
    export const text = 'I am inside a ts namespace';

    //I need to export the function to use it outside the namespace..
    export function displayData(){
        return text;
    }
}
