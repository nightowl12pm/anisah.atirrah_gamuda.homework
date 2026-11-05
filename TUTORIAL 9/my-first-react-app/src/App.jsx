import UserForm from './components/UserForm';
import TodoList from './components/TodoList';
import TemperatureConverter from './components/TemperatureConverter';
import ShoppingCart from './components/ShoppingCart';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Latihan React: State Management</h1>
      
      <hr />
      <h2>1. Object State Management (UserForm)</h2>
      <UserForm />

      <hr />
      <h2>2. Array State Management (TodoList)</h2>
      <TodoList />

      <hr />
      <h2>3. Temperature Converter Calculation (TemperatureCoonverter)</h2>
      <TemperatureConverter />

      <hr />
      <h2>4. Lists of Shopping Cart</h2>
      <ShoppingCart />

      <hr  />
      <h2>5. Expense Tracker</h2>
      <ExpenseTracker />

    </div>
  );
}

export default App;