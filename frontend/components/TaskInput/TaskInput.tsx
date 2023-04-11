import { Button, TextField } from '@mui/material'

const TaskInput = () => {
  return (
    <>
      <div className="task-input">
        <TextField id="outlined-basic" label="Input Task" variant="outlined" size="small" />
        <Button variant="text">Add</Button>
      </div>
    </>
  )
}

export default TaskInput
