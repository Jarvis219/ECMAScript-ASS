export const useParams = () => {
    const url = window.location.hash.toLocaleLowerCase();
    // console.log(url);
    const request = url.split('/');
    // console.log(request);
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }
}

export const $$ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}

export const reRender = async (component, position = " ") => {
    console.log(component);
    if (position) {
        $$(position).innerHTML = await component.render();
        // console.log(0);
    } else {
        // console.log(1);
        $$('#main-content').innerHTML = await component.render();
    }
    await component.afterRender();
}

export const btnScoll = () => {
    var menu = document.getElementById('menu');
    var btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    })
    var heading = document.getElementById('heading');
    var banner = document.getElementById('banner');
    window.addEventListener('scroll', function () {
        heading.style.opacity = 100;
        banner.style.marginTop = '96px';
        banner.style.transition = 'all 1s';
        setTimeout(function () {
            heading.style.opacity = 0;
            heading.style.transition = 'all 1s';
            banner.style.marginTop = 0;
        }, 3000)
    });
    heading.addEventListener('mousemove', function () {
        heading.style.opacity = 100;
        banner.style.marginTop = 96;
    });
}

export const prices = (x) => {
    return x = x.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    });
}