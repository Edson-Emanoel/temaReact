import notes from "../data.json";
import Note from "../components/Note";
import NoteForm from "../components/NoteForm";
import { ThemeOption } from "../components/ThemeOption"

function Notes() {
    return (
        <>
            <div>
                <h1>✍️ Minha Lista de Tarefas</h1>
            </div>

            <div className="theme-options">
                <ThemeOption theme="dark" />
                <ThemeOption theme="light" />
                <ThemeOption theme="purple" />
            </div>

            <NoteForm />

            <div>
                {notes.map((note) => (
                    <Note key={note.$id} noteData={note} />
                ))}
            </div>
        </>
    );
}

export default Notes;
