import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useCreatTask } from './reactQueryCustomHooks';


const Form = () => {

  const [newItemName, setNewItemName] = useState('');
  const {creatTask, isLoading} = useCreatTask(setNewItemName)

  
  const handleSubmit = (e) => {
    creatTask(newItemName)
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
