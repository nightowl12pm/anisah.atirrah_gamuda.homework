import { useState } from "react";

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');
    const [filterCategory, setFilterCategory] = useState('All');

    // Tambah perbelanjaan baharu
    const addExpense = (e) => {
        e.preventDefault();
        if (!description || !amount) return;

        const newExpense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category
        };

        setExpenses([...expenses, newExpense]);
        setDescription('');
        setAmount('');
    };

    // Padam perbelanjaan mengikut ID
    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    // Tapis perbelanjaan mengikut kategori yang dipilih
    const filteredExpenses = filterCategory === 'All' 
        ? expenses 
        : expenses.filter(expense => expense.category === filterCategory);

    // Kira jumlah keseluruhan perbelanjaan
    const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Personal Expense Tracker</h2>

            {/* Borang untuk tambah perbelanjaan */}
            <form onSubmit={addExpense} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                    </select>
                </div>
                <button type="submit">Add Expense</button>
            </form>

            {/* Pilihan Penapisan (Filter) */}
            <div style={{ marginBottom: '20px' }}>
                <label>Filter by Category: </label>
                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                </select>
            </div>

            {/* Senarai Perbelanjaan */}
            <h3>Expenses List</h3>
            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul>
                    {filteredExpenses.map(expense => (
                        <li key={expense.id} style={{ marginBottom: '8px' }}>
                            {expense.description} - ${expense.amount.toFixed(2)} ({expense.category})
                            <button 
                                onClick={() => deleteExpense(expense.id)} 
                                style={{ marginLeft: '10px', color: 'red' }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Jumlah Keseluruhan */}
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
        </div>
    );
}

export default ExpenseTracker;