import { create } from "zustand"
import { persist } from "zustand/middleware"

const taskStore = ( set ) => ({
    tasks:[],
    addTask: (task) => {
        set((state) => ({
            tasks: [...state.tasks,task]
        }))
    },
    deleteTask: (id) => {
        set((state)=>({
            tasks: state.tasks.filter((ele)=>{
                return ele.id !== id
            })
        }))
    },
    toggleStatus: (id)=>{
        set((state)=>({
            tasks: state.tasks.map((ele)=>{
                return ele.id === id ? {...ele , done:true} : ele 
            })
        }))
    },
    editTask: (id, newTask, newPriority)=>{
        set((state)=>({
            tasks: state.tasks.map((ele)=>{
                return ele.id === id ? { ...ele, title: newTask, priority: newPriority } : ele
            })
        }))
    },
    theme:"Dark",
    toggleTheme: () => {
        set((state)=>({
            theme: state.theme === "Light" ? "Dark" : "Light"
        }))
    }
})
const usetaskStore = create(
    persist(taskStore,{
        name:"tasks"
    })
)
export default usetaskStore;