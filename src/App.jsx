import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { getUsers, getLength } from './api/users';
import { useState } from 'react';

function App() {
    const [page, setPage] = useState(4);
    const [limit, setLimit] = useState(5);

    let totalPage = Math.ceil(getLength() / limit);

    return (
        <div className="container">
            <Table users={getUsers(page, limit)} />
            <Pagination
                totalPage={totalPage}
                page={page}
                limit={limit}
                siblings={1}
            />
        </div>
    );
}

export default App;
