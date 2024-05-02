import ProtoType from "prop-types";
import Reminder from './Remainder'

//functional component

export default function RemainderList(props) {
    const Reminders = props.reminders || []
    return (
        <div>
            {Reminders.map((reminder, index) => {
                return (
                    <Reminder
                        reminderText={reminder.reminderText}
                        dueDate={reminder.dueDate}
                        isComplete={reminder.isComplete}
                        id={index}
                        key={index}
                    />
                )
            })}
        </div>
    )
}


RemainderList.protoType = {
    Reminder: ProtoType.array
}