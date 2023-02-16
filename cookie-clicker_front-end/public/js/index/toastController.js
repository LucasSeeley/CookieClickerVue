import $ from 'jquery';
import {Toast} from 'bootstrap';

const maxToast = 10;


export function createToast(text, delay)
{
    //comment this out later
    //delay = 1000000;
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("fade");
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    toast.setAttribute("data-delay", delay);
    toast.innerHTML = `
        <div class="d-flex">
        <div  class="toast-body">
                ${text}
        </div>
        <button  type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`
        ;

    document.getElementById("toast-container").appendChild(toast);
    Toast.getOrCreateInstance(toast).show();

    toast.addEventListener("hidden.bs.toast", function () {
        toast.remove();
    });


    let toasts = $("#toast-container .toast");
    /*reverse for to get rid of oldest toasts first*/
    for (let i = toasts.length - 1; i > maxToast; i--)
    {
        toasts[i].remove();
    }
}
