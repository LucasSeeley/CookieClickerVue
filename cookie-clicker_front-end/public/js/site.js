// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

export function randomInteger(min, max)
{
    //check to make sure max is less than min
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomFloat(min, max)
{
    //check to make sure max is less than min
    return Math.random() * (max - min) + min;
}
 