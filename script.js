let expenses = [];
let total = 0;

function addExpense() {
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;

    if (category === "" || amount === "" || note === "") {
        alert("Please fill all fields");
        return;
    }

    const date = new Date().toLocaleDateString();

    const expense = {
        date,
        category,
        amount: parseFloat(amount),
        note
    };

    expenses.push(expense);
    renderExpenses();
    clearForm();
}

function renderExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";
    total = 0;

    expenses.forEach(exp => {
        const row = `
            <tr>
                <td>${exp.date}</td>
                <td>${exp.category}</td>
                <td>₹${exp.amount}</td>
                <td>${exp.note}</td>
            </tr>
        `;
        list.innerHTML += row;
        total += exp.amount;
    });

    document.getElementById("total").innerText = `Total: ₹${total}`;
}

function clearForm() {
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";
}
