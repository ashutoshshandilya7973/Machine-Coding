const x = document.querySelectorAll('.box');
let queue = [];

x.forEach(box => {
    box.addEventListener('click', function () {
        this.style.backgroundColor = 'red';
        queue.push(this); 

        if (queue.length > 6) {
            queue.forEach((q, i) => {
                setTimeout(() => {
                    q.style.backgroundColor = 'white';
                },i* 500); 
            });
            queue = []; 
        }
    });
});
