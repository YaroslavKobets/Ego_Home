
window.lazyLoad = false;

export const initLazyLoad = () => {
    const lazyLoadPromise = new Promise((resolve, reject) => {
        let dataImages = document.querySelectorAll('img[data-src]');

        dataImages.forEach((img, i) => {
            img.removeAttribute('src');
            img.setAttribute('src', img.getAttribute('data-src'));
            if (img.getAttribute('data-srcset')) img.setAttribute('srcset', img.getAttribute('data-srcset'));
            img.onload = function() {
                img.removeAttribute('data-src');
                img.removeAttribute('data-srcset');
            };		
        });

        resolve()
    })
    
    lazyLoadPromise.then(() => {
        window.lazyLoad = true;
    })
}

