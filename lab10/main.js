function init() {
    const mainDiv = document.getElementById('main');
    const header = document.createElement('header');
    const mainSection = document.createElement('main');
    const footer = document.createElement('footer');

    const leftPanel = document.createElement('div');
    const content = document.createElement('div');
    const rightPanel = document.createElement('div');

    mainSection.id = 'mainSection';
    leftPanel.id = 'leftPanel';
    content.id = 'content';
    rightPanel.id = 'rightPanel';

    header.style.height = '100px';
    mainSection.style.height = '500px';
    footer.style.height = '100px';

    leftPanel.style.width = '33%';
    content.style.width = '33%';
    rightPanel.style.width = '33%';

    header.style.backgroundColor = 'lightblue';
    leftPanel.style.backgroundColor = 'lightgreen';
    content.style.backgroundColor = 'lightcoral';
    rightPanel.style.backgroundColor = 'lightgoldenrodyellow';
    footer.style.backgroundColor = 'lightgray';

    mainDiv.appendChild(header);
    mainDiv.appendChild(mainSection);
    mainDiv.appendChild(footer);
    mainSection.appendChild(leftPanel);
    mainSection.appendChild(content);
    mainSection.appendChild(rightPanel);

    const loaderLeft = document.createElement('div');
    loaderLeft.className = 'loader';
    leftPanel.appendChild(loaderLeft);

    const loaderContent = document.createElement('div');
    loaderContent.className = 'loader';
    content.appendChild(loaderContent);

    const loaderRight = document.createElement('div');
    loaderRight.className = 'loader';
    rightPanel.appendChild(loaderRight);

    const buttons = ['User Rating', 'News', 'Contacts', 'About'];
    buttons.forEach((btnText) => {
        const button = document.createElement('button');
        button.textContent = btnText;
        header.appendChild(button);

        button.addEventListener('click', () => {
            content.textContent = btnText;
        });
    });

    const currentUsers = document.createElement('div');
    currentUsers.id = 'currentUsers';
    currentUsers.textContent = 'Current users: 10';

    const newUsers = document.createElement('div');
    newUsers.id = 'newUsers';
    newUsers.textContent = 'New users: User1, User2';

    footer.appendChild(currentUsers);
    footer.appendChild(newUsers);

    setTimeout(() => {
        loaderContent.style.display = 'none';
        content.textContent = 'No users';

        getUsersButton = document.createElement('button');
        getUsersButton.textContent = 'Get Users';
        content.appendChild(getUsersButton);

        loaderLeft.style.display = 'none';
        searchInput = document.createElement('input');
        searchInput.id = 'searchInput';
        searchInput.type = 'text';
        searchInput.placeholder = 'Enter search text';
        leftPanel.appendChild(searchInput);

        searchButton = document.createElement('button');
        searchButton.id = 'searchButton';
        searchButton.textContent = 'Search';
        leftPanel.appendChild(searchButton);
        
        searchButton.addEventListener('click', () => {
            const searchText = searchInput.value.toLowerCase();
            highlightRows(searchText);
        });

        loaderRight.style.display = 'none';
        const sumScoresDiv = document.createElement('div');
        sumScoresDiv.textContent = 'Sum of Scores: Calculating...';
        rightPanel.appendChild(sumScoresDiv);

        const editCheckbox = document.createElement('input');
        editCheckbox.type = 'checkbox';
        editCheckbox.id = 'editCheckbox';
        editCheckbox.addEventListener('change', () => {
            const isChecked = editCheckbox.checked;
            renderUsersTable(users, isChecked);
        });
        
        const editLabel = document.createElement('label');
        editLabel.textContent = 'Edit table';
        editLabel.htmlFor = 'editCheckbox';
        
        rightPanel.appendChild(editCheckbox);
        rightPanel.appendChild(editLabel);

        getUsersButton.addEventListener('click', async () => {
            loaderContent.style.display = 'block';
            content.textContent = '';

            try {
                const users = await fetchUsers();
                const sumScores = users.reduce((sum, user) => sum + user.score, 0);
                sumScoresDiv.textContent = `Sum of Scores: ${sumScores}`;
            } catch (error) {
                console.error('Error fetching users:', error);
                content.textContent = 'Failed to fetch users';
            } finally {
                loaderContent.style.display = 'none';
            }
        });
    }, 1000);

    // Додайте цей код в кінець вашої функції init()

document.addEventListener('DOMContentLoaded', function () {
    const checkButton = setInterval(() => {
        if (getUsersButton) {
            clearInterval(checkButton);

            getUsersButton.addEventListener('click', async () => {
                loaderContent.style.display = 'block';
                content.textContent = '';

                try {
                    const users = await fetchUsers();
                    renderUsersTable(users);
                    // Додаємо обробник для кліку на заголовок "Lastname" для сортування
                    const lastnameHeader = document.querySelector('th:first-child');
                    lastnameHeader.addEventListener('click', () => {
                        users.sort((a, b) => a.lastname.localeCompare(b.lastname));
                        renderUsersTable(users);
                    });
                } catch (error) {
                    console.error('Error fetching users:', error);
                    content.textContent = 'Failed to fetch users';
                } finally {
                    loaderContent.style.display = 'none';
                }
            });
        }
    }, 100);
});

    
    function renderUsersTable(users, enableEdit) {
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
    
        const headerRow = document.createElement('tr');
        ['Firstname', 'Lastname', 'Score', enableEdit ? 'Actions' : ''].forEach(headerText => {
            const th = document.createElement('th');
            th.style.border = '1px solid black';
            th.style.padding = '8px';
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
    
        table.appendChild(headerRow);
    
        users.forEach(user => {
            const row = document.createElement('tr');
            ['firstname', 'lastname', 'score'].forEach(key => {
                const td = document.createElement('td');
                td.style.border = '1px solid black';
                td.style.padding = '8px';
                td.textContent = user[key];
                row.appendChild(td);
            });
    
            if (enableEdit) {
                const tdActions = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    deleteRow(row);
                });
                tdActions.appendChild(deleteButton);
                row.appendChild(tdActions);
            }
    
            table.appendChild(row);
        });
    
        content.innerHTML = '';
        content.appendChild(table);
    }
    
    
    function highlightRows(searchText) {
        const table = document.querySelector('table');
        const rows = table.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let rowContainsText = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(searchText)) {
                    rowContainsText = true;
                }
            });

            if (rowContainsText) {
                row.style.backgroundColor = 'yellow';
            } else {
                row.style.backgroundColor = '';
            }
        });
    }

    function deleteRow(row) {
        row.parentNode.removeChild(row);
    }

    
}

init();
