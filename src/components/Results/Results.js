import { useLoaderData } from 'react-router-dom';
import "./Results.css"
import ShowResult from './ShowResult';

const Results = () => {
    const results = useLoaderData();
    return (
        <div className='results'>
            <h3 className='my-3 text-white'>All Results Here</h3> 
            <div>
                {
                    results.map((result) => <ShowResult allresult={result} key={result.id} />)
                }
            </div>
        </div>
    )
};

export default Results;