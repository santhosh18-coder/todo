export default function AddTask({taskName,setTaskName,handleTask}) {
    
    return (
        <div className='AddTask'>
            <label htmlFor='description'>Add Task</label>
            <input type='text' id='description' name='description' value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
            <button onClick={handleTask}>+</button>
        </div>

    )
}