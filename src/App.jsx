import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';
import { getUsers } from './api/users';

function App() {
    return (
        <div className="container">
            <Table users={getUsers()} />
        </div>
    );
}

export default App;
