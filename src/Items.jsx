import SingleItem from './SingleItem';
import {useQuery} from '@tanstack/react-query'
import customFetch from './utilis';
import axios from   'axios'
import { useFetchtasks } from './reactQueryCustomHooks';
const Items = ({ items }) => {
const {isError, isLoading, data} = useFetchtasks()
  // console.log(data);
  if(isLoading) {
  return  <main>
      <p className="loading">loading</p>
    
       </main>
  }
  if(isError) {
    return <p style={{marginTop:'2rem'}}>there was an error getting the data you requested for </p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
