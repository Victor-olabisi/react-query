import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utilis";
import { toast } from "react-toastify";
import { useDeleteTask, useEditTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {

  // const queryClient = useQueryClient()

  // edit task
const {editTask} = useEditTask()

  // delete task
  const {deleteTask} = useDeleteTask()

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId:item.id,isDone:!item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
