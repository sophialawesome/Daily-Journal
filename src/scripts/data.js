const API = "http://localhost:3000/entries"

export default {
    getJournalEntries() {
        return fetch(`${API}`)
            .then(response => response.json());
    },
    saveJournalEntry(entry) {
        return fetch(`${API}`, {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)

        });
    }
}
