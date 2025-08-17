(function () {
    const list = document.getElementById('todo-list');

    list.addEventListener('click', (evt) => {
        const li = evt.target.closest('li.task');
        if (!li) return;
        toggleTask(li);
    });

    list.addEventListener('keydown', (evt) => {
        const li = evt.target.closest('li.task');
        if (!li) return;

        const isActivateKey = (
            evt.key === 'Enter' ||
            evt.key === ' ' ||
            evt.code === 'Space'
        );

        if (evt.key === 'Enter' || evt.code === 'Space' || evt.key === ' ') {
            evt.preventDefault();
            toggleTask(li);
        }
    });

    function toggleTask(li) {
        const willBeCompleted = !
        li.classList.contains('completed');

        li.classList.toggle('completed', willBeCompleted);
        li.setAttribute('aria-checked', String(willBeCompleted));
        const check = li.querySelector('.check');
        if (check) {
            check.setAttribute('aria-hidden', String(!willBeCompleted));
            check.tabIndex = willBeCompleted ? 0 : -1
        }
    }

    document.querySelectorAll('#todo-list .task').forEach(li => {
        const check = li.querySelector('.check');
        const completed = li.classList.contains('completed');
        if (check) {
            check.setAttribute('aria-hidden', String(!completed));
            check.tabIndex = completed ? 0 : -1
        }
    });
})();










