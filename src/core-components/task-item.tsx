import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import React from "react";
import InputText from "../components/input-text";
import { Task, TaskState } from "../models/task";
import { cx } from "class-variance-authority";
import UseTask from "../hooks/use-task";

interface TaskItemProps{
    task: Task;
}


export default function TaskItem({task}: TaskItemProps){

    
    function handleEditing(){
        setIsEditing(true);
    }

    function handleExitEditTask(){
        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "");
    }
       
    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        updateTask(task.id, {title: taskTitle});
        setIsEditing(false);
    }
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = React.useState(task.title || "");
    const {updateTask} = UseTask();

    return (
    <Card size="md">
        
        {!isEditing ? (

         <div className="flex items-center gap-4">
          <InputCheckbox  
            value={task?.concluded?.toString()} 
            checked={task?.concluded}
          />
        <Text 
            className={cx("flex-1",{
                "line-through": task?.concluded,
            })}>{task?.title}
        </Text>
            <div className="flex gap-1">
                <ButtonIcon  type="button"  icon={TrashIcon} variant="tertiary"/>         
                <ButtonIcon 
                type="button"                
                icon={PencilIcon} 
                variant="tertiary"
                onClick={handleEditing}
            />
            </div>
   
         </div>   
        ) : (
            <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText 
            value={taskTitle}
                className="flex-1" 
                onChange={handleChangeTaskTitle} 
                required 
                autoFocus
            />
            <div className="flex gap-1">
                <ButtonIcon 
                    type="button" 
                    icon={XIcon} 
                    variant="tertiary"
                />         
                <ButtonIcon 
                    type="submit"
                    icon={CheckIcon} 
                    variant="tertiary"
                    onClick={handleExitEditTask}
                />
            </div>
            </form>
        )}
    </Card>
    );
}