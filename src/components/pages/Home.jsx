import { useState } from "react"
import InputForm from "../Inputform"
import Filterlist from "../Filterlist"
import Remainderlist from "../Remainderlist"

export default function Home() {
    const date = new Date()
    const formattedDate = date.toISOString().substring(0, 10)
    const initialState = {
        reminderText: "no text yet",
        dueDate: formattedDate,
    }
    const [reminders, setReminders] = useState()
    const [userInput, setUserInput] = useState(initialState)
    const [selectedFilter, setSelectedFilter] = useState("all")
    return (
        <div>
            <InputForm userInput={userInput} setUserInput={setUserInput} />
            <Filterlist selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <Remainderlist remainders={reminders} setReminders={setReminders} />
        </div>

    )
}

