import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { getUsers } from './api/users';
import { useState } from 'react';

function App() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    return (
        <div className="container">
            <Table users={getUsers(page, limit)} />
            <Pagination />
        </div>
    );
}

export default App;
