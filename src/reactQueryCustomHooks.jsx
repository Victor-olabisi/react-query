import { useQuery, useQueryClient, useMutation} from "@tanstack/react-query"
import { toast } from "react-toastify"
import customFetch from "./utilis"
export const useFetchtasks = ()=>{
    const {isLoading, data, isError} = useQuery({
        queryKey:['task'],
        queryFn:async () => {
          const {data} = await customFetch('/')
          return data
    
        },
      })
      return{isLoading, isError, data}
}

// create task
export const useCreatTask = (setName)=>{
    const queryClient=useQueryClient()
  
 const {mutate:creatTask,isLoading}=useMutation({
  mutationFn:(taskTitle)=> customFetch.post('/', {title:taskTitle}),
  onSuccess:()=>{
   queryClient.invalidateQueries({queryKey:['task']})
   toast.success("task added successfully")
   setName('')
  },
  onError:(error)=>{
    toast.error(error.response.data.msg)
  }
 })
 return{creatTask, isLoading}
}

// edit task
export const useEditTask =()=>{
    const queryClient=useQueryClient()

    const {mutate:editTask}=useMutation({
        mutationFn:({taskId,isDone})=> customFetch.patch(`/${taskId}`,{isDone}),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['task']})
          toast.success('task editted sucessfully')
        },
        onError:(error)=>{
          toast.error(error.reponse.data.mesg)
        }
      })
      return {editTask}
}

export const  useDeleteTask = ()=>{
    const queryClient=useQueryClient()

    const {mutate:deleteTask} = useMutation({
        mutationFn:(id)=> customFetch.delete(`/${id}`),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['task']})
          toast.success('task deleted')
        }
      })
      return{deleteTask}
}
