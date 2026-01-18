import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import SelectLimit from './components/SelectLimit';
import { getUsers, getLength } from './api/users';
import { useEffect, useState } from 'react';

function App() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    let totalPage = Math.ceil(getLength() / limit);
    const pageNo = Math.min(page, totalPage);

    useEffect(() => {
        if (page > totalPage) {
            setPage(totalPage);
        }
    }, [limit, totalPage, page]);

    function handlePageChange(value) {
        if (value === '&laquo;' || value === '... ') {
            setPage(1);
        } else if (value === '&lsaquo;') {
            if (page !== 1) {
                setPage(page - 1);
            }
        } else if (value === '&rsaquo;') {
            if (page !== totalPage) {
                setPage(page + 1);
            }
        } else if (value === '&raquo;' || value === ' ...') {
            setPage(totalPage);
        } else {
            setPage(value);
        }
    }

    return (
        <div className="container">
            <Table users={getUsers(page, limit)} />
            <div className="pagination-container">
                <SelectLimit onLimitChange={setLimit} />

                <Pagination
                    totalPage={totalPage}
                    page={pageNo}
                    limit={limit}
                    siblings={1}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default App;
