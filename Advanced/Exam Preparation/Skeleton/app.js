function solve() {
    let [task, date] = document.querySelectorAll('form input');
    let description = document.querySelector('form textarea');
    let sections = document.querySelectorAll('section');
    document.querySelector('#add').addEventListener('click', addToOpen);

    function addToOpen(e) {

        e.preventDefault();

        if (task.value && description.value && date.value) {

            sections[1].lastElementChild.innerHTML +=
                `<article>
              <h3>${task.value}</h3>
              <p>Description: ${description.value}</p>
              <p>Due Date: ${date.value}</p>
                 <div class="flex">
                   <button class="green">Start</button>
                   <button class="red">Delete</button>
                </div>
             </article>`

            Array.from(sections[1].querySelectorAll('button'))
                .forEach(btn => btn.addEventListener('click', navigateTask));

        };
    };


    function navigateTask(e) {

        let btn = e.target;

        if (btn.textContent === 'Start') {
            btn.textContent = 'Delete';
            btn.setAttribute('class', 'red');
            btn.nextElementSibling.textContent = 'Finish';
            btn.nextElementSibling.setAttribute('class', 'orange');
            return document.querySelector('#in-progress').append(btn.parentNode.parentNode);
        }

        if (btn.textContent === 'Delete') {
            return btn.parentNode.parentNode.remove();
        }

        sections[3].lastElementChild.append(btn.parentNode.parentNode);
        sections[3].lastElementChild.lastElementChild.lastElementChild.remove();

    }
}