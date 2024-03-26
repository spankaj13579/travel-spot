window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    document.querySelector('#close').addEventListener('click', () => {
      document.querySelector('.nav-majore').classList.toggle('hide');
      document.querySelector('#ham').classList.remove('hide');
      document.querySelector('.minor-nav').classList.toggle('hide');
    });
    document.querySelector('#ham').addEventListener('click', () => {
        document.querySelector('.nav-majore').classList.toggle('hide');
        document.querySelector('#ham').classList.toggle('hide');
        document.querySelector('#ham').classList.add('hide');
        document.querySelector('.minor-nav').classList.toggle('hide');
    });
});